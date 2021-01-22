import Home from "../views/PSDivision/Home.vue";
import DownloadTransfer from "../views/PSDivision/DownloadTransfer.vue";

const StudentRouter = [
	{
		path: "",
		component: Home,
		meta: {
			title: "PS Admin | Services",
		},
	},
	{
		path: "transfer",
		component: DownloadTransfer,
		meta: {
			title: "PS Admin | Services",
		},
	},
];

export default StudentRouter;
