const SET = require("@src/settings.json");
import parent from "./progressObj";

export default class FileObj extends parent {
  name: string;
  file: File;
  progress: number;
  xhr: XMLHttpRequest;

  constructor(file: File, onSuccess: () => void, onError: (error: any) => void, onProgress?: (number: number) => void) {
    super(file, onSuccess, onError, onProgress);
    var formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    this.xhr = xhr;
    xhr.open("POST", SET.uploadPath);
    xhr.onload = () => {
      if (xhr.status === 200) {
        onProgress(1);
        onSuccess();
      } else {
        onError(xhr.response);
      }
    };
    xhr.upload.onprogress = event => {
      if (event.lengthComputable) {
        var percent = event.loaded / event.total;
        onProgress(percent);
        this.progress = percent;
      }
    };
    xhr.send(formData);
  }

  abort() {
    this.xhr.abort();
  }
}
