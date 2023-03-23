<script>
  import banner from '$lib/images/av-red-title-card.jpg';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Website of musician & developer"/>
</svelte:head>

<section class="banner">
	<picture>
		<img src={banner} alt="banner image"/>
	</picture>
</section>

<style>
	.banner {

	}
	.banner picture {

	}
	.banner img {
		object-fit: cover;
		max-width: 100%;
		min-height: calc(100% - var(--footer-height) - var(--footer-height));
	}
</style>
