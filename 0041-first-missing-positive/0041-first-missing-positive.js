/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // let numsMap = new Map();
    // let smallestPos = 1;
    // let greatestPos = 0;

    // for(let i = 0; i < nums.length; i++){
    //     if(!numsMap.has(nums[i])){
    //         numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1);
    //     }

    //     if(smallestPos == nums[i]){
    //         smallestPos++;
    //     }

    //     if(nums[i] > greatestPos){
    //         greatestPos = nums[i];
    //     }
    // }

    // if(greatestPos < smallestPos && !numsMap.has(greatestPos)){
    //     return greatestPos;
    // }

    // return smallestPos;

    //in-place soluiton, done by keeping track of what is visited within array indeces


    //we dont care for the negatives so set all negatives to 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            nums[i] = 0;
        }
    }

    //now we loop through and we check if i is in the array by marking n[i -1] negative

    for(let i = 0; i < nums.length; i++){
        let val = Math.abs(nums[i]);
        if(val >= 1 && val <= nums.length){
            if(nums[val - 1] > 0){
                nums[val - 1] *= -1
            }
            else if(nums[val - 1] == 0){
                nums[val - 1] = -(nums.length + 1);
            }
        }
    }

    //loop through the elemtns again, but this time we are checking if i is in the array by checking the i-1 position, where previously if nums[i] was in the array then we set it to negative

    for(let i = 0; i < nums.length + 1; i++){
        if(nums[i-1] >= 0){
            return i;
        }
    }

    return nums.length + 1;
};