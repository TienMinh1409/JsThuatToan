//**************** Console **************
console.log("hello");

console.warn("this is message warning");

console.error("đây là console error");

// // Biến: Để lưu hoặc truy xuất giá trị và có thể đem đi sử dụng nhiều nơi

// Kiểu1: 
// Khai báo tên biến
// cập nhật/gán giá trị cho biến
// // let tenBien;
// // let tenBien = giaTri

let user1;
user1 = "abc";
console.log("user1:", user1);
user1 = "xyz"
console.log("user1:", user1);
/*
Kiểu 2: 
    vừa khai báo biến , vừa gán giá trị cho biến
    let tenBien = giaTri
*/

let user2 = "Nguyễn Văn A";
console.log("user2", user2);

// const tenBien = giaTri
// const (constant): hằng số không được gnas lại giá trị , sử dụng khi giá trị không bị thay đổi
const PI = 3.14;
console.log("PI:", PI);
// PI = 2;

const HANG_SO = 2;

// ************** quy tắc đặt tên Biến - camelCase **************
let userName
let luongCoBan

//************** Kiểu dữ liệu **************
// 1.Number: 1, 2, 3, 3.14 ( dùng cho cả số nguyên lẫn số thực, dùng để tính toán )
let birthday = 1998;
console.log("birthday:", birthday);


// 2.String: kiểu chuỗi, ký tự dùng để diễn đạt tên, email, sdt,...
let firtName = "Tiến";
console.log("firtName:", firtName);



// 3.boolean: true / false thường kết hợp vs toán tử so sánh
let isApproval = true;
console.log("isApproval:", isApproval);

// 4.undfinded: khi một biến được khai báo nhưng chưa gán giá trị thì giá trị nó sẽ là undefined
let lastName;
console.log("lastName:", lastName);


// 5. null: Biểu thị 1 giá trị ko tồn tại
let shoppingCart = null;
console.log("shoppingCart:", shoppingCart);


//************** Các loại toán tử **************

// 1.Toán tử toán học
let number1 = 30;
let number2 = 20;
let number3 = "10";

let sum = number1 + number2;
console.log("sum:", sum);

let minus = number2 - number1;
console.log("minus:", minus);

let product = number2 * number1;
console.log("product:", product);

let quotient = number1 / number2;
console.log("quotient:", quotient);

//Phép chia lấy dư: %
let mod = number1 % number2;
console.log("mod:", mod);

// cộng 1 number với 1 string : chỉ xảy ra với phép cộng
//typeof: dùng để kiểm tra kiểu dữ liệu của 1 biến
console.log("kiểu dữ liệu của number3:", typeof number3);
//Cách convert dữ liệu từ string về number : parseInt(), variable , + variable
//let number3convert = parseInt ( number3);
//let number3convert = number * 1;
let number3convert = +number3;

console.log("kiểu dữ liệu của number3:", typeof number3convert);


let result = number1 + parseInt(number3);
console.log("result:", result);

let result1 = number1 / number3;
console.log("result1:", result1)

//chuỗi + chuỗi
let string1 = "hello";
let string2 = "BC77";
let string3 = "Cypersoft";

let totalString = string1 + " " + string2 + " " + string3;
console.log("totalString:", totalString);

let totalString2 = "hello " + "world";
console.log("totalString2:", totalString2);


//Toán tử ++/--: tăng 1 hoặc giảm 1;
let number4 = 10;
console.log("number4++ :", number4++);
console.log("number4 sau khi chạy ++", number4);
//=>11
console.log("++number4 :", ++number4);


// let number5 = 3;

// // number4++; //=>2
// ++number4;
// console.log("number4++ :", number4++);

// // number5--; //=>2
// --number5;
// console.log("number5--", number5--);

let numberA = 1;
let numberB = 3;
let resutlAB = numberA++ + --numberB;
                //1     +    2 =>3
console.log("resutl", resutlAB);

let resutlAB2 = numberA++ + numberB--;
//1     +    3 =>4
console.log("resutlAB2:", resutlAB2);

//Toán tử gán
//a = a + b => a += b
//a = a
let number6 = 10;
// number6 = number6 + 10;
number6 += 10;
console.log("number6:", number6);





// prompt
// let name = prompt("nhập tên của bạn ");
// alert("bạn đã nhập thành công");
// console.log("tên bạn đã nhập:", name);



// Khi nhận đề bài : Input(dữ liệu đầu vào) => các bước xử lý ( công thức tính toán) => output(kết quả ra)
// Bước1: xác định input: số ngày làm, lương cơ bản
// bước2: xử lý: lương nhân viên = sốa ngày làm * lương cơ bản 
// Bước3: Xác định ouput: tên nhân viên  và lương nhân viên 

// let tenNV = prompt('nhập tên nhân viên');

// let soNgayLam = prompt('nhập số ngày làm');
// let luongCB = prompt('nhập lương cơ bản');

// let luong = +soNgayLam * +luongCoBan;
// console.log("tên nhân viên", tenNV, "luong:", luongCB);


//********************** Bài Tập  ********************/

//Bài Tập Tính Điểm Trung Bình
/* Bước 1: Input: Cho Người dùng nhập điểm Toán, Văn , Sử , Địa Lý
    Bước 2: Tính Điểm Trung Bình = Tổng 4 môn / 5
    Bước 3: Ouput: Hiển thị kết quả điểm Trung bình
 */

//Input:
// let diemToan = prompt("Nhập Điểm Toán");
// let diemVan = prompt("Nhập Điểm Văn");
// let diemSu = prompt("Nhập Điểm Sử");
// let diemDia = prompt("Nhập Điểm Địa Lý");

// //Xử lý
// let diemTB = (+diemToan + +diemVan + +diemSu + +diemDia) / 5;

//Output:
// alert(diemTB);


//Bài Tập Quy Đổi Tiền Tệ
/* Bước 1 : input: nCho Người Dùng Nhập Giá USD hiện tại và Số Lượng Cần Quy Đổi  
    Bước2 : Xử lý tổng tiền = giá đô la hiện tại * số lượng usd
    Bước3 : Output: Hiển Thị kết quả số tiền vnd được quy đổi
*/

// let giaUsd = prompt("Vui Lòng Nhập Giá USD Hiện Tại");
// let soLuong = prompt("Nhập Số USD Cần Đổi");

// let tongTien = +giaUsd * +soLuong;

// // console.log("Tổng Tiền: ", tongTien, "Đồng");
// let dong = tongTien + " Đồng";
// alert(dong);


// Bài Tập Tính Chu Vi Vs Diện Tích Hình Chữ Nhật

/* 
    Bước 1: Input: Nhập Chiều Dài và Chiều Rộng
    Bước 2: Xử Lý: Chu Vi = (dài + rộng) * 2 ; Diện Tích = (Dài x Rộng)
    Bước 3: Ouput : Hiển Thị Kết Quả Chu Vi or Diện Tích 
 */

// let chieuDai = prompt("Nhập Chiều Dài");
// let chieuRong = prompt("Nhập Chiều Rộng");

// let chuVi = +chieuDai + +chieuRong * 2;
// console.log("Chu Vi Hình Chữ Nhật: ", chuVi);

// let dienTich = +chieuDai * +chieuRong;
// console.log("Diện Tích Hình Chữ Nhật: ", dienTich);


