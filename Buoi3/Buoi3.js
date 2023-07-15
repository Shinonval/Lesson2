let arr = [1, 2, 3, 4, 5];
console.log(arr[1]);

// Them mot so o cuoi
let array = [1, 2, 3, 4, 5];
array.push(6);
array.push(7)
console.log(array);

// Xoa mot so o cuoi
let array2 = [1, 2, 3, 4, 5];
array2.pop();
console.log(array2);

// Xoa mot so o dau
let array3 = [1, 2, 3, 4, 5];
array3.shift();
console.log(array3);


// Them so 0 o dau
let array4 = [1, 2, 3, 4, 5];
array4.unshift(0);
console.log(array4);


// Them so vao vi tri bat ki
let array5 = [1, 2, 3, 4, 5];
array5.splice(3, 0, 3.5);
console.log(array5);


// Cap nhat phan tu
let array6 = [1, 2, 3, 4, 5];
array6[1] = 10;
console.log(array6);


// Xoa phan tu bat ki
let array7 = [1, 2, 3, 4, 5];
array7.splice(2,1); 
// (so thu tu, so can tru)
console.log(array7);


// Array Foreach
// Cu Phap
// array_var_name.forEach((item,index) => {
    // item đại diện cho phần tử hiện tại đang duyệt
    // index dại diện cho index của phần tử hiện tại đang duyệt
    // Code..., được phép sử dụng 2 biên item và index ở trong đay
// });
// Ra khỏi phạm vi của foreach thì sẽ không thể sử dụng 2 biến item và index nữa


let array8 = [1, 2 ,3 ,4, 5];
array8.forEach((item,index) => {
    console.log(item,index);
})


let array9 = [1, 2, 3, 4, 5];
array9.forEach((item,index) => {
    console.log('hello', item, index);
})
