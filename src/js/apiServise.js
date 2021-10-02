export default {
    imageName: '',
    page: 1,
    async fetchImages(imageName) {
const response = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.imageName}&page=${this.page}&per_page=12&key=23569558-943bf7c3d65c4197ad4bffe73`)
    return await response.json()}
}
