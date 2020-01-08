/*

    func mergsort (arr) 
        if len 0 || 1 => arr
        get left half
        get right half
        sort into new arr
        return

        
*/


const mergesort = (arr, cb = (a, b) => {return a - b; }) => {
    if (arr.length < 2) return arr;
    const split = arr.length >> 1;
    const left = mergesort(arr.slice(0, split));
    const right = mergesort(arr.slice(split));
    const merge = [];
    let l = 0, r = 0;
    while (l < left.length || r < right.length) {
        if (cb(right[r], left[l]) > 0 || right[r] === undefined) {
            merge.push(left[l]);
            l++;
        } else {
            merge.push(right[r]);
            r++;
        }
    }
    return merge;
}

const input = [6,54,2,56,7,8,2,3];
const output = mergesort(input);
console.log(output);