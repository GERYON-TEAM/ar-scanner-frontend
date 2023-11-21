import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import AppRouter from "../2_pages/";
import {
	RouteWithoutRoot,
	RouterProvider,
	createHashRouter,
} from "@vkontakte/vk-mini-apps-router";
import { ctx } from "../6_shared/lib/reatom/ctx";
import { reatomContext } from "@reatom/npm-react";
import Page404 from "../2_pages/404/index";

const routes: RouteWithoutRoot[] = [
	{
		path: "/",
		panel: "home_panel",
		view: "default_view",
	},
	{
		path: "/offline",
		panel: "offline_panel",
		view: "default_view",
	},
	{
		path: "/404",
		panel: "404_panel",
		view: "default_view",
	},
];

const router = createHashRouter(routes);

const App = (): JSX.Element => {
	return (
		<reatomContext.Provider value={ctx}>
			<ConfigProvider isWebView={true}>
				<AdaptivityProvider>
					<AppRoot mode='partial'>
						<RouterProvider router={router} notFound={<Page404 />}>
							<AppRouter />
						</RouterProvider>
					</AppRoot>
				</AdaptivityProvider>
			</ConfigProvider>
		</reatomContext.Provider>
	);
};

export default App;
