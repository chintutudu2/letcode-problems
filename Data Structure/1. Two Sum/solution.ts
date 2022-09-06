function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (((nums[i] + nums[j]) > target) || (nums[i] + nums[j]) < target) { continue; }
            return [i, j]
        }
    }
    return [];
};

console.log(twoSum([-1, -2, -3, -4, -5], -8));