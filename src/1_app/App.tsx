import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import AppRouter from "../2_pages/index";
import {
	RouteWithoutRoot,
	RouterProvider,
	createHashRouter,
} from "@vkontakte/vk-mini-apps-router";

const routes: RouteWithoutRoot[] = [
	{
		path: "/",
		panel: "",
		view: "default_view",
	},
	{
		path: "/:id",
		panel: "",
		view: "default_view",
	},
];

const router = createHashRouter(routes);

const App = (): JSX.Element => {
	return (
		<ConfigProvider isWebView={true}>
			<AdaptivityProvider>
				<AppRoot mode="partial">
					<RouterProvider router={router}>
						<AppRouter />
					</RouterProvider>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
};

export default App;
