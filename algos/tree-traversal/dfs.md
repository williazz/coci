## Functions

<dl>
<dt><a href="#dfs">dfs(root, cb, [order])</a></dt>
<dd><p>Recursively performs depth first search in any order</p>
</dd>
</dl>

<a name="orderEnum"></a>

## orderEnum : <code>enum</code>
Enumerates the possible bfs orders

**Kind**: global enum  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| PRE | <code>String</code> | <code>PRE</code> | 
| IN | <code>String</code> | <code>IN</code> | 
| POST | <code>String</code> | <code>POST</code> | 

<a name="dfs"></a>

## dfs(root, cb, [order])
Recursively performs depth first search in any order

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| root | <code>BTNode</code> |  | The root node of a binary tree |
| cb | <code>visit</code> |  | A callback to execute with the visited values |
| [order] | [<code>orderEnum</code>](#orderEnum) | <code>IN</code> | Defines the order of the depth first search. Is one of the enumerated strings in orderEnum |

<a name="dfs..visit"></a>

### dfs~visit : <code>function</code>
**Kind**: inner typedef of [<code>dfs</code>](#dfs)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>\*</code> | The value of the current node being visited by dfs |

