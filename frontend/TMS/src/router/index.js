import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";

import AdminDashboard from "../views/AdminDashboard";
import ADean from "../views/ADean.vue";
import Hod from "../views/Hod.vue";
import Student from "../views/Student.vue";
import Supervisor from "../views/Supervisor.vue";
import PsDivison from "../views/PsDivison.vue";

import admin_routes from "./admin_routes";
import StudentRouter from "./StudentRouter";
import SupervisorRouter from "./SupervisorRouter";
import HodRouter from "./HodRouter";
import PSDivRouter from "./PSDivRouter";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	
	{
		path: "/psadmin",
		children: admin_routes,
		component: AdminDashboard,
	},
	{
		path: "/student",
		component: Student,
		children: StudentRouter,
		meta: {
			title: "PS | Student",
		},
	},
	{
		path: "/supervisor",
		component: Supervisor,
		children: SupervisorRouter,
	},
	{
		path: "/hod",
		component: Hod,
		children: HodRouter,
	},
	{
		path: "/psd",
		component: PsDivison,
		children: PSDivRouter
	},
	{
		path: "/asDean",
		component: ADean,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL || "/",
	routes,
});

export default router;
