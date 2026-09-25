import { v2 as cloudinary } from "cloudinary"
import dotenv from "dotenv"

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const uploadProfileImage = (fileBuffer) => new Promise((resolve, reject) => {
    if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
        reject(new Error("Cloudinary environment variables are not configured"))
        return
    }

    const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "medilocator/profile-pics", resource_type: "image" },
        (error, result) => {
            if (error) {
                reject(error)
                return
            }
            resolve(result)
        }
    )

    uploadStream.end(fileBuffer)
})
