import bridge from "@vkontakte/vk-bridge";
import { app } from "../../config/app-config";

export const getUserInfo = async (id: number) => {
	return await bridge
		.send("VKWebAppGetUserInfo", {
			user_id: id,
		})
		.then((data) => {
			if (data.id) {
				return data;
			}
		})
		.catch((error) => {
			// Ошибка
			console.log(error);
			return false;
		});
};

export const isWebView = () => {
	return bridge.isWebView();
};

export const getUserAccessToken = async (scope = "") => {
	return await bridge
		.send("VKWebAppGetAuthToken", {
			app_id: app.app_id,
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
			group_id: app.group_id,
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
