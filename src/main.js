import { createApp } from 'vue'
import App from './App'

import components from "@/components/UI";
import router from "@/components/router/router";
import directives from '@/directives';
import store from "@/components/store";
createApp(App).mount('#app')

const app = createApp(App)
components.forEach(components => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})
app
    .use(router)
    .mount('#app')
    .use(store)

