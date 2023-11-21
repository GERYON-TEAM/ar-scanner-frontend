import { devLog } from "../../lib/utils/devLog";
import { instance } from "./../instance";

export const auth = async (params: string): Promise<any> => {
	return await instance
		.post(
			"auth/signUpIn",
			{},
			{
				headers: {
					Authorization: `Bearer ` + params,
				},
			}
		)
		.then((res) => {
			instance.defaults.headers.common["Authorization"] = `Bearer ${params}`;
			devLog(res);
			return params;
		})
		.catch((res) => {
			console.error(res);
			return false;
		});
};
