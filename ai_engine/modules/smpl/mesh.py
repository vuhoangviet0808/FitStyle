import json
import numpy as np
from ai_engine.modules.pose_estimation.Conver_2D_to_3D import convert_2D_3D
import torch
import smplx
import os

image_path = os.path.abspath("D:/Clothes/prjClothes/storage/input/person2/person2.jpg")
path =  os.path.abspath("D:/Clothes/prjClothes/storage/input/person2")
model_folder = os.path.abspath("D:/Clothes/prjClothes/ai_engine/modules/smpl/smplify-x/smplifyx")
keypoints_3d = convert_2D_3D(image_path)

with open(keypoints_3d, "r") as f:
    data = json.load(f)

keypoints_3d = np.array(data["keypoints_3d"], dtype = np.float32)
np.savez("keypoints_smpl.npz", keypoints=keypoints_3d)
np.savez(f"{path}/keypoints_smpl.npz", keypoints=keypoints_3d)

device = torch.device("cpu")
model = smplx.create(model_folder, model_type="smplx", gender="neutral", use_pca=False, batch_size=1).to(device)

keypoints_tensor = torch.tensor(keypoints_3d, dtype=torch.float32).unsqueeze(0).to(device)
output = model(global_orient=torch.zeros(1, 3, device=device),  # Không xoay toàn bộ
            body_pose=keypoints_tensor[:, 1:],  # Chỉ lấy phần thân (bỏ phần đầu)
            betas=torch.zeros(1, 10, device=device),  # Số đo cơ thể (có thể điều chỉnh)
            transl=torch.tensor([0, 0, 0], dtype=torch.float32, device=device))
vertices = output.vertices.detach().cpu().numpy().squeeze()
faces = model.faces

# Ghi file OBJ
obj_filename = f"{path}/smpl_model.obj"
with open(obj_filename, "w") as f:
    for v in vertices:
        f.write(f"v {v[0]} {v[1]} {v[2]}\n")
    for face in faces:
        f.write(f"f {face[0]+1} {face[1]+1} {face[2]+1}\n")

print(f"✅ Đã tạo mô hình SMPL và lưu vào {obj_filename}")