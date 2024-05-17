const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
]

const foodPrices = availableFoods.map(food => food.price);
console.log('Food Prices are: \n' + foodPrices.join());

//now we take the prices and filer to only show the food prices above 450

const fileredPrices= foodPrices.filter( (filteredFoodObj)=>{
    return filteredFoodObj > 450 
})


const reducedPrices= fileredPrices.reduce( (prev, next)=>{
    return prev + next
})



console.log('My total bill for items above 450 is: \n' + reducedPrices);
