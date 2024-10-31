function bubbleSortFun(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = 
                            [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortFun(arr)); 


function selectionSortFun(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = 
                    [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(selectionSortFun(arr)); 


