import { createApp } from 'vue'
import './style.css'
import axios from 'axios'
import App from './App.vue'

createApp(App).mount('#app')

const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon"


