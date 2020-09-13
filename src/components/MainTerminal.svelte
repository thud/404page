<script lang="ts">
    import { onMount } from 'svelte';
	import { get,writable } from "svelte/store";
    import {
        txts,
        buffersize,
        screenWidth,
        screenHeight,
    } from '../state/buffer';
    import TextRow from './TextRow.svelte';

    window.addEventListener('resize', e => {
        $screenWidth = e.currentTarget.innerWidth;
        $screenHeight = e.currentTarget.innerHeight;
    });

    onMount(() => {
        $screenWidth = window.innerWidth;
        $screenHeight = window.innerHeight;
    });

	buffersize.subscribe(bs => {
		const t = get(txts);
		while (t.length < bs[0]) t.push(writable({s:' '.repeat(bs[1]), done:false}));
		while (t.length > bs[0]) t.pop();

		t.forEach(rowstore => {
			const row = get(rowstore);
			if (row.s.length < bs[1]) rowstore.update(val => ({'s': val.s+' '.repeat(bs[1]-val.s.length), 'done':false}));
			else if (row.s.length > bs[1]) rowstore.update(val => ({s: val.s.substr(0,bs[1]), done:false}));
		});
		txts.set(t);
	});
</script>

<style>
    .main-terminal {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        /*overflow: hidden;*/
    }

    .main-text {
        font-size: min(50vw, 50vh);
        font-weight: 700;
    }
</style>

<div class="main-terminal">
    <svg width="100%" height="100%" style="position:absolute">
        {#each $txts as rowstore, rownum (rownum)}
			<TextRow {rowstore} {rownum} chance={Math.random() * 0.9 + 0.05} />
        {/each}

		<mask id="textmask">
			<text
				fill="white"
				opacity="1"
				class="main-text"
				x="50%"
				y="50%"
				text-anchor="middle"
				alignment-baseline="central">
				404
			</text>
		</mask>
    </svg>
</div>
