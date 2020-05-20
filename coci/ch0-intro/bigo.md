# Big O

```
Big O classifies algorithms according to the asymptotic growth of their runtimes and space requirements with respect to size of inputs.
```

### Differences in Academia and Industry

Academia uses big O in the following way

- O (big O) defines upper bound. complexity <= O(?)
- Ω (big omega) defines lower bound. complexity >= Ω(?)
- Θ (big theta) defines both upper and lower bound. complexity = O(?) = Ω(?)

In contrast, industry uses "big O" to essentially describe academia's big theta; in that, it describes a generally tight bound on the upper and lower limits. The generally accepted way to describe runtime is with best case, worst case, and expected case. For example:

Describing Quicksort

- Best case: O(n) when all elements are equal, requiring only one pass through the array
- Worst case: O(n<sup>2</sup>) when the worst pivot is always chosen
- Expected case: O(nlogn) because the pivot chosen on average will be acceptable

### Calculating Big O

- Drop the constants
  - O(n + c) => O(n)
- Drop the non-dominant terms

  - O(n<sup>2</sup> + n) => O(n<sup>2</sup>)
  - O(5\*2<sup>c</sup>) => O(2<sup>c</sup>)

- **Amortization** helps describe algorithms in which an infrequent worst-case operation can alter state such that the worst-case cannot occur again for quite some time. Amortized runtime describes the asymptotic runtine between worst-case operations, assuming that they don't occur very often.
  - Amortization of an ArrayList
    - Writing _x_ elements to the ArrayList requires doubling capacity at sizes 1, 2, 4, 8, ...x and the sum of this geometric series is 2x
    - Though x writes to the ArrayList costs 2x time or has time complexity O(n), _the amortized runtime for each insertion is O(1)_

Some useful **sequences and series** math for proofs

- [Sigma Notation](https://www.mathsisfun.com/algebra/sigma-notation.html)
- [Arithmetic sequences and sums](https://www.mathsisfun.com/algebra/sequences-sums-arithmetic.html)
- [Gemoetric sequences and sums](https://www.mathsisfun.com/algebra/sequences-sums-geometric.html)
- Runtime can either be the sum or the number of terms in the sequence

### Further Reading

- [Common complexities](https://en.wikipedia.org/wiki/Time_complexity#Table_of_common_time_complexities)
