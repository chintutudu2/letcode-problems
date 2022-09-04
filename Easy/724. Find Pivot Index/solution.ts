function pivotIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        let leftSum: number = 0;
        let rightSum: number = 0;
        for (let j = 0; j < nums.length; j++) {
            if (j < i) {
                leftSum += nums[j];
            } else if (j > i) {
                rightSum += nums[j];
            }
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};

console.log(pivotIndex([2, 1, -1]));