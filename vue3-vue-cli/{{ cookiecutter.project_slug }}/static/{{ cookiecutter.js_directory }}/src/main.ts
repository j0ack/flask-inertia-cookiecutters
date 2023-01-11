import { createApp, h, App } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';

type StrOrNum = string | number

declare global {
  interface Window {
    reverseUrl(urlName: string, args?: Record<string, unknown> | StrOrNum | StrOrNum[]): string
  }
}

// create a plugin to use window.reverseUrl in our Components
const routePlugin = {
  install: (app: App, _options: Record<string, unknown>) => {
    app.config.globalProperties.$route = window.reverseUrl;
  }
}

createInertiaApp({
  resolve: async name => {
    const page = await import(`./pages/${name}`);
    return page.default;
  },
  setup({ el, app, props, plugin }) {
    const vueApp = createApp({ render: () => h(app, props) });
    vueApp.use(plugin);
    vueApp.use(routePlugin);
    vueApp.mount(el);
  }
})
