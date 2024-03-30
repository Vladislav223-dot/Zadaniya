import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SecondaryPage from '../views/SecondaryPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/page2', component: SecondaryPage } 
    ]
});

export default router;
