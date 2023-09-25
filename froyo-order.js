const order = prompt(
    "Please enter a list of Frozen Yogurt flavors, separate each flavor with commas."
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
)

const userFlavorArray = order.split(",");

function count(flavors){
    const froyo = {}
    for (const flavor of userFlavorArray){
        froyo[flavor] = froyo[flavor] +1 || 1;
    }
    return froyo;
}

const output = count(userFlavorArray);
console.table(output);