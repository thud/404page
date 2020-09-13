<script lang="ts">
    import colors from './state/themes';
    import MainTerminal from './components/MainTerminal.svelte';
    import GithubButton from './components/GithubButton.svelte';
	import RedirectButton from "./components/RedirectButton.svelte";
</script>

<style>
    main {
        width: 100%;
        height: 100%;
    }
</style>

<main style="background-color:{$colors.bg}">
    <MainTerminal />
	<GithubButton />
	<RedirectButton />
</main>
