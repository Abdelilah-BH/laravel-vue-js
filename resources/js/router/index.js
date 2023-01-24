import { createRouter, createWebHistory } from "vue-router";

import Products from "../pages/product/index.vue";
import Home from "../pages/home.vue";
import NotFound from "../pages/not-found.vue";

const routes = [
    {
        path: "/product",
        name: "Product",
        component: Products,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
