/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1) (not counting the storage required for input arguments).
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const missing = [];
    
    A && A.length && A.forEach((ele, index) => {
        if(A.indexOf(index+1) === -1)
            missing.push(index+1);
    });
    
    if(A && A.length > 0 && A.indexOf(A.length +1) === -1)
        missing.push(A.length +1);
    
    return missing && missing.length ? missing[0] : 0;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let missing = 1;
    A.sort();
    
    if(A.length == 1){
        return A[0];
    }

    for(let i =0; i < A.length - 1; i++){
        if(1 != A[i+1] - A[i]){
            missing = A[i+1] - 1;
            break;
        }
    }
    return missing;
}