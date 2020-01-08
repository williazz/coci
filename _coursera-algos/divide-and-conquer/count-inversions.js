/**
    
I: arr of ints
O: int, count of inversions
 An inversion is an instance of
 - Two indeces i and k
 - i < k
 - arr[i] > arr[k]
C: 
 - Time O(n log(n))
 - Space O(n)
 - Can I mutate the inputed array?
E: none

Strategy
 - define counter = 0 ()
 - mergesort arr
    Base case, length 1, return arr
    else 
      left half
      right half
      merge
        IF 
         - merging from right
         - AND left not empty
        THEN 
         - increment counter by num of items remaining in left


 */

const countInversions = arr => {
    let counter = 0;
    (function mergesort(a) {
        if (a.length < 2) return a;
        else {
            const mid = a.length >> 1;
            const left = mergesort(a.slice(0, mid));
            const right = mergesort(a.slice(mid));
            const merge = [];
            let l = 0, r = 0;
            while (l < left.length || r < right.length) {
                if (left[l] < right[r] || right[r] === undefined) {
                    merge.push(left[l]);
                    l++;
                } else {
                    merge.push(right[r]);
                    if (l < left.length) counter += left.length - l;
                    r++;
                }
            }
            return merge;
        }
    })(arr);
    return counter;
}

const input = [10,1,2,3,6,4,5];
const output = countInversions(input);
console.log(output, output === 8);