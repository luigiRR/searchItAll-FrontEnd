import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faCar,faUtensils,faHome,faMagnifyingGlass,faBars,faPlus,faXmark,faChevronLeft,faChevronRight,faGlobe } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faCar,faUtensils,faHome,faMagnifyingGlass,faBars,faPlus,faXmark,faChevronLeft,faChevronRight,faGlobe)

const app = createApp(App)

app.use(router)

app.component('icon', FontAwesomeIcon).mount('#app')
