// ### Câu 01: In ra từng phần tử của mảng

// - Đề bài:
//     - Viết một hàm đặt tên là forEachTest(array, callback)** nhận vào hai tham số:
//         - Tham số đầu tiên là một mảng.
//         - Tham số thứ hai là một hàm callback (Đặt tên cho hàm callback là **consoleLog()**).
//     - Gọi hàm callback **consoleLog()** này với từng phần tử của mảng **array** sau đó in ra màn hình console từng phần tử của mảng đó.
//     - Ví dụ:
//         - Mảng [1, 2, 3, 4, 5] trả về:
//             - 1
//             - 2
//             - 3
//             - 4
//             - 5
//         - Mảng ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"] trả về:
//             - Lê Văn A
//             - Nguyễn Thị B
//             - Đỗ Thị C

// const array = [1, 2, 3, 4, 5];
// const forEachTest = (array, consoleLog) => {
//     consoleLog(array);
// };
// const consoleLog = (arr) => {
//     arr.forEach(element => {
//         console.log(element);
//     });
// }
// forEachTest(array, consoleLog);

//-----------------------------------------------------------

// ### Câu 02: Cộng từng cặp phần tử liên tiếp của mảng

// - Đề bài:
//     - Viết một hàm có tên **forEachPair()** nhận vào hai tham số:
//         - Tham số đầu tiên là một mảng.
//         - Tham số thứ hai là một hàm callback (Đặt tên cho hàm callback là **consoleLog()**).
//     - Gọi hàm callback **consoleLog()** này với từng cặp phần tử liên tiếp của mảng **array** sau đó in ra màn hình console tổng của từng cặp phần tử liên tiếp đó.
//     - Ví dụ:
//         - Mảng [1, 2, 3, 4, 5] trả về:
//             - 3 (Lấy 1 + 2)
//             - 5 (Lấy 2 + 3)
//             - 7 (Lấy 3 + 4)
//             - 9 (Lấy 4 + 5)
//         - Mảng [5, 20, 30, 60, 90] trả về:
//             - 25 (Lấy 5 + 20)
//             - 50 (Lấy 20 + 30)
//             - 90 (Lấy 30 + 60)
//             - 150 (Lấy 60 + 90)

// const array = [1, 2, 3, 4, 5];
// const array2 =  [5, 20, 30, 60, 90];

// const forEachPair = (arr, callback) => {
//     for (let i = 1; i< arr.length; i+= 1) {
//         callback(arr[i-1], arr[i]);
//     }
// };
// const consoleLog = (a, b) => {
//     console.log(a + b);
// }
// forEachPair(array, consoleLog);
// forEachPair(array2, consoleLog);


//----------------------------------------------------------

// ### Câu 03: Trả về một số nguyên ngẫu nhiên từ 1 đến 10

// - Đề bài:
//     - Tạo một Promise đơn giản để trả về một số nguyên ngẫu nhiên từ 1 đến 10.
//     - Nếu random có trả ra giá trị thì in ra dòng: "Số ngẫu nhiên: 8" *(Với 8 là một số ngẫu nhiên)*.
//     - Nếu random không thành công thì in ra dòng: "Lỗi: Không thể tạo số ngẫu nhiên."
//     - Gợi ý: Dùng Math.random() để tạo ra một số random. (Đọc thêm tại: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
//     - Ví dụ:
//         - Random ra số 8 —> Số ngẫu nhiên: 8
//         - Random ra undefined —> Lỗi: Không thể tạo số ngẫu nhiên.

// TỰ LÀM THÊM
// const promise = new Promise((resolve, reject) => {
//     let numberRandom = parseInt(Math.random() * 10);
//     if (numberRandom >= 3 && numberRandom <= 6) {
//         resolve(numberRandom);
//     }else {
//         reject(numberRandom);
//     }
// });
     
// promise
//     .then ((number) => {
//         console.log("Số ngẫu nhiên là " + number);
//     })
//     .catch ((error) => {
//         console.log("Không thể tạo được !");
//     })

// SOLUTION
// function getRandomNumber() {
//     return new Promise((resolve, reject) => {
//       const randomNumber = Math.floor(Math.random() * 10) + 1; // Giả sử random thành công, trả ra một số bất kỳ.
      
//       // const randomNumber = undefined; // Giả sử random lỗi, trả ra undefined.
  
//       if (randomNumber) {
//         resolve(randomNumber);
//       } else {
//         reject("Không thể tạo số ngẫu nhiên.");
//       }
//     });
//   }
  
//   getRandomNumber()
//     .then((number) => {
//       console.log("Số ngẫu nhiên:", number);
//     })
//     .catch((error) => {
//       console.error("Lỗi:", error);
//     });

// DÙNG VỚI ASYNC VÀ AWAIT

// async function generateRandomNumber() {
//     return new Promise((resolve, reject) => {
//         let numberRandom = parseInt(Math.random() * 10);
//         if (numberRandom >= 3 && numberRandom <= 6) {
//             resolve(numberRandom);
//         } else {
//             reject(numberRandom);
//         }
//     });
// }

// async function main() {
//     try {
//         const number = await generateRandomNumber();
//         console.log("Số ngẫu nhiên là " + number);
//     } catch (error) {
//         console.log("Không thể tạo được !");
//     }
// }

// main();

//------------------------------------------------------

// ### Câu 04: Lấy danh sách các số chẵn

// - Đề bài:
// - Tạo một Promise để lấy danh sách các số chẵn từ một mảng các số nguyên cho trước.
// - Nếu trong mảng đó có số chẵn thì in ra mảng mới gồm các số chẵn lấy được từ mảng đó.
// - Nếu trong mảng đó không có số chẵn thì in ra thông báo: "Lỗi: Không tìm thấy số chẵn."
// - Ví dụ:
//     - Truyền vào mảng [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] trả về [2, 4, 6, 8, 10].
//     - Truyền vào mảng [11, 13, 15, 17, 19] trả về "Lỗi: Không tìm thấy số chẵn.".

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = [11, 13, 15, 17, 19];
// const evenArray = (array) => {
//     return new Promise((resolve, reject) => {
//         let evenNuber = array.filter(item => item % 2 == 0);
//         if (evenNuber.length > 0){
//             resolve(evenNuber);
//         }else{
//             reject("Không tìm thấy số chẵn !");
//         }
//     });
// };

// evenArray(array1).then((arr) => {
//     arr.forEach(element => {
//         console.log(element);
//     });
// }).catch((error) => {
//     console.log(error);
// });
// evenArray(array2).then((arr) => {
//     arr.forEach(element => {
//         console.log(element);
//     });
// }).catch((error) => {
//     console.log(error);
// });

//----------------------------------------------

// ### Câu 05: Lấy data thông qua API và in ra màn hình.

// - Đề bài:
//     - API danh sách các nước trên thế giới: https://restcountries.com/v2/all
//     - Vẽ ra giao diện danh sách các nước trên thế giới: bao gồm thủ đô, tên nước, quốc kỳ.
//     - Giao diện hiển thị:

// hàm dùng chung cho fetchApi()

const fetchApi = async (linkApi) => {
    const reponse = await fetch(linkApi);
    const data = await reponse.json();
    return data;
};

// fetchApi("https://restcountries.com/v2/all").then((data) => {
//     const countrys = data.slice(200);
//     const itemCountry = document.querySelector(".item-country");
//     // console.log(itemCountry);
//     const listFlag = countrys.map(item => {
//         return `
//         <div class="item">
//             <img src="${item.flags.svg}" alt="flag">
//             <p>${item.capital} - ${item.name}</p>
//         </div>`;
//     });
//     // console.log(data);
//     itemCountry.innerHTML = listFlag.join("");
// }).catch((error) => {
//     console.log(error);
// });

// // SOLUTION
// const fetchApi = async (api) => {
//     const response = await fetch(api);
//     const result = await response.json();
//     return result;
//   };
  
//   fetchApi("https://restcountries.com/v2/all").then((data) => {
//     let htmls = data.map((item) => {
//       return `
//           <div class="inner-item">
//             <div class="inner-box">
//               <img class="inner-image" src="${item.flag}" alt="${item.capital} - ${item.name}" />
//               <div class="inner-title">
//                 ${item.capital} - ${item.name}
//               </div>
//             </div>
//           </div>
//         `;
//     });
  
//     htmls = htmls.join("");
  
//     const divCountry = document.querySelector("#country");
//     divCountry.innerHTML = htmls;
//   });

//---------------------------------------------------------------------

// ### Câu 06: Lấy địa chỉ IP của người dùng
// - Đề bài:
//     - Lấy địa chỉ IP của người dùng khi người dùng truy cập vào 
//      website của bạn.
//     - Để lấy địa chỉ IP của người dùng bằng Fetch API trong 
//      JavaScript, bạn có thể sử dụng dịch vụ cung cấp thông tin địa chỉ IP
//      , như link api 
// (https://api.ipify.org/?format=json)

const getIPAddress = async () => {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        console.log(response);
        if (!response.ok){
            throw new Error('Failed to fetch IP address');
        }
        const data = await response.json();
        console.log(data);
        return data.ip;
    }catch (error) {
        console.log("Error: ", error.message);
        throw(error);
    }
}

getIPAddress().then((ip) => {
    console.log("Địa chỉ IP của người dùng: "+ ip);
}).catch((error) => {
    console.error('Không thể lấy được địa chỉ IP:', error);
})


// SOLUTION 
// html
{/* <div id="ipAddress"></div> */}
// const API = "https://api.ipify.org?format=json";
// // JS
// fetch(API)
//   .then((response) => response.json())
//   .then((data) => {
//     const ipAddress = data.ip;
//     const elementIpAddress = document.querySelector("#ipAddress");
//     elementIpAddress.innerHTML = ipAddress;
//   })
//   .catch((error) => {
//     console.error("Lỗi:", error);
//   });
