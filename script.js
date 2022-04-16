"use strict"

let arr = [1,2,3]

//Task #1
let arr1 = arr.concat(4,5,6)

//Task #2
let arr2 = arr.reverse()

//Task #3
let arr3Ex = [1,2,3]
let arr3 = arr3Ex.push(4,5,6)

//Task #4
let arr4Ex = [1,2,3]
let arr4 = arr4Ex.unshift(4,5,6)

//Task #5
let arr5 = ['js', 'css', 'jq']

//Task #6
let arr6 = ['js', 'css', 'jq']

//Task #7
let arrEx7 = [1,2,3,4,5]
let arr7 = arrEx7.slice(0,3)

//Task #8
let arr8 = arrEx7.slice(-2)

//Task #9
let arr9Ex = [1,2,3,4,5]
let arr9 = arr9Ex.splice(1,2)

//Task #10
let arr10 = [1,2,3,4,5]
let arr10New = arr10.slice(1,4)

//Task #11
let arr11Ex = [1,2,3,4,5]
arr11Ex.splice(3,0, "a", "b", "c")

//Task #12
let arr12Ex = [1,2,3,4,5]
arr12Ex.splice(1,0, "a", "b")
arr12Ex.splice(6, 0, "c")
arr12Ex.push("e")

//Task #13
let arr13 = [3,4,1,2,7]
arr13.sort()

//Task #14
let arr14 = [5,6,7,8,9]
let arr14Res = null

for (let i = 0; i <= arr14.length-1; i++) {
    arr14Res += arr14[i]
}

//Task #15
let arr15 = [5,6,7,8,9]
let arr15Res = null

for (let i = 0; i <= arr15.length-1; i++) {
    let arr15Square = arr15[i] * arr15[i]
    arr15Res = arr15Res + arr15Square
}

//Task #16
let arr16 = [1,-3, 5, 6,-7, 8, 9,-11]
let arr16Res = []

for (let i = 0; i <= arr16.length-1; i++) {
    if (arr16[i] <= 0) {
        arr16Res.push(arr16[i])
    }
}

//Task #17
let arr17 = [1,-3, 5, 6,-7, 8, 9,-11]
let arr17Res = []

for (let i = 0; i <= arr17.length-1; i++) {
    if (arr17[i] % 2 === 0) {
        arr17Res.push(arr17[i])
    }
}

//Task #18
let arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']
let arr18Res = []

for (let i = 0; i <= arr18.length-1; i++) {
    if (arr18[i].length > 5) {
        arr18Res.push(arr18[i])
    }
}

//Task #19
let arr19 = [1, 2, [3, 4], 5, [6, 7]]
let arr19Res = []
console.log(Array.isArray(arr19[2]))

for (let i = 0; i <= arr19.length-1; i++) {
    if (Array.isArray(arr19[i])) {
        arr19Res.push(arr19[i])
    }
}

//Task #20
let arr20 = [5,-3, 6,-5, 0,-7, 8, 9]
let arr20Res = null

for (let i = 0; i <= arr20.length-1; i++) {
    if (arr20[i] < 0) {
        let count = 1
        arr20Res += count
    }
}

console.log(arr1)
console.log(arr2)
console.log(arr3Ex)
console.log(arr4Ex)
console.log(arr5[0])
console.log(arr6[arr6.length-1])
console.log(arr7)
console.log(arr8)
console.log(arr9Ex)
console.log(arr10New)
console.log(arr11Ex)
console.log(arr12Ex)
console.log(arr13)
console.log(arr14Res)
console.log(arr15Res)
console.log(arr16Res)
console.log(arr17Res)
console.log(arr18Res)
console.log(arr19Res)
console.log(arr20Res)