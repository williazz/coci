# Self Balancing Binary Search Tree

A BST is a rooted binary tree, meaning that each node points to two subBSTs named left and right. BSTs also satisfy the binary search property, necessitating node keys must be greater than or equal to every key on its left; and less than or equal to every node on its right. 

n - number of nodes = 

The asymptotic runtime of CRUD and search in a BST are logn, where n is the number of nodes, because every operation cuts the problem in half. However, this is only if the BST self balances by maintaining small heights. If the BST is not self balancing, then the worst case time complexity is O(n); in which case, the BST is no different than a linked list.



### Sources 
 - [Wikipedia](https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree)