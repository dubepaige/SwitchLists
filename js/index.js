chocolateCandy = ['snickers', 'm&ms', 'milky way', 'reeses cups']
fruityCandy = ['skittles', 'jolly ranchers', 'nerds', 'laffy taffy']

function candy(candyType) {
    for (var i = 0; i < 4; i++) {
        document.getElementById('c' + (i+1)).innerText = candyType[i]
    }
}