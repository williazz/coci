# Trees

A **tree** is a directed graph that describes a hierarchy. It has the following contraints:

1. The tree starts with a single root node
2. References are not duplicated. i.e. Each node is only referenced once; and no child refers to its parent
3. The root node is never referenced

Key terms
 - Referenced nodes are **children**
 - Nodes with children are **parents**
 - A **leaf** is a node without any children (aka an **external node**)
 - **Internal** nodes have children and are not leaves
 - **Siblings** are nodes with the same parent
 - An **edge** is a connection between two nodes
 - A node's **depth** is the number of edges from the root to that node
 - And a node's **height** is the number of edges from that node to its deepest child

### [General Tree](GeneralTree/README.md)

A **general tree** is a non-empty tree where nodes may have zero or more children. The root's children are partitioned into *disjoint subsets* (no element in common)

### Binary Tree

A binary tree is a tree in which each tree may have up to two children

### [Binary Search Tree (BST)](BST/README.md)

A BST may have each node point to two sub-BSTs named _left_ and _right_. BSTs also satisfy the binary search property; that node keys must be greater than every key on its left; and less than every node on its right. Duplicate values should only be either on left or right, if allowed. 

The asymptotic runtime of CRUD and search in a BST are logn, where n is the number of nodes; because every operation cuts the problem in half. However, this is only if the BST self balances by maintaining small heights. If the BST is not self balancing, then the worst case time complexity is O(n); in which case, the BST is no different than a linked list.

More key terms
 - In a **full binary tree**, all nodes either have two or zero children
 - A **complete binary tree** is completely filled except perhaps the rightmost side of the last level

### Self Balancing BST

In a BST with height _h_, _n_ <= 2<sup>_h_+1</sup> - 1 ...where *n* is the number of nodes

By algebra, _h_ >= log<sub>2</sub>(_n_+1) - 1 ≈ log<sub>2</sub>_n_

Because most operations in a BST have runtimes proportional to _h_; therefore, keeping _h_ as close to log<sub>2</sub>_n_ as possible maintains optimal runtime. Most self-balancing BSTs keep _h_ within a constant factor of this lower bound

Types of Self Balancing BSTs

- AVL tree
- Red and black tree
- B-tree

### Tree Traversal

Tree traversals visit each node exactly once.

 - Depth First Search
 - Breadth First

### Sources

- [Tree, Wikipedia](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)
- [Tree, CMU](https://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm)
- [Self Balancing BST, Wikipedia](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree)
- [Tree Traversal, Wikipedia](https://en.wikipedia.org/wiki/Tree_traversal)
