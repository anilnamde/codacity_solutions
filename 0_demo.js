/**
 This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
 * @param {*} A 
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let Ax = [...A];
    const min = Math.min(...Ax);
    const max = Math.max(...Ax);
    // if min ele is greater than 1
    if(min > 1){
        return 1;
    }
    // if max element i -ev/0
    if(max < 1){
        return 1
    }
    
    
    do{
        let currentMin = Math.min(...Ax);
        let currentIndex = Ax.indexOf(currentMin);
        Ax.splice(currentIndex, 1);
        let nextMin = Math.min(...Ax);
        let nextIndex = Ax.indexOf(nextMin);
        if(currentMin - nextMin == 0) continue;
        if(currentMin - nextMin ==1 ) continue;
        if(Math.abs(currentMin - nextMin) > 1 ) return currentMin+1;
    } while(Ax.length > 0)
    
    
    
    
}