/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = []

    nums.sort((a, b) => (a - b));

    for(let left = 0; left < nums.length; left++){
        if(left > 0 && nums[left] == nums[left-1]){
            continue;
        }
        
        if(nums[left] > 0){
            break;
        }

        let mid = left + 1;
        let right = nums.length - 1;

        while(mid < right){
            if(nums[left] + nums[mid] + nums[right] === 0){
                ans.push([nums[left], nums[mid], nums[right]]);
                right--;
                mid++;
                while(mid < right && nums[mid] == nums[mid - 1]){
                    mid++;
                }
            }
            else if(nums[left] + nums[mid] + nums[right] > 0){
                right--;
            }
            else if(nums[left] + nums[mid] + nums[right] < 0){
                mid++;
            }
        }
    }

    return ans;
};