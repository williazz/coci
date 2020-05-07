<a name="Heap"></a>

### [Back to README](README.md)

## Heap

- Implementation of the Heap data structure. It defaults as a MinHeap

**Kind**: global class

- [Heap](#Heap)
  - [new Heap([comparator])](#new_Heap_new)
  - [.comparator](#Heap+comparator)
  - [.data](#Heap+data)
  - [.root](#Heap+root) ⇒ <code>\*</code>
  - [.length](#Heap+length)
  - [.checkIntegrity()](#Heap+checkIntegrity)
  - [.swapIfNeeded(child, parent)](#Heap+swapIfNeeded) ⇒ <code>Boolean</code>
  - [.siftUp()](#Heap+siftUp)
  - [.insert(val)](#Heap+insert)
  - [.siftDown([parent])](#Heap+siftDown)
  - [.delete(val)](#Heap+delete) ⇒ <code>\*</code>
  - [.deleteRoot()](#Heap+deleteRoot) ⇒ <code>\*</code>
  - [.replaceRoot(val)](#Heap+replaceRoot) ⇒ <code>\*</code>
  - [.includes(val)](#Heap+includes) ⇒ <code>Boolean</code>
  - [.heapify()](#Heap+heapify)
  - [.fromArray(vals)](#Heap+fromArray)
  - [.merge(heap)](#Heap+merge) ⇒ [<code>Heap</code>](#Heap)
  - [.meld(heap)](#Heap+meld) ⇒ [<code>Heap</code>](#Heap)

<a name="new_Heap_new"></a>

### new Heap([comparator])

| Param        | Type                  | Default                                                | Description                                                                  |
| ------------ | --------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [comparator] | <code>function</code> | <code>(child, parent) &#x3D;&gt; child - parent</code> | Determines whether or not two values should be swapped. Must return a number |

<a name="Heap+comparator"></a>

### heap.comparator

**Kind**: instance property of [<code>Heap</code>](#Heap)  
**Properties**

| Type                  | Description              |
| --------------------- | ------------------------ |
| <code>function</code> | The passeed in parameter |

<a name="Heap+data"></a>

### heap.data

**Kind**: instance property of [<code>Heap</code>](#Heap)  
**Properties**

| Type                  | Description                 |
| --------------------- | --------------------------- |
| <code>function</code> | Storage for the heap values |

<a name="Heap+root"></a>

### heap.root ⇒ <code>\*</code>

Peeks at the root without affecting the heap

**Kind**: instance property of [<code>Heap</code>](#Heap)  
**Returns**: <code>\*</code> - - Root value  
<a name="Heap+length"></a>

### heap.length

Uses Array.length to get the length of the heap. Also includes the null val at index 0

**Kind**: instance property of [<code>Heap</code>](#Heap)  
<a name="Heap+checkIntegrity"></a>

### heap.checkIntegrity()

Throws an error if heap is not organized correctly

**Kind**: instance method of [<code>Heap</code>](#Heap)  
<a name="Heap+swapIfNeeded"></a>

### heap.swapIfNeeded(child, parent) ⇒ <code>Boolean</code>

Swaps two values at two indeces if needed

**Kind**: instance method of [<code>Heap</code>](#Heap)  
**Returns**: <code>Boolean</code> - - Indicates whether or not parent and child were swapped

| Param  | Type                | Description     |
| ------ | ------------------- | --------------- |
| child  | <code>Number</code> | Index of child  |
| parent | <code>Number</code> | Index of parent |

<a name="Heap+siftUp"></a>

### heap.siftUp()

Heapifies the last val into the right place

**Kind**: instance method of [<code>Heap</code>](#Heap)  
<a name="Heap+insert"></a>

### heap.insert(val)

Pushes a value into the heap and calls siftUp

**Kind**: instance method of [<code>Heap</code>](#Heap)

| Param | Type            | Description                                       |
| ----- | --------------- | ------------------------------------------------- |
| val   | <code>\*</code> | Any value that can be compared by Heap.comparator |

<a name="Heap+siftDown"></a>

### heap.siftDown([parent])

Heapifies down from a specific index

**Kind**: instance method of [<code>Heap</code>](#Heap)

| Param    | Type                | Default        | Description                              |
| -------- | ------------------- | -------------- | ---------------------------------------- |
| [parent] | <code>Number</code> | <code>1</code> | Parent index to start from; must be >= 1 |

<a name="Heap+delete"></a>

### heap.delete(val) ⇒ <code>\*</code>

Removes the last occurence of a value from the heap; and heapifies

**Kind**: instance method of [<code>Heap</code>](#Heap)  
**Returns**: <code>\*</code> - Deleted value after successful deletion.

| Param | Type            | Description                       |
| ----- | --------------- | --------------------------------- |
| val   | <code>\*</code> | The value to delete from the heap |

<a name="Heap+deleteRoot"></a>

### heap.deleteRoot() ⇒ <code>\*</code>

Deletes root and returns the deleted root. Calls siftDown

**Kind**: instance method of [<code>Heap</code>](#Heap)  
**Returns**: <code>\*</code> - - The deleted root  
<a name="Heap+replaceRoot"></a>

### heap.replaceRoot(val) ⇒ <code>\*</code>

Replaces root and returns the deleted root. Calls siftDown

**Kind**: instance method of [<code>Heap</code>](#Heap)  
**Returns**: <code>\*</code> - - The deleted root

| Param | Type            | Description               |
| ----- | --------------- | ------------------------- |
| val   | <code>\*</code> | Value to replace the root |

<a name="Heap+includes"></a>

### heap.includes(val) ⇒ <code>Boolean</code>

Uses the Array.includes method to determine whether or not a value exists in the heap

**Kind**: instance method of [<code>Heap</code>](#Heap)

| Param | Type            |
| ----- | --------------- |
| val   | <code>\*</code> |

<a name="Heap+heapify"></a>

### heap.heapify()

Heapifies the values

**Kind**: instance method of [<code>Heap</code>](#Heap)  
<a name="Heap+fromArray"></a>

### heap.fromArray(vals)

Builds and heapifies an array of values. Deletes all preexisting values from the heap

**Kind**: instance method of [<code>Heap</code>](#Heap)

| Param | Type            |
| ----- | --------------- |
| vals  | <code>\*</code> |

<a name="Heap+merge"></a>

### heap.merge(heap) ⇒ [<code>Heap</code>](#Heap)

Merges this heap with another while preserving both original heaps. The new heap uses this heap's constructor

**Kind**: instance method of [<code>Heap</code>](#Heap)  
**Returns**: [<code>Heap</code>](#Heap) - - Returns a new heap

| Param | Type                       | Description                                  |
| ----- | -------------------------- | -------------------------------------------- |
| heap  | [<code>Heap</code>](#Heap) | A different heap for this heap to merge with |

<a name="Heap+meld"></a>

### heap.meld(heap) ⇒ [<code>Heap</code>](#Heap)

Melds this heap with another and destroy both original heaps. The new heap uses this heap's constructor

**Kind**: instance method of [<code>Heap</code>](#Heap)  
**Returns**: [<code>Heap</code>](#Heap) - - Returns a new heap

| Param | Type                       | Description                                 |
| ----- | -------------------------- | ------------------------------------------- |
| heap  | [<code>Heap</code>](#Heap) | A different heap for this heap to meld with |

### [Back to README](README.md)
