
<script lang="ts">
  import Counter from './lib/Counter.svelte'
  let res:any;
  let resJSON:any;
  let state = {
    flag: false}
    const getCurrensyRate = async (currensy: String)=>{
       res = await fetch(`https://open.er-api.com/v6/latest/${currensy}`)
       resJSON = await res.json()
      state.flag = true;
      console.log(resJSON.rates);
    } 
    getCurrensyRate("AED");
</script>

<main>
{#if state.flag == true}
<ul class="myul">
<li class="myli"><input type="text"></li>
<li class="myli">
  <input class ="currencyList" list="currency1"></li>
  <datalist id="currency1">{#each Object.entries(resJSON.rates) as [key]}
    <option>{key}</option>)){/each}</datalist>
</ul>
  <p>is</p>
  <ul class="myul">
    <li class="myli"><input type="text"></li>
    <li class="myli">
      <input class ="currencyList" list="currency1"></li>
      <datalist id="currency1">{#each Object.entries(resJSON.rates) as [key]}
        <option>{key}</option>)){/each}</datalist>
    </ul>
 
{/if}

</main>

<style>
  .currencyList{
    width: 50px;
  }
  .myli{
    display: inline;
    list-style-type: none;
  }
</style>
