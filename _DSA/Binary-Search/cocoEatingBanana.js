// // https://leetcode.com/problems/koko-eating-bananas/description/?envType=problem-list-v2&envId=binary-search

// const magicFun = (mid, piles) => {
//     let min_h = 0;
//     console.log("mid", Math.ceil(30/mid));
//     for (let pile of piles) {
//         min_h += Math.ceil(pile / mid)
//     }
//     return  min_h
// };


// var minEatingSpeed = function (piles, h) {
//     let min = 0;
//     let max = Math.pow(10, 9)
//     while(min <= max) {
//         let mid = Math.floor((min + max)/2);
//         console.log('mid', mid)
//         let requiredHour = (magicFun(mid, piles));
//         if (requiredHour <= h) {
//             max = mid - 1
//         } else {
//             min = mid+1
//         }
//     }
//     return min
// };
// // let piles = [30, 11, 23, 4, 20];
// // let h = 5
// console.log(minEatingSpeed([3, 6, 7, 11], 8));


const cocoEatingPilesOfBanana = (piles, h) => {
    let low = 1;
    let high = Math.pow(10, 9);
    while (low <= high) {
        // mid is hourly banana eating rate
        let mid = Math.ceil((low+high)/2)
        let min_h= 0
        for (let pile of piles) {
            min_h+=Math.ceil(pile/mid)
        }
        if (min_h <= h) {
            high = mid - 1
        } else {
            low = mid+1
        }
    }
    return low
}
// let piles = [30, 11, 23, 4, 20];
// let h = 5;
let piles = [3, 6, 7, 11];
let h = 8;
console.log(cocoEatingPilesOfBanana(piles, h));
