# Trees

A tree is an abstract data structure that describes a hierarchy of nodes. Every node contains a value and may point to other nodes (aka children), with the following constraints:

1. The tree starts with a single root node
2. References are not duplicated. Each node is only referenced once; and no child refers to its parent
3. The root node is never referenced

### [Binary Search Tree (BST)](BST/README.md)

A BST is a rooted binary tree, meaning that each node points to two sub-BSTs named _left_ and _right_. BSTs also satisfy the binary search property; that node keys must be greater than or equal to every key on its left; and less than or equal to every node on its right.

The asymptotic runtime of CRUD and search in a BST are logn, where n is the number of nodes; because every operation cuts the problem in half. However, this is only if the BST self balances by maintaining small heights. If the BST is not self balancing, then the worst case time complexity is O(n); in which case, the BST is no different than a linked list.

### Self Balancing BST

In a BST with height _h_, _n_ <= 2<sup>_h_+1</sup> - 1 ...where *n* is the number of nodes

By algebra, _h_ >= log<sub>2</sub>(_n_+1) - 1 ≈ log<sub>2</sub>_n_

Because most operations in a BST have runtimes proportional to _h_; therefore, keeping _h_ as close to log<sub>2</sub>_n_ as possible maintains optimal runtime. Most self-balancing BSTs keep _h_ within a constant factor of this lower bound

### Implementations

- AVL tree
- Red and black tree
- B-tree

### Sources

- [Tree, Wikipedia](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)
- [BST, Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
- [Self Balancing BST, Wikipedia](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree)
