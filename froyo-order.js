const order = prompt(
    "Please enter a list of Frozen Yogurt flavors, separate each flavor with commas."
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
)

const usrFlavorArray = order.split(",");

function count(flavors){
    const froyo = {}
    for (const flavor of usrFlavorArray){
        froyo[flavor] = froyo[flavor] +1 || 1;
    }
    return froyo;
}