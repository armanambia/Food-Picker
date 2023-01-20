<script>
  import Options from './lib/Options.svelte'
  import Spin from './lib/Spin.svelte';
  import { redo } from './lib/stores';
    let render
    redo.subscribe(value => {
		render = value;
	});

</script>

<main>

  <h1>Food Picker</h1> 
  <Options/>
  {#key render}
  <Spin/>
  {/key}

</main>


<style>
  main {
    display:flex;
    flex-direction: column;
  }
</style>