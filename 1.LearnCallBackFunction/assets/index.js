// import { kiemTraChanLe } from "../helpers/kiemTraChanLe.js";
// import { kiemTraSoDuong } from "../helpers/kiemTraSoDuong.js";
// import { tinhTong } from "../helpers/tinhTong.js";


// tinhTong(10, 20, (number) => {
//     // Phải truyền tham số vào
//     kiemTraSoDuong(number);
//     kiemTraChanLe(number);
// });

// CALLBACK
// const loginSuccess = () => {
//     console.log("Đăng nhập thành công !");
// };
// const checkLogin = (data, next) => {
//     const email = "name@gmail.com";
//     const password = "1234";
//     if (data.email === email && data.password === password){
//         next();
//     }else {
//         console.log("Đăng nhập thất bại !");
//     }
// };

// let data = {
//     email: "name@gmail.com",
//     password: "1234",
// }

// checkLogin(data, loginSuccess);

// PROMISE BACKEND
// var a;
// var promise = new Promise((resolve, reject) => {
//     if (a === undefined){
//         reject(a);
//     }else {
//         // THường dùng truyền tham số vào bên trong resolve để xử lý bên then
//         resolve(a);
//     }
// });

// promise
// // Có thể có nhiều .then()
//     .then((para) => { //- Hàm resolve sẽ chạy vào đây !
//         console.log("Thanh cong !");
//         console.log("Tham số từ resolve : " + para);
//     })
//     .catch((errorPara) => { // Hàm reject sẽ chạy vào đây !
//         console.log("That bai !");
//         console.log("Tham số từ reject :" + errorPara);
//     })
//     .finally(() => {
//         console.log("Luon chay vao day !");
//     });

// Đồng bộ (Synchronous):
// Trong các tác vụ đồng bộ, mỗi công việc phải chờ đợi tác vụ trước đó hoàn thành trước khi nó có thể bắt đầu. Các tác vụ được thực hiện tuần tự, theo thứ tự mà chúng được gọi.
// Ví dụ: Trong một chuỗi các lệnh JavaScript, lệnh thứ hai phải chờ lệnh đầu tiên hoàn thành trước khi nó có thể thực thi.

// Bất đồng bộ (Asynchronous):
// Trong các tác vụ bất đồng bộ, các tác vụ có thể bắt đầu thực thi ngay lập tức mà không cần chờ các tác vụ trước đó hoàn thành. Khi tác vụ bất đồng bộ hoàn thành, nó thông báo kết quả bằng cách sử dụng callbacks, promises hoặc async/await.
// Ví dụ: Gọi một API từ máy chủ, trong khi đợi phản hồi từ API, JavaScript có thể tiếp tục thực hiện các tác vụ khác mà không cần chờ đợi phản hồi đó.
// Đồng bộ là việc chạy từ trên xuống dưới hàm nào có trc thì ra trước hàm đấy thực thi trc
// Bất đồng bộ là việc hàm có trước chưa chắc đã chạy nếu cần tg hàm sau có thể chạy trc

// Promise được chạy đầu tiên:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1000);
        reject("Lỗi"); // Truyền bất kỳ kết quả nào cũng được
    }, 3000);
});

setTimeout(() => {
    console.log("Sau 1 giây :", promise);
}, 1000);
setTimeout(() => {
    console.log("Sau 2 giây :", promise);
}, 2000);
setTimeout(() => {
    console.log("Sau 3 giây :", promise);
}, 3000);