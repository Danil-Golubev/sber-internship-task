
<script lang="ts">
  import Counter from './lib/Counter.svelte'
  let res:any;
  let resJSON:any;
  let inputValue1= 1.00;
  let inputCur1="AED";
  let inputValue2 =1.00
  let inputCur2="AED";

  let state = {
    flag: false}
    const getCurrensyRate = async (currensy: String)=>{
       res = await fetch(`https://open.er-api.com/v6/latest/${currensy}`)
       resJSON = await res.json()
      state.flag = true;
      console.log(resJSON.rates);
    }

    const countValueFirst = async (event:Event)=>{
      const target = event.target as HTMLInputElement;
      inputValue1 = Number(target.value)
      const res1 = await fetch(`https://open.er-api.com/v6/latest/${inputCur1}`)
      const resJSON1 = await res1.json()
      inputValue2 = Number(resJSON1.rates[inputCur2]) * Number(inputValue1)
    }

    const countValueSecond = async (event:Event)=>{
      const target = event.target as HTMLInputElement;
      inputValue2 = Number(target.value)
      const res2 = await fetch(`https://open.er-api.com/v6/latest/${inputCur2}`)
      const resJSON2 = await res2.json()
      inputValue1 = Number(resJSON2.rates[inputCur1]) * Number(inputValue2)
    }


    const handleInputCur1 = async (event:Event)=>{
      const target = event.target as HTMLInputElement;
      inputCur1 = target.value
      const res1 = await fetch(`https://open.er-api.com/v6/latest/${inputCur1}`)
      const resJSON1 = await res1.json()
      inputValue2 = Number(resJSON1.rates[inputCur2]) * Number(inputValue1)
    }
    const handleInputCur2 = async (event:Event)=>{
      const target = event.target as HTMLInputElement;
      inputCur2 = target.value
      const res2 = await fetch(`https://open.er-api.com/v6/latest/${inputCur2}`)
      const resJSON2 = await res2.json()
      inputValue2 = Number(resJSON2.rates[inputCur1]) * Number(inputValue2)
    }

    getCurrensyRate("AED");

</script>

<main>
{#if state.flag == true}
<ul class="myul">
<li class="myli"><input type="text" on:input={countValueFirst} value={inputValue1}></li>
<li class="myli">
  <select class ="currencyList" on:input={handleInputCur1}>
  {#each Object.entries(resJSON.rates) as [key]}
    <option on:click={handleInputCur1}>{key}</option>)){/each}
  </select>
</li>
</ul>
  <p>is</p>
  <ul class="myul">
    <li class="myli"><input type="text" on:input={countValueSecond} value={inputValue2}></li>
    <li class="myli">
      <select class ="currencyList" on:input={handleInputCur2}>
      {#each Object.entries(resJSON.rates) as [key]}
        <option on:click={handleInputCur2}>{key}</option>)){/each}
      </select>
    </li>
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
