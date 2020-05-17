# Binary Heap

### [Documentation](docs.md)

Each node in a _complete binary heap_ may have two children and the heap always maintains the shortest possible height. The invariant is determined by the comparator function, the class's sole parameter, which takes parent and child values and returns a number. By default, the comparator describes a min heap.

| Operation  | Avg Time |
| ---------- | :------: |
| getRoot    | constant |
| deleteRoot |  log(n)  |
| insert     |  log(n)  |
| heapify    |  linear  |

### Resources

- [Binary Heap Implementation, @trekhleb](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)
- [Binary Heap, Princeton](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/DemoBinaryHeap.pdf)
- [Heapsort, Princeton](https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/DemoHeapify.pdf)
