### Deleting a node from a BST

For deletion, we come across three different cases depending on the location of the node and its adjacent node. Let **x** be the key of the node to be deleted, then deletion works as follows:

  Case 1: if x has no children, then remove x
  Case 2: if x has one child, then make p[x] (parent pointer of the node) point to child
  Case 3: if x has two children (subtrees), then swap x with its successor and perform case 1 or case 2 to delete it

