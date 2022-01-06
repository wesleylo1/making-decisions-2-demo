// console.log('hello world')

let backpack = []

backpack.push('sword', 'potion')
backpack.push('food')
backpack.push('shield')

// console.log(backpack)

let onBelt = backpack.splice(0,1)

// console.log('Backpack: ', backpack)
// console.log('On Belt: ', onBelt)


let furCoat = 'fur coat'

backpack.push(furCoat)


// console.log(`Backpack: ${backpack}, Belt: ${onBelt}`) // show as string

backpack.pop()


let itemCount = backpack.length

backpack.push('flint','blanket','knife','toothbrush')

let backpack2 = backpack.splice(3,3)

// console.log('Backpack: ',backpack, 'backpack2: ', backpack2, 'Belt: ', onBelt, 'item-count: ',itemCount)

// console.log(backpack2[2])
// console.log(backpack[1])
//let and const keeps the variable local

console.log('---------------')

for (let i = 0; i < backpack.length; i++) {
     console.log(backpack[i])
}
console.log('-----------')

for (let i = 0; i < 3; i++) {
    console.log(backpack[i])
}

console.log('-----------------')

for (let i = 0; i < backpack2.length; i++) {
     console.log(backpack2[i])
}

console.log('-------------')
