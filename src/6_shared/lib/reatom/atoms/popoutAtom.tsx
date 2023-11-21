import { action, atom } from "@reatom/framework";

export const popoupAtom = atom(<></>, 'popoutAtom');

export const clearPopout = action((ctx) => popoupAtom(ctx, () => <></>), 'clearPopout');
export const setPopout = action((ctx, Element) => popoupAtom(ctx, () => Element), 'setPopout');