import { writable, readable, derived } from 'svelte/store';

export const theme = writable(Math.floor(Math.random()*6));
const colorsets = [
    {
        // gruvbox dark theme https://github.com/morhetz/gruvbox
        bg: '#282828',
        red: '#cc241d',
        green: '#98971a',
        yellow: '#d79921',
        blue: '#458588',
        purple: '#b16286',
        aqua: '#689d6a',
        grey: '#a89984',
        orange: '#d65d0e',
        fg: '#ebdbb2',
    },
    {
        // gruvbox light theme
        bg: '#fbf1c7',
        red: '#cc241d',
        green: '#98971a',
        yellow: '#d79921',
        blue: '#458588',
        purple: '#b16286',
        aqua: '#689d6a',
        grey: '#7c6f64',
        orange: '#d65d0e',
        fg: '#3c3836',
    },
    {
        // nord theme https://nordtheme.com/
        bg: '#2e3440',
        red: '#bf616a',
        green: '#a3be8c',
        yellow: '#ebcb8b',
        blue: '#88c0d0',
        purple: '#b48ead',
        aqua: '#5e81ac',
        grey: '#4c566a',
        orange: '#d08770',
        fg: '#e5e9f0',
    },
    {
        // dracula theme https://draculatheme.com/
        bg: '#282a36',
        red: '#ff5555',
        green: '#50fa7b',
        yellow: '#f1fa8c',
        blue: '#6272a4',
        purple: '#bd93f9',
        aqua: '#8be9fd',
        grey: '#44475a',
        orange: '#ffb86c',
        fg: '#f8f8f2',
    },
    {
        // forest-night theme https://github.com/sainnhe/forest-night
        bg: '#323d43',
        red: '#e68183',
        green: '#a7c080',
        yellow: '#d9bb80',
        blue: '#89beba',
        purple: '#d3a0bc',
        aqua: '#87c095',
        grey: '#868d80',
        orange: '#e39b7b',
        fg: '#d8caac',
    },
	{
		// solarized dark theme https://ethanschoonover.com/solarized/
		bg: '#002b36',
		red: '#dc322f',
		green: '#859900',
		yellow: '#b58900',
		blue: '#268bd2',
		purple: '#6c71c4',
		aqua: '#2aa198',
        grey: '#586e75',
		orange: '#cb4b16',
        fg: '#93a1a1',
	}
];

export const colors = derived(theme, t => colorsets[t]);
export default colors;
