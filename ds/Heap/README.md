# Heap

A heap is tree-based data structure that satisfies the heap invariant (aka heap property). The root node (that which has no parents) is the most extreme of a set of values according to the invariant.

Because this implementation is complete and binary, each node may have two children and the heap always maintains the shortest possible height.

The invariant is determined by the comparator function, the class's sole parameter, which takes parent and child values and returns a number. By default, the comparator describes a min heap.

[JSDOC documentation]()

### Resources

- [@trekhleb](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)
- [USFCA Heap Visualizer](https://www.cs.usfca.edu/~galles/visualization/Heap.html)
- [Wikipedia](<https://en.wikipedia.org/wiki/Heap_(data_structure)>)
