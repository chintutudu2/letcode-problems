function runningSum(nums: number[]): number[] {
    let answer: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        let tempNumber: number = 0;
        for (let j = 0; j <= i; j++) {
            tempNumber += nums[j];
        }
        answer.push(tempNumber);
    }
    return answer;
};

console.log(runningSum([1, 2, 3, 4]))