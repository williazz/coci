# Hash Table

## Hashing

My hash function does the following:

1. Convert key into a string, and define sum = 0
2. Choose factor = prime number 101
3. Iterate thru str, sum += subsequent power of factor \* str.charCode(i)

## Collisions

Collisions can be dealt with in many ways

- Linear probing
- Quadratic probing
- Separate chaining

# Resources

- [CMU on Introduction to Hashing](https://www.cs.cmu.edu/~guna/15-123S11/Lectures/Lecture17.pdf)
