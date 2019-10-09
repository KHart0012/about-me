function calc_numitems(numItems, numBags){
    return numItems * numBags
}

function find_total_items() {
    const items = document.querySelector("#input1").value
    const bags = document.querySelector("#input2").value

    const total_num = calc_numitems(items, bags)

    document.querySelector('#result').innerHTML = total_num
}

document.querySelector('#submit').addEventListener('click', find_total_items)