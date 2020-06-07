import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Form from '@/components/Form';
import Thanks from '@/components/Thanks';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Form",
    name: "Form",
    component: () =>
      import(/* webpackChunkName: "form" */ "../components/Form.vue")
  },
  {
    path: "/Thanks",
    name: "Thanks",
    component: () =>
      import(/* webpackChunkName: "thanks" */ "../components/Thanks.vue")
  }

];

const router = new VueRouter({
  routes
});

export default router;
