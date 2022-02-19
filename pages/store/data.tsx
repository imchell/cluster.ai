import { atom } from 'jotai';

export const selectionsAtom = atom([] as string[]);
export const filesAtom = atom([] as File[]);
export const typesAtom = atom([] as string[]); // Labels
export const fileURLsAtom = atom([] as string[]); // Image URLs
