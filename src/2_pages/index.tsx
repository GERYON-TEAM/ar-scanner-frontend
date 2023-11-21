import { useAtom } from "@reatom/npm-react";
import {
	useActiveVkuiLocation,
	useRouteNavigator,
} from "@vkontakte/vk-mini-apps-router";
import {
	ModalPage,
	ModalPageHeader,
	ModalRoot,
	Panel,
	Root,
	SplitLayout,
	View,
} from "@vkontakte/vkui";
import { useEffect, useRef } from "react";
import { isLoggedAtom } from "../6_shared/lib/reatom/actions/fetchAuth";
import { ctx } from "../6_shared/lib/reatom/ctx";
import Home from "./home/";
import Offline from "./offline/";
import { storageGet, storageSet } from "../6_shared/lib/bridge";

const AppRouter = () => {
	const { view: activeView, panel: activePanel } = useActiveVkuiLocation();
	const [isLogged] = useAtom(isLoggedAtom);
	const isFirstRender = useRef(true);
	const routeNavigator = useRouteNavigator();

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
		} else {
			if (!isLogged) {
			} else {
				storageGet(["firstEntry1"]).then((res) => {
					// storageSet("firstEntry", "true");
					if (res) {
						if (res[0].value === "" || res[0].value === "true") {
							routeNavigator.push("/welcome");
						}
					}
				});
			}
		}
	}, [isLogged]);

	return (
		<SplitLayout>
			<Root activeView={activeView as string}>
				<View nav='default_view' activePanel={activePanel as string}>
					<Panel nav='offline_panel'>
						<Offline />
					</Panel>
					<Panel nav='home_panel'>
						<Home />
					</Panel>
				</View>
			</Root>
		</SplitLayout>
	);
};

export default AppRouter;
