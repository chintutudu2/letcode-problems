function maxSubArray(nums: number[]): number {
    let maxSum: number = nums[0];
    let curSum: number = nums[0];

    for (var i = 1; i < nums.length; i++) {
        curSum = Math.max(nums[i], curSum + nums[i]);
        maxSum = Math.max(curSum, maxSum);
    }

    return maxSum;
};

console.log(maxSubArray([-2, -1]))