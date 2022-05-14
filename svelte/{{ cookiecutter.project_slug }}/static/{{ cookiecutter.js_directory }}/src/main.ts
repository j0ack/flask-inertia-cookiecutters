// @ts-nocheck
import { createInertiaApp } from '@inertiajs/inertia-svelte'

const routes = {
  index: import('./pages/Index.svelte')
}

createInertiaApp({
  resolve: name => routes[name.toLowerCase()],
  setup({ el, App, props }) {
    new App({ target: el, props })
  },
})
