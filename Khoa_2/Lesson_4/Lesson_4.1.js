//List - Array
let jsa08 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(jsa08)
//List sử dụng biến và ngoặc vuông, trong ngoặc vuông sự ngăn cách giữa các phần tử là bằng dấu phẩy

let abc = [6, "abc", true, false, [1, 2, 3, 6, 5, 4]];
console.log(abc)
//Phần tử trong List có thể là dạng số(numbers), chữ(strings), đúng hoặc sai(boiling) và ngoài ra còn có thể lồng List vào List

console.log(abc[3])
//Các phần tử trong List được máy đếm số lần lượt là 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ... 
//Để lấy 1 phần tử trong List ta dùng "tênList[số phần tử]"
//VD: ta có List "abc = ["abc, false, 1, 7"];"
//Để in được phần tử flase trong List abc ta dùng "console.log(abc[1])"



//Object
let student = {
    Name : "Đỗ Nguyên Khôi",
    Age  : 13,
    Id   : 1212100457,
    Class: "7B",
};
console.log(student.Name);
console.log(student.Age);
console.log(student.Id);
console.log(student.Class);

let h1tag = document.getElementById("name");
console.log(h1tag);
h1tag.innerText = "Nguyen Khoi";
h1tag.style.color = "red";