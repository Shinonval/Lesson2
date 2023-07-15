// // Vòng lặp for (for whike, for...in, for...of)


// // Vòng lặp for
// for (
//     let i = 0; // Khai báo một biến đếm để đếm số lần lặp
//      i < 10; // Điều kiện để tiếp tục vòng lặp
//      i = i + 2 // Cập nhật biến đếm
// ){
//     // Phần code còn lại
//     // Được phép sử dụng biến i
//     // Được phép sử dụng các biến đã khai báo trước đó ở ngoài vòng lặp
//     console.log(i);
// }


// // Vòng lặp while : Lặp lại cho đến khi điều kiện sai
// let a = 0;
// // Điều kiện để tiếp tục vòng lặp
// while (a < 10) {
//     // Phần code lặp lại
//     console.log(a);
//     a = a + 1; // Cập nhật điều kiện để tiếp tục vòng lặp
// }

// // for...in: Lặp qua các key của object




// // for...of: Lặp qua các phần từ của mảng (array)
// let arr = [1,2,3,4,5];
// for (const item of arr) { 
//     // i : biến lưu giá trị của phần tử
//     // arr : mảng được lập
//     console.log(item);
// }


// // Câu lệnh điều kiện if/else

// // if (biểu thức) {
// //  Phần code chạy khi biểu thức đúng
// // }


// // if (biểu thức) {
// //  Phần code chạy khi biểu thức đúng
// // } else {
// //  Phần code chạy khi biểu thức sai
// // }


// // if (biểu thức 1) {
// //  Phần code chạy khi biểu thức 1 đúng
// // } else if ( biểu thức 2) {
// //  Phần code chạy khi biểu thức 2 đúng
// // } else {
// //  Phần code chạy khi biểu thức 1 và 2 sai    
// // }


// // Toán tử "và": &&
// // Toán tử "hoặc": ||
// // Toán tử "bằng": ==
// // Toán tử "không bằng": !=


// const point = 1
// if (point >= 8 && point <= 10) {
//     console.log("Học sinh giỏi");
// } else if (point >= 6.5 ) {
//     console.log("Học sinh khá");    
// } else {
//     console.log("Học sinh trung bình");   
// }



// // Object (đối tượng): Lưu trữ thông tin dưới dạng key-value
// const student = {
//     // key : value (number, string, boolean, array, object)
//     name: "Nguyen Van A",
//     age : 20,
//     isMale: true,
//     hobbies: ["football", "music"],
//     address: {
//         street: "Nguyen Van Cu",
//         city: "Da Nang"
//     }
// };

// const student2 = {
//     name: "Nguyen Van B",
//     age : 20,
//     isMale: true,
//     hobbies: ["football", "music"],
//     address: {
//         street: "Nguyen Van Cu",
//         city: "Da Nang"
//     }
// };

// const students = [student, student2];
// for (const std of students) {
//     // std là một object học sinh
//     // Truy xuất đến các thông tin của học sinh theo key: object_var.key
//     console.log(std.name);
//     console.log(std.age);
//     // Cập nhật thông tin của học sinh
//     std.name = "Nguyen Van C";
//     console.log(std.name);
// }































const products = [
    {
        name: "Iphone 12",
    },
    {
        name: "Iphone 12 Pro"
    },
    {
        name: "Iphone 12 Pro Max"
    },
    {
        name: "Samsung Galaxy S21"
    },
    {
        name: "Samsung Galaxy S21 Plus"
    }
];




const inputEl = document.getElementById("search-box");
const pEl = document.getElementById("search-results");

// console.log([inputEL]);
inputEl.addEventListener("input", function(event) {
    pEl.innerHTML = "";

    const searchValue = inputEl.value.trim();
    if (searchValue.trim() != ""){
        products.forEach((item) => {
            if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
                pEl.innerHTML = pEl.innerHTML + item.name + "<br>";
            }
        });
    }
});

