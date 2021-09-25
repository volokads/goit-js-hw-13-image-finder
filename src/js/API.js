import item from '../tamplates/item.hbs'
import imageServise from './apiServise.js'
const list = document.getElementById('list')
const button = document.querySelector('[type="button"]')
const form = document.getElementById('search-form')
console.log(imageServise);

button.addEventListener('click', () => {
    imageServise.page += 1
    console.log();
    imageServise.fetchImages().then(({ hits }) => {
        list.insertAdjacentHTML('beforeend', item(hits))
    })
    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
    button.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});

})
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const form = event.currentTarget
    imageServise.imageName = form.elements.query.value
    // fetchImages(imageName)
    console.log(imageServise);
    imageServise.fetchImages().then(({ hits }) => {
        list.insertAdjacentHTML('beforeend', item(hits))
    })
    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
    // console.log(document.documentElement.scrollHeight);
    button.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});

})
// 16190641-6f6d4120eafc733567c1d4bc7
const element = document.getElementById('.my-element-selector');
