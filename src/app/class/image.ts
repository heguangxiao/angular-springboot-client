export class Image {
  id?: number;
  imageUrl: string;

  constructor() {
  }

  setImageUrl(image: string) {
    this.imageUrl = image;
  }

  getImageUrl() {
    return  this.imageUrl;
  }
}
