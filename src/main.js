import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import FontAwesomeIcon from "@/utils/fontawesome-icons";

const app = createApp(App)

app.component("FontAwesomeIcon", FontAwesomeIcon)

app.use(router)

const store = createStore({
  state() {
    return {
      loggedIn: false
    }
  },
  mutations: {
    setLoggedIn(state, value) {
      state.loggedIn = value
    }
  }
})

document.querySelector("html").classList.add('js');
var fileInput = document.querySelector(".input-file");
var button = document.querySelector(".input-file-trigger");

app.use(store)

app.mount('#app')
