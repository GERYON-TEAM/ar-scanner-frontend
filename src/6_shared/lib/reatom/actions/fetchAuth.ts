import { atom, onConnect, reatomAsync } from "@reatom/framework";
import { auth } from "../../../api/user";
import { getLaunchParams, getUserInfo } from "../../bridge";
import { fetchUser } from "../atoms/userAtom";
// import { isLoggedAtom } from './../atoms/isLoggedAtom';

const signAtom = atom("", "signAtom");
export const isLoggedAtom = atom<true | false | undefined>(
	undefined,
	"isLoggedAtom"
);

export const fetchAuth = reatomAsync(async (ctx) => {
	const params = window.location.search;
	await auth(params).then((res) => {
		if (!res) signAtom(ctx, () => res);
		else signAtom(ctx, () => "false");
	});
	const parsedParams = new URLSearchParams(params);
	fetchUser(ctx, Number(parsedParams.get("vk_user_id")));
}, "fetchAuth");

signAtom.onChange((ctx, newState) =>
	isLoggedAtom(ctx, () => (Boolean(newState) ? true : false))
);
