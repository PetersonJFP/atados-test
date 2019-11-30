// Atados Test - First duplicate
//
// Given an array a that contains only numbers in the range from 1 to a.length,
// find the first duplicate number for which the second occurrence has the minimal index.
// In other words, if there are more than 1 duplicated numbers, return the number for which
// the second occurrence has a smaller index than the second occurrence of the other number does.
// If there are no such elements, return -1.

// Example

// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.
// For a = [2, 2], the output should be firstDuplicate(a) = 2;
// For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.
// The element in a that occurs in the array more than once and has the minimal index for its second occurrence.
// If there are no such elements, return -1.

function duplicateEntries(arr) {
  let auxArr = [];
  let duplicateElements = [];

  arr.forEach(element => {
    if (auxArr.indexOf(element) == -1) {
      auxArr.push(element);
    } else {
      duplicateElements.push(element);
    }
  });

  return duplicateElements.length ? duplicateElements : false;
}

function secondIndexOf(arr, index) {
  const firstIndex = arr.indexOf(index);
  const restOfArray = arr.slice(firstIndex + 1);

  return restOfArray.indexOf(index) + firstIndex + 1;
}

function firstDuplicate(arr) {
  let duplicateElements = duplicateEntries(arr);
  if (!Array.isArray(duplicateElements)) {
    return -1;
  }

  duplicateElements.sort((a, b) => {
    return secondIndexOf(arr, a) - secondIndexOf(arr, b);
  });

  return duplicateElements[0];
}

//##################################################################

// Simple provided test() function used in main() to print
// what each function returns vs. what it's supposed to return.
function test(got, expected) {
  let prefix = "Error";
  if (got == expected) {
    prefix = "OK";
  }
  console.log(`${prefix} got: ${got} expected: ${expected}`);
}

// Calls the above functions with interesting inputs.
function main() {
  test(secondIndexOf([2, 5, 2, 5, 3, 2], 2), 2);
  test(secondIndexOf([2, 5, 2, 5, 3, 2, 3], 3), 6);
  test(secondIndexOf([2, 5, 2, 5, 3, 2, 3], 5), 3);
  test(firstDuplicate([2, 2]), 2);
  test(firstDuplicate([2, 4, 3, 5, 1]), -1);
  test(firstDuplicate([2, 1, 3, 5, 3, 2]), 3);
  test(firstDuplicate([2, 5, 2, 5, 3, 2]), 2);
  test(firstDuplicate([2, 1, 3, 1, 3, 2]), 1);
  test(firstDuplicate([2, 2, 3, 3, 3, 5, 3, 1]), 2);
  test(firstDuplicate([0, 1, 3, 2, 4, 5, 7, 6]), -1);
  test(firstDuplicate([2, 5, 2, 5, 3, 2, 3, 2, 5, 4]), 2);
}
main();
