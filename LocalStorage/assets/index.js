// ### Câu 01: Lưu một mảng vào localStorage và lấy ra.

// - Đề bài:
//     - Cho một mảng data như sau:
        
//         ```jsx
//         var fruits = ['apple', 'banana', 'orange'];
//         ```
        
//     - Lưu mảng fruits vào localStorage.
//     - Lấy mảng fruits từ localStorage và chuyển đổi từ chuỗi JSON thành 
// javascript và in ra màn hình console.

// var fruits = ['apple', 'banana', 'orange'];
// localStorage.setItem('fruits', JSON.stringify(fruits));

// const arrayFruits = JSON.parse(localStorage.getItem("fruits"));
// console.log(arrayFruits);

//  BÀI HỌC

// 1 TẠO BUTTON CHỈNH THEME SÁNG TỐI DÙNG LƯU VÀO LOCAL STORAGE
const buttonMode = document.querySelector("#button-mode");
const body = document.querySelector("body");
// Mặc định ban đầu vào trang web add thêm class 

const currentMode = localStorage.getItem("mode");
if (currentMode) body.classList.add(currentMode);

buttonMode.addEventListener("click", () => {
    body.classList.toggle("dark");
    // Kiểm tra body có class dark không ? 
    if (body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else {
        localStorage.setItem("mode", "");
    }
    
});


// VÍ DỤ 2 SIZE
const buttonSizeUp = document.querySelector("#button-size-up");
const buttonSizeDown = document.querySelector("#button-size-down");
const buttonSizeReset = document.querySelector("#button-size-reset");
const html = document.querySelector("html");

// Biến mặc định fontSize
let fontSizeDefault = localStorage.getItem("fontSize");
if (fontSizeDefault == null){
    fontSizeDefault = 16;
    localStorage.setItem("fontSize", "16");
}
html.style.fontSize =  fontSizeDefault+"px";
let step = 2;

buttonSizeUp.addEventListener("click", () => {
    let currentSize = parseInt(localStorage.getItem("fontSize" )) + step;
    html.style.fontSize = currentSize + "px";
    localStorage.setItem("fontSize", currentSize + "");
});
buttonSizeDown.addEventListener("click", () => {
    let currentSize = parseInt(localStorage.getItem("fontSize" )) - step;
    html.style.fontSize = currentSize + "px";
    localStorage.setItem("fontSize", currentSize + "");
});
buttonSizeReset.addEventListener("click", () => {
    let currentSize = 16;
    html.style.fontSize = currentSize + "px";
    localStorage.setItem("fontSize", currentSize + "");
});
