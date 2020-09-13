<script>
	import { colors } from "../state/themes";
</script>

<style>
    a {
        position: fixed;
		font-size: 2vw;
        bottom: 5%;
        right: 5%;
        margin: 0;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
        border-radius: 50%;
		text-decoration: none;
		opacity: 0.6;
        transition-duration: 0.3s;
    }

	a:hover {
		opacity: 1;
	}

	@media screen and (min-width: 1600px) {
	  a {
		 font-size: 2rem;
	  }
	}
</style>

<a
	  href="https://thud.dev"
	  style="color:{$colors.fg}">
	thud.dev
</a>
