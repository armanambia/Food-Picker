<script>
    import {all_restaurants} from './stores.js'
    import {all_prices} from './stores.js'
    import {all_types} from './stores.js'
    import {filteredRestaurants} from './stores.js'
    import {filteredPrices} from './stores.js'
    import {filteredTypes} from './stores.js'


    let price_group = []
    let type_group = []

    let filtPriceVal
    let filtTypeVal
    let filtRestVal
    filteredPrices.subscribe(value => {
		filtPriceVal = value;
	});
    filteredTypes.subscribe(value => {
		filtTypeVal = value;
	});
    filteredRestaurants.subscribe(value => {
		filtRestVal = value;
	});

    let clearClick = () => {
        price_group =[]
        type_group =[]
        filteredPrices.set(price_group)
        filteredTypes.set(type_group)
        filteredRestaurants.set([])
    }
    let submitClick = () => {
        filteredPrices.set(price_group)
        filteredTypes.set(type_group)
        filteredRestaurants.set(all_restaurants.filter(
            obj => (filtPriceVal.includes(obj.price) && filtTypeVal.includes(obj.type))
        ))
        
    }
</script>

<div class="container">
    <div class="inputs">
        <div class="prices">
            <h2> Price</h2>
            {#each all_prices as price}
                <label>
                    <input id="check-price" type=checkbox bind:group={price_group} name="price_inpt" value={price}>
                    {price}
                </label>
            {/each}
        </div>
        <div class="types">
            <h2> Type</h2>
            {#each all_types as type}
                <label>
                    <input type=checkbox bind:group={type_group} name="type_inpt" value={type}>
                    {type}
                </label>
            {/each}
        </div>
        
    </div>
    <div class="buttons">
        <button on:click={clearClick}>
            Clear
        </button>
        <button on:click={submitClick}>
            Submit
        </button>
    </div>
    <div class="output">
        {#each filtRestVal as rest} 
        <p>{rest.name}</p>
        {/each}
         
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
    .inputs {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 40px;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 40px;
    }
    button:focus {
        outline: none;
    }
</style>