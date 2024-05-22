function removeElement(nums, val) {
    var j = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        if (n !== val)
            nums[j++] = n;
    }
    return j;
}
;
