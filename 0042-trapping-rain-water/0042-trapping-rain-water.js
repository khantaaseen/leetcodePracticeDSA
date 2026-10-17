/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let water = 0;
    let left = 0;
    let right = height.length - 1;

    let maxL = height[left];
    let maxR = height[right];


    while(left < right){
        if(maxL < maxR){
            left++;
            maxL = Math.max(maxL, height[left]);
            water += maxL - height[left];
        }
        else{
            right--;
            maxR = Math.max(maxR, height[right]);
            water += maxR - height[right];
        }
    }

    return water;
};