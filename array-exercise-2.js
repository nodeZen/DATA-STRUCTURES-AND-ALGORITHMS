// Merge two sorted arrays into a sorted array
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];

  let array1Item = array1[0];

  let array2Item = array2[0];

  let i = 1;

  let j = 1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);

      array1Item = array1[i];

      i++;
    } else {
      mergedArray.push(array2Item);

      array2Item = array2[j];

      j++;
    }
  }

  return mergedArray;
}

const array1 = [1, 3, 5, 7];

const array2 = [2, 4, 6, 7];

console.log(mergeSortedArrays(array1, array2));
