<script lang="ts">
    import { colors } from '../state/themes';
    import { sleepDelay } from '../utils/utils';
    import {
        bufferchr,
        bufferchrsize,
        bufferchrpadding,
    } from '../state/buffer';

    String.prototype.replaceAt = function (i: number, s: string) {
        return (
            this.substr(0, i) +
            s +
            this.substr(i + s.length)
        );
    };

	export let rowstore: any;
	export let rownum: number;
    export let chance = 0.5;
	let writing = false;

    $: if (!$rowstore.done && !writing) write();

    async function write() {
        await sleepDelay(rownum * 100);
		if (writing) return;
		writing = true;
        while (!$rowstore.done) {
            $rowstore.done = true;
            for (let i = 0; i < $rowstore.s.length; i++) {
                if ($rowstore.s.charAt(i) != $bufferchr) $rowstore.done = false;
                if (Math.random() < chance) {
					$rowstore = {s: $rowstore.s.replaceAt(i, $bufferchr), done: false};
                    await sleepDelay(30 * Math.sqrt(chance));
                }
            }
        }
		writing = false;
    }
</script>

<style>
    text {
        white-space: pre;
        user-select: none;
    }
</style>

<text
    class="term-row"
    fill={$colors.grey}
    y={($bufferchrsize + $bufferchrpadding) * rownum}
    style="font-size:{$bufferchrsize}px">
    {$rowstore.s}
</text>

<text
    class="term-row"
    fill={$colors.red}
    y={($bufferchrsize + $bufferchrpadding) * rownum}
	mask="url(#textmask)"
    style="font-size:{$bufferchrsize}px">
    {$rowstore.s}
</text>

