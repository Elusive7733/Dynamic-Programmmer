function getRandomArbitrary(min, max) {
    // n = Math.floor(Math.random() * 31) + 30;
    return Math.floor(Math.random() * (max - min)) + min;


}


//---------------------------------------------------Part A, B, C---------------------------------------------------
// let name1 = 'abdullah'
// let name2 = 'mahad'

// samples = []
// let str1 = ""
// let str2 = ""
// let n = 0
// for(let i = 0; i < 10; i++){
//     temp = {str1: [], str2: []}
//     m = Math.floor(Math.random() * 3) + 1;
//     if(m === 1){
//         n = getRandomArbitrary(30, 100)
//         for(let j = 0; j < n; j++){
//             str1 += (name1[getRandomArbitrary(0, name1.length)]);
//         }
//         n = getRandomArbitrary(30, 100)
//         for(let j = 0; j < n; j++){
//             str2 += (name1[getRandomArbitrary(0, name1.length)]);
//         }
//     }
//     else{
//         n = getRandomArbitrary(30, 100)
//         for(let j = 0; j < n; j++){
//             str1 += (name2[getRandomArbitrary(0, name2.length)]);
//         }
//         n = getRandomArbitrary(30, 100)
//         for(let j = 0; j < n; j++){
//             str2 += (name2[getRandomArbitrary(0, name2.length)]);
//         }
//     }

//     temp.str1 = str1;
//     temp.str2 = str2;
//     str1 = ""
//     str2 = ""
//     samples.push(temp)
// }
// samples = JSON.stringify(samples, null, " ")
// console.log(samples)
 
//---------------------------------------------------Part D, E, G---------------------------------------------------
// let samples = []
// let nums = []
// for(let i = 0; i < 10; i++){                    
//     temp = {sample: []}
//     let n = getRandomArbitrary(30, 60)
//     for(let j = 0; j < n; j++){
//         nums.push(getRandomArbitrary(0, 100));
//     }
//     temp.sample = nums;
//     nums = [];
//     samples.push(temp);
// }
// samples = JSON.stringify(samples, null, " ")
// console.log(samples)


//---------------------------------------------------Part F---------------------------------------------------
// let weight = []
// let value  = []
// let samples = []
// const maxWeight1 = 170
// const maxWeight2 = 187



// for (let j = 0; j < 10; j++){
//     sample = {value: [], weight: [], maxWeight: 0}
//     n = getRandomArbitrary(10, 60);
//     for (let i = 0; i < n; i++){
//         weight.push(getRandomArbitrary(1, 100))
//         value.push(getRandomArbitrary(1, 100))
//     }
//     sample.value = value
//     sample.weight = weight
//     m = Math.floor(Math.random() * 3) + 1;
//     if(m === 1){
//         sample.maxWeight = 170
//     }
//     else{
//         sample.maxWeight = 187
//     }
//     weight = []
//     value = []
//     samples.push(sample);
// }
// samples = JSON.stringify(samples, null, 1);
// console.log(samples)


//---------------------------------------------------Part H---------------------------------------------------
let price  = []
let length = []
let samples = []

for (let j = 0; j < 10; j++){
    sample = {price: [], length: [], maxLength: 0}
    n = getRandomArbitrary(10, 60);
    for (let i = 0; i < n; i++){
        length.push(getRandomArbitrary(1, 100))
        price.push(getRandomArbitrary(1, 100))
    }
    sample.price = price
    sample.length = length
    m = Math.floor(Math.random() * 3) + 1;
    if(m === 1){
        sample.maxLength = 170
    }
    else{
        sample.maxLength = 187
    }
    price = []
    length = []
    samples.push(sample);
}
samples = JSON.stringify(samples, null, 1);
console.log(samples)
