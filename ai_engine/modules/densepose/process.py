import os
import json
import subprocess
import numpy as np
from ai_engine.modules.pose_estimation.process import get_keypoints_from_openpose

IMAGE_DIR = os.path.abspath("./storage/input")
OUTPUT_DIR = os.path.abspath("./storage/output")


def run_densepose(image_path, keypoints_file):
    base_name = os.path.splitext(os.path.basename(image_path))[0]
    image_folder = os.path.abspath(os.path.join(IMAGE_DIR, base_name))
    output_folder = os.path.abspath(os.path.join(OUTPUT_DIR, base_name))
    command = [
        "docker", "run", "--rm",
        "-v", f"{image_folder}:/workspace/input",
        "-v", f"{output_folder}:/workspace/output",
        "-e", "CUDA_VISIBLE_DEVICES=-1",
        "-v","densepose:/densepose/tools", 
        "garyfeng/densepose",
        "python","/densepose/tools/infer.py",
        "--im", f"/workspace/input/{base_name}.jpg",
        "--output-dir", "/workspace/output"
    ]

    try:
        result = subprocess.run(command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print("DensePose done!")
        print("stdout:", result.stdout.decode())
        print("stderr:", result.stderr.decode())
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")

    
def process_image_for_densepose(image_path):
    base_name = os.path.splitext(os.path.basename(image_path))[0]
    image_folder = os.path.abspath(os.path.dirname(image_path))
    output_folder = os.path.join(OUTPUT_DIR, base_name)
    keypoints_json = get_keypoints_from_openpose(image_path, False)
    print(image_folder)
    print(output_folder)
    if not image_path or not image_folder or not keypoints_json:
        print("Invalid input!")
        return
    
    run_densepose(image_path, keypoints_json)
    densepose_output = os.path.join(output_folder,  f"{base_name}_densepose.json")
    if not os.path.exists(densepose_output):
        print(f"Not found file 3D result from DensePose")
        return
    
    with open(densepose_output, 'r') as f:
        densepose_data = json.load(f)

    print("3D result from DensePose:")
    print(densepose_data)

if __name__ == "__main__":
    image_path = os.path.abspath("./storage/input/person2/person2.jpg")
    process_image_for_densepose(image_path)
