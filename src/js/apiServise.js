export default {
    imageName: '',
    page: 1,
    fetchImages(imageName) {
   return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.imageName}&page=${this.page}&per_page=12&key=16190641-6f6d4120eafc733567c1d4bc7`
).then(
    response => response.json()
)}
}
