import os
import json
from ai_engine.modulers.pose_estimatio.openpose.process import get_keypoints_from_openpose
from ai_engine.modules.pose_estimation.smpl.smpl import map_keypoints_to_3d

def process_image(image_path):
    base_name = os.path.splitext(os.path.basename(image_path))[0]

    keypoints_2d = get_keypoints_from_openpose(image_path)

    if keypoints_2d is None:
        print(f"❌ Không có keypoints từ OpenPose cho ảnh {image_path}!")
        return None

    keypoints_3d = map_keypoints_to_3d(keypoints_2d)
    output_dir = os.path.abspath(os.path.dirname(image_path))
    keypoints_file = os.path.join(output_dir, f"{base_name}_3dkeypoints.json")
    with open(keypoints_file, 'w') as f:
        json.dump(keypoints_3d, f)

    return keypoints_file
