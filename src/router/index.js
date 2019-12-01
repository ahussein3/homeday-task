import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const UserProfile = () =>
  import(/* webpackChunkName: "UserProfile" */ "../views/User-profile.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/user-details/:userName",
    name: "user-profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserProfile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
