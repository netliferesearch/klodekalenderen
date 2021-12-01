<script context="module">
	import Day from '$lib/Day.svelte';

	export const load = async ({ fetch }) => {
		const response = await fetch('/data/days.json');
		const responseJson = await response.json();
		return {
			props: {
				days: responseJson
			}
		}
	}
</script>

<script>
	import { page } from '$app/stores'

	export let days;

	const backstagepass = $page.query.get('backstagepass')
	let vip = ['cathrine','eivind','svale'].includes(backstagepass)

	let selected = null
	let currentDate = vip ? new Date(2021, 11, 24) : new Date()
	let date = currentDate.getDate()

	// let randoms = Array.from({length: 9}, () => Math.floor(Math.random() * 23));
	// let colors = [randoms.splice(0,3), randoms.splice(0,3), randoms]

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			selected = null
		}
	}
	function handleClick(event) {
		selected = event.detail.id
	}

</script>

<svelte:window on:keydown={handleKeydown}/>

<svelte:head>
	<title>Netlifes klodekalender - luke {date}</title>
</svelte:head>

<div class="calendar-grid">
	{#each days as day}
			<Day date={date} {...day} selected={selected} on:click={handleClick} />
	{/each}
</div>

<style>
	.calendar-grid {
		min-width: 100vw;
		height: 100vh;
		position: relative;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(11, 1fr);;
		grid-template-areas:
			"day13 day05 day09"
			"day22 day22 day18"
			"day07 day06 day16"
			"day02 day02 day17"
			"day03 day24 day17"
			"day01 day12 day20"
			"day01 day15 day11"
			"day08 day15 day11"
			"day19 day10 day14"
			"day21 day10 day23"
			"day04 day04 day23"
			;
	}
@media only screen and (min-width: 600px){
	.calendar-grid {
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(12, 1fr);
		grid-template-areas:
			"day13 day13 day09 day09 day18"
			"day13 day13 day05 day06 day06"
			"day22 day22 day05 day06 day06"
			"day07 day16 day16 day02 day02"
			"day24 day24 day17 day02 day02"
			"day24 day24 day17 day12 day12"
			"day01 day01 day20 day20 day15"
			"day01 day01 day11 day03 day03"
			"day08 day08 day11 day03 day03"
			"day19 day14 day14 day21 day21"
			"day04 day04 day23 day21 day21"
			"day04 day04 day23 day10 day10"
			;
	}
}
	@media only screen and (min-width: 1000px){
		.calendar-grid {
			grid-template-columns: repeat(10, 1fr);
			grid-template-rows: repeat(5, 1fr);
					grid-template-areas:
				"day13 day13 day09 day09 day18 day01 day01 day20 day20 day15"
				"day13 day13 day05 day06 day06 day01 day01 day11 day03 day03"
				"day22 day22 day05 day06 day06 day08 day08 day11 day03 day03"
				"day07 day16 day16 day02 day02 day19 day14 day14 day21 day21"
				"day24 day24 day17 day02 day02 day04 day04 day23 day21 day21"
				"day24 day24 day17 day12 day12 day04 day04 day23 day10 day10";
		}
	}
</style>
