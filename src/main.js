import { createApp } from 'vue'
import App from './App'
import components from "@/components/UI";
createApp(App).mount('#app')

components.forEach(components => {
    app.component(component.name, component)
})
app.mount('#app');

