function removeDuplicates(nums: number[]): number {
    let temp = [...new Set(nums)];
    nums.length = 0;
    nums.push(...temp);
    return nums.length;
}
removeDuplicates([1,1,2,2])