export default abstract class progressObj {
  name: string;
  file: File;
  progress: number;
  onProgress: (progress: number) => void;

  constructor(file: File, onSuccess: () => void, onError: (error: any) => void, onProgress?: (number: number) => void) {
    this.name = file.name;
    this.file = file;
    this.progress = 0;
    this.onProgress = onProgress;
  }

  abstract abort(): void;
}
