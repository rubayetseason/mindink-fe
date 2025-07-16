import { config } from "@/config";
import axios from "axios";

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(config.env.image_upload_url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("data", response.data.data[0]);

    if (response.data.success && response.data.data.length > 0) {
      return response.data.data[0];
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Upload Error:", error);
    return null;
  }
};
