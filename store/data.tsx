import { atom } from 'jotai';

export const selectionsAtom = atom([] as string[]);
export const filesAtom = atom([] as File[]);
export const typesAtom = atom([] as string[]); // Labels
export const fileURLsAtom = atom([] as string[]); // Image URLs
export const classifiedAtom = atom([] as Array<{ label: string }>);
export const undecidedImgsURLsAtom = atom([] as string[]);
export const decidedImgsURLsAtom = atom([] as string[]);
export const taskFinishedAtom = atom(false);
export const pendingAtom = atom(false);
