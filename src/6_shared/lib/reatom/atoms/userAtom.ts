import { action, atom, onConnect, reatomAsync } from "@reatom/framework";
import { getUserInfo } from '../../bridge/index';

export const userAtom = atom<any | null>(null, 'userAtom');

export const fetchUser = action(async (ctx, id) => {
	const user = await getUserInfo(id);
	userAtom(ctx, () => user);
}, 'fetchUser');
