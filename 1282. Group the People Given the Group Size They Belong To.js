/*
1282. Group the People Given the Group Size They Belong To
Medium

There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group.
Given the array groupSizes of length n telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.
You can return any solution in any order and the same applies for IDs.
Also, it is guaranteed that there exists at least one solution.

Example 1:
Input: groupSizes = [3,3,3,3,3,1,3]
Output: [[5],[0,1,2],[3,4,6]]
Explanation:
Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

Example 2:
Input: groupSizes = [2,1,3,3,3,2]
Output: [[1],[0,5],[2,3,4]]

Constraints:
groupSizes.length == n
1 <= n <= 500
1 <= groupSizes[i] <= n
*/

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let obj = {};
    for (let i = 0; i < groupSizes.length; i++) {
        if (!obj[groupSizes[i]]) {
        obj[groupSizes[i]] = [i]
        } else {
            obj[groupSizes[i]].push(i)
        }
    }
    let newArr = [];
    for (let key in obj) {
        if (obj[key].length > key) {
        let array = [];
        for (let i = 0; i <= obj[key].length; i++) {
            if (array.length < key) {
            array.push(obj[key][i])
            } else {
            newArr.push(array)
            array = [];
            i--;
            }
        }
        } else {
        newArr.push(obj[key])
        }
    }
    return newArr
};
