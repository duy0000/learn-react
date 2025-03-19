//type in TS

//string
let TypeString: string = "duy"; //với những biến đơn giản như này thì có thể khai báo hoặc không cần khai báo vì ts sẽ tự tính được type của nó
//number
let TypeNumber: number = 23; //với những biến đơn giản như này thì có thể khai báo hoặc không cần khai báo vì ts sẽ tự tính được type của nó
//Boolean
let TypeBoolean: boolean = true; //với những biến đơn giản như này thì có thể khai báo hoặc không cần khai báo vì ts sẽ tự tính được type của nó
//undefined
let TypeUndefine = undefined;
//null
let TypeNull = null;
//any
let TypeAny: any = "duy"; //thường thường thì nếu biến có thể sử dụng những type kia thì không nên sử dụng type là any
let TypeAny1: any = 3;
//object
let TypeObject: { name: string; old?: number; address: string } = {
  name: "",
  old: 0, //nếu muốn có thể có hoặc không thì có thể thêm dấu chấm khi khai báo kiểu
  address: "",
};
//array
//never array
let TypeNeverArray = []; //kiểu never array thì sẽ đại diện cho một mảng rỗng không thể thêm kiểu dữ liệu nào vào cỏa nếu không sẽ lỗi
// TypeNeverArray.push(123);
// TypeNeverArray.push("123");
//string array là 1 mảng chứa các chuỗi string
let TypeStringArray: string[] = ["lê", "văn", "duy"];
//number[] (number array) giống với string array nhưng chỉ khác là nó là 1 mảng chứa các số
//object array 1 mảng các object
let ObjectArray: { name: string; age: number }[] = []; //trong đây mảng này sẽ chứa các phần tử có cấu trúc là object kia
//function
const sum = (num1: number, num2: number): number => {
  //function này sẽ trả ra 1 number và nhận vào 2 number nếu không return gì thì nó nó sẽ là void
  return num1 + num2;
};
//void là function nhưng không return gì
const TypeVoid = () => {
  console.log(12346776);
};
//union kết hợp kiểu ví dụ 1 biến có thể string or number
let TypeUnion: string | number | boolean;
//có thể dùng với object
let TypeUnionObject: { name: string | number } | { firstName: string } = {
  name: 100,
};
//enum
enum sizes {
  s,
  m = "duyyyyy",
  l = 5,
  xl,
  xxl,
}
console.log("size", sizes.xxl); //cái này sẽ log ra giá trị mà mình đã config sẵn
//interface khai báo 1 kiểu để viết ngắn gọn và đẹp mắt hơn
interface info {
  name: string;
  age: number;
  address: string;
}
interface info {
  firstname: string;
}
let infoUsser: info = {
  //nếu khai báo 2 interface giống nhau thì nó sẽ gộp lại để tạo thành 1 cái tổng chứa tất cả
  name: "duy",
  age: 23,
  address: "an my",
  firstname: "lê văn",
};

//type
type infoTypename = {
  name: string;
};
type infoTypeage = {
  age: number;
};
type infoTypeadd = {
  address: string;
};
let infoTypeUsser: infoTypeadd & infoTypename & infoTypeage = {
  //sẽ kết hợp cả 3 type lại thành 1 type tổng
  //tuy khôgn thể tạo 2 cái type giống nhau như interface nhưng có thể kết hợp type bằng các toán tử & hoặc |
  name: "duy",
  age: 23,
  address: "an my",
};
let infoTyper: infoTypeadd | infoTypename | infoTypeage = {
  //sẽ check trong cả 3 type và data bên trong phải thuộc 1 trong 3 type
  //tuy khôgn thể tạo 2 cái type giống nhau như interface nhưng có thể kết hợp type bằng các toán tử & hoặc |
  name: "duy",
};
//Generics type kiểu linh hoạt nhận vào kiểu nào trả ra link đó
const GenericsType = <typeinput>(value: typeinput) => value;
const value = 100;
GenericsType<number>(value);

class person {
  public name: string; //khi thêm là public thì thuộc tính anme sẽ truy cập được từ trong và
  // ngoài còn nếu để private thì là không dùng được và dùng readonly thì chỉ đọc không thể sửa chữ
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 1. Primitive Types (number, string, boolean)
// Bài tập 1:
// Khai báo một biến kiểu number, string, boolean và gán giá trị cho từng biến.

// Bài tập 2:
// Viết một hàm nhận vào 3 tham số: a (kiểu number), b (kiểu string), và c (kiểu boolean), sau đó trả về một chuỗi kết hợp cả 3 giá trị.
// Bài tập 3:
// Viết một hàm có 2 tham số: một số nguyên và một chuỗi. Hàm trả về một chuỗi mới, trong đó số nguyên được chèn vào giữa chuỗi đó.
// Bài tập 4:
// Tạo một biến với kiểu boolean. Nếu giá trị của biến là true, in ra "Đúng", nếu false, in ra "Sai".
// Bài tập 5:
// Viết một hàm kiểm tra xem một chuỗi có phải là chuỗi số không (chỉ chứa các ký tự số từ 0 đến 9). Hàm trả về true nếu đúng, false nếu sai.
// 2. Arrays
// Bài tập 1:
// Tạo một mảng kiểu number chứa 5 số nguyên và in ra mảng đó.
// Bài tập 2:
// Viết một hàm nhận vào một mảng số và trả về tổng các số trong mảng.
// Bài tập 3:
// Viết một hàm nhận vào một mảng các chuỗi và trả về một mảng mới chứa các chuỗi có độ dài lớn hơn 3.
// Bài tập 4:
// Viết một hàm nhận vào một mảng các số và trả về mảng mới, trong đó mỗi phần tử là bình phương của phần tử ban đầu.
// Bài tập 5:
// Viết một hàm nhận vào một mảng chứa các phần tử có kiểu dữ liệu khác nhau (number | string | boolean). Hàm trả về một mảng chỉ chứa các phần tử kiểu number.
// 3. Tuples
// Bài tập 1:
// Tạo một tuple có 3 phần tử, phần tử đầu tiên là string, phần tử thứ hai là number, phần tử thứ ba là boolean.
// Bài tập 2:
// Viết một hàm nhận vào một tuple có kiểu [string, number] và trả về một chuỗi kết hợp hai giá trị.
// Bài tập 3:
// Viết một hàm nhận vào một tuple kiểu [string, number, boolean], nếu phần tử thứ ba là true, trả về một chuỗi, nếu không trả về null.
// Bài tập 4:
// Tạo một tuple chứa thông tin về một sản phẩm: tên sản phẩm (string), giá (number), còn lại là trạng thái sản phẩm (boolean) có đang khuyến mãi hay không.
// Bài tập 5:
// Viết một hàm nhận vào một tuple có kiểu [number, number] và trả về một chuỗi mô tả hai số này như là một đoạn đường thẳng (ví dụ: "Khoảng cách giữa hai điểm là X").
// 4. Enums
// Bài tập 1:
// Khai báo một enum cho các ngày trong tuần và in ra thứ 2.
// Bài tập 2:
// Tạo một enum mô tả các mức độ ưu tiên: Low, Medium, High. Viết một hàm nhận vào một mức độ ưu tiên và trả về thông báo phù hợp.
// Bài tập 3:
// Viết một hàm nhận vào một giá trị của enum màu sắc và trả về thông tin mô tả màu đó.
// Bài tập 4:
// Khai báo một enum mô tả các trạng thái của đơn hàng: Pending, Shipped, Delivered. Viết một hàm nhận vào trạng thái đơn hàng và in ra một thông báo.
// Bài tập 5:
// Viết một hàm nhận vào một giá trị của enum và kiểm tra xem giá trị đó có thuộc về một nhóm trạng thái cho phép hay không.
// 5. Interfaces
// Bài tập 1:
// Tạo một interface mô tả một đối tượng sinh viên với các thuộc tính: name (string), age (number), isGraduate (boolean).
// Bài tập 2:
// Viết một hàm nhận vào một đối tượng có kiểu interface sinh viên và in ra thông tin của sinh viên đó.
// Bài tập 3:
// Tạo một interface mô tả một sản phẩm với các thuộc tính: name (string), price (number), isAvailable (boolean). Sau đó viết một hàm nhận vào sản phẩm và trả về thông tin về sản phẩm đó.
// Bài tập 4:
// Viết một interface mô tả một chiếc xe với các thuộc tính: make (string), model (string), year (number), isElectric (boolean). Viết một hàm nhận vào chiếc xe và kiểm tra nếu nó là xe điện hay không.
// Bài tập 5:
// Viết một interface mô tả thông tin đơn hàng với các thuộc tính: orderId (string), items (mảng các sản phẩm), totalAmount (number). Viết một hàm tính tổng giá trị đơn hàng sau khi áp dụng giảm giá (nếu có).
// 6. Generics
// Bài tập 1:
// Viết một hàm đơn giản nhận vào một tham số bất kỳ và trả về chính giá trị đó (giới hạn kiểu dữ liệu với T).
// Bài tập 2:
// Viết một hàm sử dụng generic để nhận vào một mảng bất kỳ và trả về mảng đã sắp xếp.
// Bài tập 3:
// Tạo một interface với một thuộc tính value có kiểu generic. Viết một hàm nhận vào một đối tượng theo kiểu interface này và trả về giá trị của thuộc tính value.
// Bài tập 4:
// Viết một hàm generic để hợp nhất hai mảng có cùng kiểu dữ liệu và trả về một mảng mới.
// Bài tập 5:
// Viết một hàm generic nhận vào một mảng các đối tượng và một giá trị, hàm sẽ lọc các đối tượng có giá trị thuộc tính trùng với giá trị đã cho.

// config postmen để tự động lưu accestoken
// set up accestoken và refreshtoken trong enviroment của postmen
// trong thanh body sẽ có 1 tab là tab test trong đó có thể viết code script để tự động chạy code đó sau khi postmen chạy api xong
// pm.test("login thành công",function()
// {
//   pm.response.to.have.status(200);
//   const reponJson=pm.response.json()
//   pm.enviroment.set('accestoken',reponJson.data.accestoken)
//   pm.enviroment.set('refreshtoken',reponJson.data.refreshtoken)
// }
// )
// code trên khi mà postmen chạy xong hàm login thì sẽ tự động cạy đoạn
// code trên và sau khi chạy thì sẽ tự động lưu refreshtoken và accestoken mới vào
// pm.test("login thành công",function()
// {
//   pm.response.to.have.status(200);
//   const reponJson=pm.response.json()
//   pm.enviroment.set('accestoken',reponJson.data.accestoken)
// }
// )
// đoạn trên là code của refreshtoken sẽ tự động thay thế accestoken khi chạy hàm lấy accestoken mới
// đoạn code trên
//create code frontend để tự động refreshtoken trong note.md
