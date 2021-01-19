// let a = []
// let n 
// console.log('[')
// for (let x = 1 ; x <= 10 ; x++){
//     n = Math.floor(Math.random() * 31) + 30;
//     for (let i = 0 ; i < n ; i++){
//         a.push(Math.floor(Math.random() * 101))
//     }
//     console.log('{')
//     console.log(`\"sample":[`)
//     for (let i = 0 ; i < n ; i++){
//         console.log(`${a[i]},`)
//         if (i === n-1){
//             console.log(`${a[i]}`)
//         }
//     }
//     console.log(']')
//     console.log('},')

// }
// console.log(']')

let name1 = 'abdullah'
let name2 = 'mahad'


function getRandomArbitrary(min, max) {
    // n = Math.floor(Math.random() * 31) + 30;
    return Math.floor(Math.random() * (max - min)) + min;
}

let weight = []
let value  = []
let samples = []
const maxWeight1 = 170
const maxWeight2 = 187



for (let j = 0; j < 10; j++){
    sample = {value: [], weight: [], maxWeight: 0}
    n = getRandomArbitrary(10, 60);
    for (let i = 0; i < n; i++){
        weight.push(getRandomArbitrary(1, 100))
        value.push(getRandomArbitrary(1, 100))
    }
    sample.value = value
    sample.weight = weight
    m = Math.floor(Math.random() * 3) + 1;
    if(m === 1){
        sample.maxWeight = 170
    }
    else{
        sample.maxWeight = 187
    }
    weight = []
    value = []
    samples.push(sample);
}
// samples = JSON.stringify(samples);
console.log(samples)
