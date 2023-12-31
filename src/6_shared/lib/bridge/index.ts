import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { devLog } from "../utils/devLog";

export const getUserInfo = async (id: number): Promise<IUser> => {
	//@ts-ignore
	return await bridge
		.send("VKWebAppGetUserInfo", {
			user_id: id,
		})
		.then((data) => {
			if (data.id) {
				return data;
			}
		})
		.catch((error)  => {
			// Ошибка
			console.log(error);
		});
};

export const isWebView = () => {
	return bridge.isWebView();
};

export const getUserAccessToken = async (scope = "") => {
	return await bridge
		.send("VKWebAppGetAuthToken", {
			app_id: Number(process.env.APP_ID),
			scope: scope,
		})
		.then((data) => {
			if (data.access_token) {
				return data.access_token;
			}
		})
		.catch((error) => {
			// Ошибка
			console.log(error);
		});
};

export const askToJoinGroup = async () => {
	return await bridge
		.send("VKWebAppJoinGroup", {
			group_id: Number(process.env.GROUP_ID),
		})
		.then((data) => {
			if (data.result) {
				return data.result;
			}
		})
		.catch((error) => {
			// Ошибка
			console.log(error);
			return false;
		});
};

export const storageSet = async (key: any, value: any) => {
	return await bridge
		.send("VKWebAppStorageSet", {
			key: key,
			value: value,
		})
		.then((response) => {
			if (response.result) return { key, value };
		})
		.catch((error) => {
			console.error(error);
			return null;
		});
};

export const storageGet = async (keys: any) => {
	return await bridge
		.send("VKWebAppStorageGet", {
			keys: keys,
		})
		.then((data) => {
			return data.keys;
		})
		.catch((error) => {
			console.error(error);
			return null;
		});
};
export const getLaunchParams = async (): Promise<any> => {
	return await bridge
		.send("VKWebAppGetLaunchParams", {})
		.then((data) => {
			devLog(data)
			return data;
		})
		.catch((e) => console.error(e));
};
