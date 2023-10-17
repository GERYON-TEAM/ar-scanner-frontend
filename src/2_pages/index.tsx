import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { Panel, Root, View } from "@vkontakte/vkui";
import Offline from "./offline/index";

const AppRouter = () => {
	const { view: activeView, panel: activePanel } = useActiveVkuiLocation();

	// const routeNavigator = useRouteNavigator();
	// const isOnline = useNetwork();
	// useEffect(() => {
	// 	if (!isOnline) routeNavigator.push("/offline");
	// 	else routeNavigator.back();
	// }, [isOnline]);

	return (
			<Root activeView={activeView as string}>
				<View nav="default_view" activePanel={activePanel as string}>
					<Panel nav="offline_panel">
						<Offline />
					</Panel>
				</View>
			</Root>
	);
};

export default AppRouter;
