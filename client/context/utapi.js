"use server";
import { UTApi } from "uploadthing/server";
export const utapi = new UTApi();
export async function UploadFiles(formData) {
      const files = formData.getAll("files");
      const response = await utapi.uploadFiles(files);
      //    ^? UploadedFileResponse[]
    }