const SET = require("@src/settings.json");
import parent from "./progressObj";

export default class FakeObj extends parent {
  name: string;
  file: File;
  progress: number;
  fakexhr: Promise<any>;
  timeout: NodeJS.Timeout;

  constructor(file: File, onSuccess: () => void, onError: (error: any) => void, onProgress?: (number: number) => void) {
    super(file, onSuccess, onError, onProgress);
    var formData = new FormData();
    formData.append("file", file);
    this.fakexhr = new Promise<number>((resolve, reject) => {
      this.progress = 0;
      let timeouter = () => {
        this.progress += Math.random() * 0.1;
        this.progress = Math.min(this.progress, 1);
        onProgress(this.progress);
        if (this.progress >= 1) {
          resolve(1);
          return;
        }
        return setTimeout(timeouter, Math.random() * 100);
      };
      this.timeout = timeouter();
    })
      .then(v => {
        onSuccess();
      })
      .catch(e => {
        onError(e);
      });
  }

  abort() {
    clearTimeout(this.timeout);
  }
}
