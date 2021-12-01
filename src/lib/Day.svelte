<script>
	import { crossfade, scale } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const [send, receive] = crossfade({
		duration: 200,
		fallback: scale
	});

  export let date
  export let day
  export let title
  export let content
  export let selected = null
  // export let colors

  // let bacon = colors[0].includes(day)
  // let lemon = colors[1].includes(day)
  // let sky = colors[2].includes(day)

  let openable = day < date
  let today = day === date

	function close() {
    dispatch('click', {id: null});
  }

  function open(day) {
    if(date >= day) {
      dispatch('click', {id: day});
      goToTop()
    }
	}

  function goToTop() {
    document.body.scrollIntoView();
  }



</script>

<button on:click|stopPropagation="{() => open(day)}"
  in:receive={{key:day}}
  out:send={{key:day}}
  class="day day-{day}" class:openable class:today>
  {#if !selected}
    <div class="front">{day}</div>
  {/if}
  {#if selected == day}
    <article class="back" in:receive={{key:day}} out:send={{key:day}}>
      <header class="header">
        <h1 class="">Luke {day}: {title}</h1>
        <button class="close" on:click|stopPropagation="{close}"></button>
      </header>
      <div class="content">{@html content}</div>
    </article>
  {/if}
</button>

<style>

.header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
	padding-top: 0.8rem;
	width: 100%;
	border-bottom: 2px solid #000;
}

.close {
font-size: var(--text-md);
}

.close:hover {
  border-bottom:2px solid var(--text-color);
}

.content {
  margin-top: 1rem;
  max-width: 65ch;
  padding-bottom: 2rem;
}

.front {
  font-size: 3rem;
  font-weight: 700;
}

.back {
    position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		min-height: 100vh;
		overflow: hidden;
    z-index: 10000;
    background-color: var(--background-color);
    text-align: left;
    padding: 2rem;
}


.day {
	background-color: var(--primary-color);
	border: 1px dashed #E6E6E6;
	padding: 1rem;
}
.day:hover {
	background-color: var(--primary-color-dark);
  cursor: wait;
}

.day.openable {
  background-color: var(--primary-color-dark);
}
.day.openable:hover {
  background-color: var(--primary-color);
  cursor: pointer;
}
.day.today:hover {
  background-color: var(--lemon-color);
  cursor: pointer;
}

/* Calendar day positions and z-indexes */
.day-1 {
  grid-area: day01;
  /* z-index: 11; */
}
.day-2 {
  grid-area: day02;
  /* z-index: 16; */
}
.day-3 {
  grid-area: day03;
  /* z-index: 23; */
}
.day-4 {
  grid-area: day04;
  /* z-index: 15; */
}
.day-5 {
  grid-area: day05;
  /* z-index: 7; */
}
.day-6 {
  grid-area: day06;
  /* z-index: 6; */
}
.day-7 {
  grid-area: day07;
  /* z-index: 12; */
}
.day-8 {
  grid-area: day08;
  /* z-index: 24; */
}
.day-9 {
  grid-area: day09;
  /* z-index: 19; */
}
.day-10 {
  grid-area: day10;
  /* z-index: 14; */
}
.day-11 {
  grid-area: day11;
  /* z-index: 21; */
}
.day-12 {
  grid-area: day12;
  /* z-index: 13; */
}
.day-13 {
  grid-area: day13;
  /* z-index: 18; */
}
.day-14 {
  grid-area: day14;
  /* z-index: 8; */
}
.day-15 {
  grid-area: day15;
  /* z-index: 1; */
}
.day-16 {
  grid-area: day16;
  /* z-index: 4; */
}
.day-17 {
  grid-area: day17;
  /* z-index: 9; */
}
.day-18 {
  grid-area: day18;
  /* z-index: 20; */
}
.day-19 {
  grid-area: day19;
  /* z-index: 3; */
}
.day-20 {
  grid-area: day20;
  /* z-index: 10; */
}
.day-21 {
  grid-area: day21;
  /* z-index: 2; */
}
.day-22 {
  grid-area: day22;
  /* z-index: 22; */
}
.day-23 {
  grid-area: day23;
  /* z-index: 5; */
}
.day-24 {
  grid-area: day24;
  /* z-index: 17; */
}

</style>