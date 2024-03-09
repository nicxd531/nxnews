import { UploadFiles } from "../../../client/context/utapi";

export function MyForm() {
    return (
      <form onSubmit={UploadFiles}>
        <input name="files" type="file" multiple />
        <button type="submit">Upload</button>
      </form>
    );
  }