# Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: assigning a string to a variable that's type-checked as a number.  The `printArray` function attempts to handle an array of mixed number and string types, but this causes a type error. The solution demonstrates how to solve this issue by making the array type more flexible.