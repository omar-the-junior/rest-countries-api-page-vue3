import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('click-outside', {
  beforeMount(element, binding) {
    element.clickOutsideEvent = function (event: Event) {
      // Check if the clicked element was the parent element or one of it's children
      if (!(element === event.target || element.contains(event.target))) {
        // if not
        // invoke provided function
        binding.value(event)
      }
    }
    document.body.addEventListener('click', element.clickOutsideEvent)
  },
  unmounted(element) {
    document.body.removeEventListener('click', element.clickOutsideEvent)
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
