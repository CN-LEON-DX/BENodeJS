// Hoisting là gì
// Hoisting là một đặc điểm của ngôn ngữ JavaScript, 
// trong đó các khai báo biến (variable declaration) và 
// hàm (function declaration) được "nâng lên" (hoist) 
// lên đầu phạm vi đầuu tiên 
// Câu 01: Ví dụ về hoisting biến
// •	Đề bài: Dự đoán kết quả console của đoạn code sau.
// •	var x = 5;
// •	console.log(x + y);
// •	var y = 10;
// •	Đáp án:
// •	var x = 5;
// •	console.log(x + y); // NaN
// •	var y = 10;
// o	Trong ví dụ này, biến x được gán giá trị trước khi sử dụng, nhưng biến y vẫn chưa được khai báo. Kết quả là y sẽ có giá trị undefined, và khi tính toán x + y, kết quả sẽ là NaN (Not a Number).
// Câu 02: Ví dụ về hoisting hàm
// •	Đề bài: Dự đoán kết quả console của đoạn code sau.
// •	foo();
// •	function foo() {
// •	  console.log("Hello");
// •	}
// •	Đáp án:
// •	foo(); // "Hello"
// •	function foo() {
// •	  console.log("Hello");
// •	}
// o	Trong ví dụ này, hàm foo được sử dụng trước khi nó được khai báo. JavaScript tự động di chuyển phần khai báo của hàm foo lên đầu phạm vi hiện tại.
// Câu 03: Ví dụ về hoisting với khối mã (block scope)
// •	Đề bài: Dự đoán kết quả console của đoạn code sau.
// •	function foo() {
// •	  if (true) {
// •	    var x = 5;
// •	  }
// •	  console.log(x);
// •	}
// •	foo();
// •	Đáp án:
// •	function foo() {
// •	  if (true) {
// •	    var x = 5;
// •	  }
// •	  console.log(x); // 5
// •	}
// •	foo();
// o	Trong ví dụ này, biến x được khai báo trong một khối mã (if statement), nhưng vẫn có thể truy cập và sử dụng ngoài khối mã đó.
// Câu 04: Ví dụ về hoisting với let và const (block scope)
// •	Đề bài: Dự đoán kết quả console của đoạn code sau.
// •	function foo() {
// •	  if (true) {
// •	    let x = 5;
// •	    const y = 10;
// •	  }
// •	  console.log(x);
// •	  console.log(y);
// •	}
// •	foo();
// •	Đáp án:
// •	function foo() {
// •	  if (true) {
// •	    let x = 5;
// •	    const y = 10;
// •	  }
// •	  console.log(x); // ReferenceError: x is not defined
// •	  console.log(y); // ReferenceError: y is not defined
// •	}
// •	foo();
// o	Trong ví dụ này, biến x và y được khai báo bằng let và const, nên chúng chỉ có hiệu lực trong phạm vi khối mã mà chúng được khai báo.
// Câu 05: Ví dụ về hoisting với hàm trong một khối mã
// •	Đề bài: Dự đoán kết quả console của đoạn code sau.
// •	function foo() {
// •	  if (true) {
// •	    function bar() {
// •	      console.log("Hello");
// •	    }
// •	    bar();
// •	  }
// •	  bar();
// •	}
// •	foo();
// •	Đáp án:
// •	function foo() {
// •	  if (true) {
// •	    function bar() {
// •	      console.log("Hello");
// •	    }
// •	    bar(); // "Hello"
// •	  }
// •	  bar(); // "Hello"
// •	}
// •	foo();
// o	Trong ví dụ này, hàm bar được khai báo trong khối mã if, nhưng vẫn có thể truy cập và sử dụng ngoài khối mã đó.
// Câu 06: Ví dụ về hoisting với hàm trong một khối mã (let)
// •	Đề bài: Dự đoán kết quả console của đoạn code sau.
// •	function foo() {
// •	  if (true) {
// •	    let bar = function () {
// •	      console.log("Hello");
// •	    };
// •	    bar();
// •	  }
// •	  bar();
// •	}
// •	foo();
// •	Đáp án:
// •	function foo() {
// •	  if (true) {
// •	    let bar = function () {
// •	      console.log("Hello");
// •	    };
// •	    bar(); // "Hello"
// •	  }
// •	  bar(); // ReferenceError: bar is not defined
// •	}
// •	foo();
// o	Trong ví dụ này, hàm bar được khai báo bằng từ khóa let trong khối mã if, nên nó chỉ có hiệu lực trong phạm vi khối mã đó.
// Câu 07: Ví dụ về hoisting trong vòng lặp
// •	Đề bài: Dự đoán kết quả console của đoạn code sau.
// •	// Dùng từ khóa var
// •	for (var i = 0; i < 5; i++) {
// •	  console.log(i);
// •	}
// •	console.log("i =", i);
// •	
// •	// Dùng từ khóa let
// •	for (let j = 0; j < 5; j++) {
// •	  console.log(j);
// •	}
// •	console.log("j =", j);
// •	Đáp án:
// •	// Dùng từ khóa var
// •	for (var i = 0; i < 5; i++) {
// •	  console.log(i); // 0, 1, 2, 3, 4
// •	}
// •	console.log("i =", i); // Cuối cùng: 5
// •	
// •	// Dùng từ khóa let
// •	for (let j = 0; j < 5; j++) {
// •	  console.log(j); // 0, 1, 2, 3, 4
// •	}
// •	console.log("j =", j); // ReferenceError: j is not defined
// o	Trong ví dụ này, biến i được khai báo bằng từ khóa var trong vòng lặp, nhưng vẫn có thể truy cập và sử dụng ngoài vòng lặp. Còn biến j được khai báo bằng từ khóa let trong vòng lặp, nên chỉ có thể truy cập và sử dụng bên trong vòng lặp.
// Câu 08: Viết hàm tính toán
// •	Đề bài: 
// o	Tạo 1 file có tên math.js. Viết các hàm tổng, hiệu, tích, thương và export các hàm đó.
// o	Tạo 1 file có tên main.js. Import các hàm tính toán bên trên và tính các phép tính sau: 
// 	tong(2, 3) —> 5
// 	hieu(5, 2) —> 3
// 	tich(2, 3) —> 6
// 	thuong(6, 2) —> 3
// •	Đáp án: 
// o	File math.js
// o	export function tong(a, b) {
// o	  return a + b;
// o	}
// o	
// o	export function hieu(a, b) {
// o	  return a - b;
// o	}
// o	
// o	export function tich(a, b) {
// o	  return a * b;
// o	}
// o	
// o	export function thuong(a, b) {
// o	  return a / b;
// o	}
// o	File main.js
// o	import { tong, hieu, tich, thuong } from "./test.js";
// o	
// o	console.log(tong(2, 3)); // 5
// o	console.log(hieu(5, 2)); // 3
// o	console.log(tich(2, 3)); // 6
// o	console.log(thuong(6, 2)); // 3


//--------------------------------------------------------------

// BÀI TẬP JSON
// Câu 09: Trích xuất các thuộc tính từ JSON
// •	Đề bài:
// o	Cho một chuỗi JSON như sau:
// o	const dataJSON = `{
// o	  "name": "Lê Văn A",
// o	  "age": 20,
// o	  "email": "levana@gmail.com",
// o	  "address": {
// o	    "street": "Số 123, đường ABC",
// o	    "city": "Hà Nội",
// o	    "country": "Việt Nam"
// o	  }
// o	}`;
// o	Hãy trích xuất các thuộc tính "name", "email" và "city" và in ra màn hình console.


// SOLUTION 
// const dataJSON = `{
//     "name": "Lê Văn A",
//     "age": 20,
//     "email": "levana@gmail.com",
//     "address": {
//         "street": "Số 123, đường ABC",
//         "city": "Hà Nội",
//         "country": "Việt Nam" 
//     }
//   }`;

//   // convert sang Object trước:
//   const dataJS = JSON.parse(dataJSON);
//   console.log(`Name: ` +dataJS.name + ", email:" + dataJS.email + ", city:" + dataJS.address.city);

//----------------------------------------------------------------------

// Câu 10: Xử lý mảng đối tượng JSON
// •	Đề bài:
// o	Cho một mảng đối tượng JSON như sau:
// o	const dataJSON = `
// o	  [
// o	    {
// o	      "name": "Lê Văn A",
// o	      "age": 30,
// o	      "skills": ["JavaScript", "HTML", "CSS"]
// o	    },
// o	    {
// o	      "name": "Nguyễn Thị B",
// o	      "age": 25,
// o	      "skills": ["Python", "Java", "C++"]
// o	    },
// o	    {
// o	      "name": "Đỗ Văn C",
// o	      "age": 35,
// o	      "skills": ["Ruby", "PHP", "SQL"]
// o	    }
// o	  ]
// o	`;
// o	Hãy tạo một mảng mới chứa tên của tất cả các người trong mảng ban đầu: ["Lê Văn A", "Nguyễn Thị B", "Đỗ Văn C"].


// const dataJSON = `
//     [
//         {
//             "name": "Lê Văn A",
//             "age": 30,
//             "skills": ["JavaScript", "HTML", "CSS"]
//         },
//         {
//             "name": "Nguyễn Thị B",
//             "age": 25,
//             "skills": ["Python", "Java", "C++"]
//         },
//         {
//         "name": "Đỗ Văn C",
//             "age": 35,
//             "skills": ["Ruby", "PHP", "SQL"]
//         }
//     ]
// `;

// const dataJS = JSON.parse(dataJSON);
// const arrayName = dataJS.map((item) => {
//     return item.name;
// });
// console.log(arrayName);

//------------------------------------------------------

// Câu 11: Tính tổng giá trị đơn hàng
// •	Đề bài:
// o	Cho 2 chuỗi JSON chứa thông tin đơn hàng (ordersJSON) và thông tin sản phẩm (productsJSON):
// o	const ordersJSON = `
// o	  [
// o	    {
// o	      "id": 1,
// o	      "items": [
// o	        {
// o	          "productId": 1,
// o	          "quantity": 2
// o	        },
// o	        {
// o	          "productId": 2,
// o	          "quantity": 1
// o	        }
// o	      ]
// o	    },
// o	    {
// o	      "id": 2,
// o	      "items": [
// o	        {
// o	          "productId": 3,
// o	          "quantity": 3
// o	        }
// o	      ]
// o	    }
// o	  ]
// o	`;
// o	
// o	const productsJSON = `
// o	  [
// o	    {
// o	      "id": 1,
// o	      "name": "iPhone 12",
// o	      "price": 1200
// o	    },
// o	    {
// o	      "id": 2,
// o	      "name": "Samsung Galaxy S21",
// o	      "price": 1000
// o	    },
// o	    {
// o	      "id": 3,
// o	      "name": "Google Pixel 5",
// o	      "price": 900
// o	    }
// o	  ]
// o	`;
// o	Viết một hàm có tên calculateOrderTotal() nhận vào một id đơn hàng và tính tổng giá trị của đơn hàng đó, sử dụng thông tin từ mảng đối tượng JSON "ordersJSON" và "productsJSON".
// o	Ví dụ:
// 	calculateOrderTotal(1) —> 3400
// 	calculateOrderTotal(2) —> 2700
// 	calculateOrderTotal(3) —> Không tìm thấy đơn hàng.


// SOLUTION
// const ordersJSON = `
//     [
//     {
//         "id": 1,
//         "items": [
//         {
//             "productId": 1,
//             "quantity": 2
//         },
//         {
//             "productId": 2,
//             "quantity": 1
//         }
//         ]
//     },
//     {
//         "id": 2,
//         "items": [
//         {
//             "productId": 3,
//             "quantity": 3
//         }
//         ]
//     }
//     ]
// `;

// const productsJSON = `
//     [
//     {
//         "id": 1,
//         "name": "iPhone 12",
//         "price": 1200
//     },
//     {
//         "id": 2,
//         "name": "Samsung Galaxy S21",
//         "price": 1000
//     },
//     {
//         "id": 3,
//         "name": "Google Pixel 5",
//         "price": 900
//     }
//     ]
// `;
// const productsJS = JSON.parse(productsJSON);
// const ordersJS = JSON.parse(ordersJSON);

// const calculateOrderTotal = (id) => {
//     const itemFound = ordersJS.find((item) => {
//         if (item.id === id){
//             return item;
//         }
//     });
//     // console.log(itemFound);
//     if (itemFound == undefined) {
//         console.log("Không tìm thấy đơn hàng !");
//     }else {
//         const arrayItems = itemFound.items;
//         let totalPrice = arrayItems.reduce((total, orderItem) => {
//             const product = productsJS.find((prod) => {
//                 return orderItem.productId == prod.id;
//             });
//             if (product !== undefined){
//                 return total + orderItem.quantity * product.price;
//             }else {
//                 return total;
//             }
//         }, 0);
//         console.log(totalPrice);
//     }
// };

// calculateOrderTotal(1) //—> 3400
// calculateOrderTotal(2) //—> 2700
// calculateOrderTotal(3) //—> Không tìm thấy đơn hàng.


//------------------------------------------------------

// Câu 12: Xóa sản phẩm từ JSON
// •	Đề bài:
// o	Cho một mảng đối tượng JSON chứa thông tin các sản phẩm:
// o	let productsJSON = `
// o	  [
// o	    {
// o	      "id": 1,
// o	      "name": "iPhone 12",
// o	      "price": 1200
// o	    },
// o	    {
// o	      "id": 2,
// o	      "name": "Samsung Galaxy S21",
// o	      "price": 1000
// o	    },
// o	    {
// o	      "id": 3,
// o	      "name": "Google Pixel 5",
// o	      "price": 900
// o	    }
// o	  ]
// o	`;
// o	Viết một hàm có tên deleteProduct() nhận vào id của một sản phẩm và xóa sản phẩm đó khỏi mảng JSON "productsJSON" và cập nhật lại mảng.
// o	Ví dụ:
// 	deleteProduct(2) —> [{"id":1,"name":"iPhone 12","price":1200},{"id":3,"name":"Google Pixel 5","price":900}]


// SOLUTION 

// let productsJSON = `
//     [
//     {
//         "id": 1,
//         "name": "iPhone 12",
//         "price": 1200
//     },
//     {
//         "id": 2,
//         "name": "Samsung Galaxy S21",
//         "price": 1000
//     },
//     {
//         "id": 3,
//         "name": "Google Pixel 5",
//         "price": 900
//     }
//     ]
// `;
// const productsJS = JSON.parse(productsJSON);

// // ĐỂ XÓA MỘT CÁCH GỌN GÀNG THÌ DÙNG FILTER KẾT HỢP SLICE index bên trong hàm filter
// const deleteProduct = (idProduct) => {
//     if (idProduct){
//         var productRemoved = productsJS.filter((item) => {
//             return item.id !== idProduct;
//         });
//         // console.log(productRemoved);
//         return JSON.stringify(productRemoved);
//     } else {
//         return productsJSON;
//     }
// }
// console.log(deleteProduct(2));

//--------------------------------------------------------------

// Câu 13: Tính tổng số lượng sản phẩm từ JSON
// •	Đề bài: 
// o	Cho một mảng đối tượng JSON chứa thông tin các sản phẩm:
// o	const productsJSON = `
// o	  [
// o	    {
// o	      "id": 1,
// o	      "name": "iPhone 12",
// o	      "quantity": 10
// o	    },
// o	    {
// o	      "id": 2,
// o	      "name": "Samsung Galaxy S21",
// o	      "quantity": 5
// o	    },
// o	    {
// o	      "id": 3,
// o	      "name": "Google Pixel 5",
// o	      "quantity": 8
// o	    }
// o	  ]
// o	`;
// o	Viết một hàm calculateTotalQuantity() để tính tổng số lượng sản phẩm từ mảng đối tượng JSON.
// o	Ví dụ:
// 	calculateTotalQuantity() —> 23

const productsJSON = `
    [
    {
        "id": 1,
        "name": "iPhone 12",
        "quantity": 10
    },
    {
        "id": 2,
        "name": "Samsung Galaxy S21",
        "quantity": 5
    },
    {
        "id": 3,
        "name": "Google Pixel 5",
        "quantity": 8
    }
    ]
`;

const productsJS = JSON.parse(productsJSON);

const calculateTotalQuantity = () => {
    const quantities = productsJS.reduce((total, item) => total + item.quantity, 0);
    console.log(quantities);
};
calculateTotalQuantity();
