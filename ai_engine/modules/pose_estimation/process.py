import os
import json
import subprocess

IMAGE_DIR = os.path.abspath("../../../storage/input")
OUTPUT_DIR = os.path.abspath("../../../storage/output")
MODEL_DIR = os.path.abspath("./openpose/models")

#Ham chay openpose len tat ca file anh trong 1 folder
def run_openpose(image_path):
    # base_name = os.path.splitext(os.path.basename(image_path))[0]
    image_folder = os.path.abspath(os.path.dirname(image_path))
    command = [
        "docker", "run", "--rm",
        "-v", f"{image_folder}:/workspace/input",
        "-v", f"{image_folder}:/workspace/output",
        "-v", f"{MODEL_DIR}:/workspace/models",
        "mvdoc/openpose-cpu",
        "/openpose/build/examples/openpose/openpose.bin",
        "--image_dir", "/workspace/input",
        "--write_json", "/workspace/output/",
        "--write_images", "/workspace/output/",
        "--display", "0",
        "--net_resolution", "656x368",
        "--model_folder", "/workspace/models/"
    ]

    try:
        subprocess.run(command, check=True)
        print("✅ OpenPose đã xử lý xong!")
    except subprocess.CalledProcessError as e:
        print(f"❌ Lỗi khi chạy OpenPose: {e}")

#Ham tim keypoints cua 1 anh
def get_keypoints_from_openpose(image_path):
    base_name = os.path.splitext(os.path.basename(image_path))[0]
    image_folder = os.path.abspath(os.path.dirname(image_path))
    run_openpose(image_path)
    keypoints_file = os.path.join(image_folder, f"{base_name}_keypoints.json")

    if not os.path.exists(keypoints_file):
        print(f"❌ Không tìm thấy file keypoints cho ảnh {image_path}.")
        return None
    
    with open(keypoints_file, 'r') as f:
        keypoints_2d = json.load(f)

    return keypoints_2d





if __name__ == "__main__":
    image_path = "../../../storage/person2/person2.jpg"  
    keypoints = get_keypoints_from_openpose(image_path)
    if keypoints:
        print("✅ Keypoints 2D đã được lấy thành công!")
    else:
        print("❌ Không thể lấy keypoints từ ảnh!")
