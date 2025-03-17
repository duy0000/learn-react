//---------------------------------------destructuring và rest parameter-------------------------------

// //-------------------destructuring với object
// const object = {
//   name: "duy",
//   age: 23,
//   test: "test1",
//   test2: "test2",
// };

// const { name, age: tuoi, test, test2 } = object;
// //khai báo các phần tử của 1 object để dùng và có thể thay
// //thế tên các biên biến bằng 1 tên khác với thao tác như trên
// console.log("name, age, test, test2 ", name, tuoi, test, test2);

// //---------------------destructuring với array
// const array = [
//   "duy",
//   23,
//   function (a, b) {
//     return a + b;
//   },
// ];

// const [ten, number, sum] = array;
// console.log("ten, number, sum", ten, number, sum(5, 7));
// //destructuring này sẽ khai báo từng phần tử của aray với 1 cái tên mà mình có thể tùy chỉnh

//-----------------------spread syntax
// const spreadSyntax = {
//   name: "duy",
//   age: 23,
//   array: ["test1", 1, "duy", 2],
// };

// const copySpreadSyntax = { ...spreadSyntax }; //đây gọi là shallow copy (copy nông)
// console.log(copySpreadSyntax === spreadSyntax);
// //kiểu copy này nếu chạy lệnh trên thì sẽ bị false vì
// // không còn cùng tham chiếu đến 1 giá trị nữa mà đã tạo
// // ra 1 object mới dựa trên những phần tử của object cũ
// console.log(copySpreadSyntax.array === spreadSyntax.array);
// //với dòng log này thì sẽ ra true vì object không được copy
// // nhưng các giá trị trong đó vẫn được giữ nguyên nên khi log ra vẫn sẽ giống hệt nhau

// //---------------rest parameter
// const handle=(a,b,...c)=>{
//                   return c
// }

// const value=handle(1,2,3,4,5,6,7)
// console.log(value);
// //hàm này sẽ log ra biến c bao gồm các phầm tử còn lại của object
// //  nhưng sẽ bỏ đi 2 phần tử đầu vì phần tử đầu là 1 và 2
// //  đã được gán co biến a và b nên chỉ còn lại các cái còn lại
// //  gán cho c

//--------------------------------------------------------tham trị và tham chiếu trong js

//js thì bản chất là sẽ có 2 kiểu dữ liệu chính là tham chiếu và tham trị
//các kiểu dữ liệu của tham trị
// number,
// string,
// bôlean,
// null,
// undefined,
// BigInt,
// Symbol

// copy biến với tham trị
// let message = "hi";
// let copyMessage = message;
// message = "hello";
// console.log("message", message);
// console.log("copyMessage", copyMessage);
// khi coppy biến message bằng copyMessage bằng cách dùng tham trị
//  thì khi biến message thay đổi thì copyMessage cũng
// không thay đổi mà sẽ giữ giá trị ban đầu mà chúng ta gán cho nó

//các kiểu dữ liệu của tham chiếu
// Object,
// Array,
// function
//copy biến với tham chiếu
//một biến object sẽ không lưu trữ giá trị mà nó chỉ lưu trữ địa chỉ của bộ nhớ hay gọi là tham chiếu đến ô nhớ
// let user = {
//   name: "duy",
// };
// let usercopy = user;
//khi copy một object thì sẽ không copy object mà chỉ copy địa chỉ bộ nhớ của object nên object sẽ không bị nhân đôi
//nên biến user chỉ tham chiếu đến object chứ không chứ Object
// nên khi chỉnh sửa object bằng 1 trong 2 biến trên thì biến kia cũng sẽ bị thay đổi
// nếu let a={} và let b=a thì nếu chạy lệnh log(a===b) thì sẽ true thì sẽ ra true vì cùng tham chiếu đến 1 vị trí bộ nhớ
//nếu let a={} và let b={} thì nếu chạy lệnh log(a===b) thì sẽ ra false vì tuy cả 2 cùng có giá
// trị là 1 object rỗng nhưng lúc này địa chỉ bộ nhớ đã khác nhau nên nó không còn giống nhau nữanữa

//-----------------------------------clone và merge
// khi copy một object sẽ tạo thêm 1 biến khác tham chiếu đến cùng object đó
// nhưng nếu muốn nhân đôi 1 object để khi thay đổi 1 biếiến thì bên kia sẽ không thay đổi thì đó gọi là clone
// clone thường có 2 loại 1 loại là clone thường(shallow copy) 1 loại là deep copy
// với clone thường thì sẽ dùng spread syntax để clone: clone={...user}
// thì bây giờ sẽ tạo 1 object khác có data giống hệt với object name mà khi thay đổi giá trị của clone thì name sẽ không thay đổi
//nhưng kiểu này thì chỉ clone được object 1 cấp nên nếu 1 object chứa 1 object khác thì sẽ không thể copy được nên nếu với object nhiều cấp thì nó sẽ bị thay đổi data gốc khi chúng ta thay đổi giá trị trong object copy
//nên để fig thì phải dùng deepclone ví dụ JSON.parse(JSON.stringify()) để copy hết
//biến nếu khai báo bằng const thì không thể thay đổi nhưng nếu khai báo object bằng const thì thay đổi giá trị bên trong thoải mái

//------------------------------------------toán tử logic và template string
// toán tử logic (hàm Boolean()) với hàm này thì khi nhập vào những giá trị sau thì đều trả ra giá trị false: false,0,0n,undefined,null,'',NaN còn lại true hết

//toán tử && chỉ cần gặp giá trị là false hoặc đi đến cuối cùng thì nó sẽ dừng lại và trả về giá trị là phần tử false or phần tử cuối cùng
// ví dụ
// const a=true
// const b=''
// const c='hello'
// const d=a&&b&&c
// thì khi nào biến d sẽ bằng giá trị của biến nào đó mà khi lặp qua thì giá trị của biến đó ra false hoặc nếu không có biến nào ra false thì nó sẽ lấy giá trị của biến cuối cùng
//trong trường hợp này sẽ lấy giá trị của biến b vì biến b là false trong các danh scahs toán tử logic trên

//toán tử || (hoặc) toán tử này sẽ ngược với && và sẽ chekc từ đầu đến cuối khi nào có giá trị nào có giá trị là true thì mới dừng lại và trả ra gia trị hoặc sẽ chạy đến cuối và trả ra giá trị cuối
// toán tử ===(toán tử 3 ngôi) sẽ so sánh cả giá trị lẫn value nếu cả 2 cùng đúng thì sẽ trả ra true còn lại false
// toán tử ? (optional chaining) khi mà cố truy cập 1 thuộc tính mà gia giátrij của nó null or undefined thì sẽ bị lỗi và
// toán tử nullist (??) ví dụ
// let user
// log(user??"hello")
// với hàm trên thì nếu giá trị của user là null hoặc undefined thì user sẽ bằng hello còn lại thì user vẫn sẽ giữ nguyên giá trị đó nó khác với || ở chỗ hàm || sẽ bao gồm list trả ra true ở trên còn ?? sẽ hẹp hơn
//toán tử template string (${}) dùng để thêm hàm tính toán hoặc thêm các biến vào 1 đoạn string
//-------------------------------------các loại function hay dùng trong react
//callback function
// ví dụ
// const num = [1, 2, 3, 4, 5];
// const callBack = (item, index) => {
//   console.log(`stt là ${index} là ${item}`);
// };
// num.forEach(callBack)
//curying là 1 function mà return của nó là 1 function
//------------------------------------------import và export module trong react
// ví dụ nếu import {import1,import as Value  } from "1file nào đó"
// trong ví dụ trên nếu trong file hiện tại có 1 biến nào đó trùng
//với biến import thì chúng ta có thể thao tác như trên để đổi tên
// gọi của viến đó để dùng trong file này
