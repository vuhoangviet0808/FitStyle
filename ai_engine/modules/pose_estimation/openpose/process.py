import os
import subprocess

# Định nghĩa đường dẫn tới thư mục chứa ảnh đầu vào và đầu ra
IMAGE_DIR = os.path.abspath("../../../../storage/input")
OUTPUT_DIR = os.path.abspath("../../../../storage/output")
MODEL_DIR = os.path.abspath("./openpose/models")

def run_openpose():
    if not os.path.exists(IMAGE_DIR):
        print(f"❌ Thư mục đầu vào {IMAGE_DIR} không tồn tại!")
        return
    command = [
        "docker", "run", "--rm",
        "-v", f"{IMAGE_DIR}:/workspace/input",
        "-v", f"{OUTPUT_DIR}:/workspace/output",
        "-v", f"{MODEL_DIR}:/workspace/models",
        "mvdoc/openpose-cpu",
        "/openpose/build/examples/openpose/openpose.bin",
        "--image_dir", "/workspace/input/",
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

if __name__ == "__main__":
    run_openpose()
