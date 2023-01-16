import { writable } from 'svelte/store';
import food_data from '../assets/food_data.json';

export const all_restaurants = food_data.restaurants
export const all_types = food_data.restaurants
.map(obj => 
    obj.type)
.filter((obj, index, self) =>
    self.indexOf(obj) === index)
.sort()

export const all_prices = food_data.restaurants
.map(obj => 
    obj.price)
.filter((obj, index, self) =>
    self.indexOf(obj) === index)
.sort()

export const filteredRestaurants = writable([])
export const filteredTypes = writable([])
export const filteredPrices = writable([])