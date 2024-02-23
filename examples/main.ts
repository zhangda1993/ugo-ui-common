import {createApp} from 'vue'
import ugoUi from 'ugo-ui'
import App from './app.vue'
console.log('---ugoUI',ugoUi);
console.log('test');


const app = createApp(App)
app.use(ugoUi)

app.mount('#app')