import item from '../tamplates/item.hbs'
import imageServise from './apiServise.js'
import refs from './refs.js'

import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

const {list, button , form } = refs


form.addEventListener('submit', formSearch)
button.addEventListener('click', btnLoadMore)

function formSearch(event) {
  event.preventDefault()
  imageServise.imageName = event.currentTarget.elements.query.value
  if (event.currentTarget.elements.query.value === '' ||
  event.currentTarget.elements.query.value.length < 2
  ) {
    return error({ text: "Please specify your request", delay: 1500})
  }
  resetPage()
  imageServise.fetchImages().then(({ hits }) => {
    clearList()
    list.insertAdjacentHTML('beforeend', item(hits))
  })
  button.classList.add('visible')
}


function btnLoadMore() {
  pageIncrease()
  imageServise.fetchImages().then(({ hits }) => {
    list.insertAdjacentHTML('beforeend', item(hits))
  }).then(() => 
  button.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
  }))
}

const pageIncrease = () => {
  imageServise.page += 1
}
const resetPage = () => {
  imageServise.page = 1
}
const clearList = () => {
  list.innerHTML = ''
}

