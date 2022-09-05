function containsDuplicate(nums: number[]) {
    let obj: any = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            return true;
        }
        obj[nums[i]] = false;
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 4]))