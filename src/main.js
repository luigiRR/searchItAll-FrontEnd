import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faCar,faUtensils } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faCar,faUtensils)

const app = createApp(App)

app.use(router)

app.component('font-icon', FontAwesomeIcon).mount('#app')
