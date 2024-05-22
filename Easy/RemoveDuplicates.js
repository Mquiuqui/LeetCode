var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function removeDuplicates(nums) {
    var temp = __spreadArray([], new Set(nums), true);
    console.log(temp);
    nums.length = 0;
    nums.push.apply(nums, temp);
    return nums.length;
}
removeDuplicates([1, 1, 2, 2]);
