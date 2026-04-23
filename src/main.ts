import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Message from "primevue/message"
import Password from 'primevue/password';
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import Aura from '@primeuix/themes/aura';
import Card from 'primevue/card';
import Divider from 'primevue/divider';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import icons and add them to the Library */
import { faUserSecret, faThumbsUp, faGaugeSimpleHigh, faRobot, faListUl, faWallet, faLayerGroup, faStar, faList } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faThumbsUp, faFacebook, faGaugeSimpleHigh, faRobot, faListUl, faWallet, faLayerGroup, faStar, faList)

import './style.css'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: 'tailwind,primeui',
            darkModeSelector: false || 'none',
        }
    }
})
app.component('Button', Button)
app.component('InputText', InputText)
app.component('Message', Message)
app.component('Password', Password)
app.component('Menubar', Menubar)
app.component('Avatar', Avatar)
app.component('Badge', Badge)
app.component('Card', Card)
app.component('Divider', Divider)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
