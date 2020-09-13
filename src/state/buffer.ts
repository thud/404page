import { readable, writable, derived, get } from 'svelte/store';
import Chr from '../model/Chr';

export const screenWidth = writable(0);
export const screenHeight = writable(0);
export const bufferchrsize = readable(15, undefined);
export const bufferchrpadding = readable(10, undefined);
export const bufferchr = writable('x');
export const buffersize = derived(
    [screenWidth, screenHeight, bufferchrsize, bufferchrpadding],
    ([sw, sh, bcs, bcp]) => [
        Math.ceil(sh / (bcs + bcp)),
        //Math.floor(sw / (bcs + bcp)),
        Math.ceil(sw / (bcs * 0.6)),
    ]
);

export const txts = writable([]);
