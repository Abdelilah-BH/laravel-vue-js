import { createRouter, createWebHistory } from "vue-router";

import Products from "../pages/product/index.vue";
import Home from "../pages/home.vue";
// import NotFound from "../pages/not-found.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
    },
    // {
    //     path: "/",
    //     name: "NotFound",
    //     component: NotFound,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
