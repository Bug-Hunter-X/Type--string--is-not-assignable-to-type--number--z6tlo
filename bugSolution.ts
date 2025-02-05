function printArray(arr: (number | string)[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: (number | string)[] = [1, 2, "hello", 4, "world"];
printArray(myArray); 