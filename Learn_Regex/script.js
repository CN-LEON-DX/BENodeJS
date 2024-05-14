// Regex == Regular Expression
// tìm các từ với hoặc nhiều từ với các thông tin tìm kiêms
// Regex gồm hai phần chính bao gồm: pattern và flag
// Ex: /ab+c/g
// g = flag
// ab + c = pattern

// const isLastCharacterN = (input) => {
//     const regex = /n$/gmi;
//     const result = regex.test(input);
//     return result;
// }
// console.log(isLastCharacterN("Aiden"));
// console.log(isLastCharacterN("Piet"));
// console.log(isLastCharacterN("Bert"));
// console.log(isLastCharacterN("Dean"));

 
// const amazing = (input) => {
//     const regex = /amazing/gim;
//     const regexCondition = /\bSky\b/gim; // để cho chữ đưng riêng lẻ một mình
//     let result;
//     if (!regexCondition.test(input)){
//         result = input.replace(regex, "not amazing");
//     }else result = input;
//     console.log(result);
// };

// amazing("Sky is amazing.")
// amazing("Abc is amazing.") 
// amazing("Xyz is amazing.") 
// const convertStringToTagName = (input) => {
//     const regexFormat = /(\D+)\*(\d+)/gim;
//     let result = "";
//     if (regexFormat.test(input)){
//         const arrInput = input.split("*");
//         for (let i = 1;i<= +arrInput[1];i++){
//             result += `<${arrInput[0]}></${arrInput[0]}>`;
//         }
//     }
//     return result;
// }

// console.log(convertStringToTagName("p*1"))
// console.log(convertStringToTagName("li*3")) 
// console.log(convertStringToTagName("div*2")) 

// const capitalLetters = (input) => {
//     const regex = /[A-Z]/g;
//     const result = input.match(regex);
//     return result ? result.length : 0;
// };

// console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc")); //➞ 6
// console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw")); //➞ 14
// console.log(capitalLetters("mqeytbbjwqemcdrdsyvq")); // 0

// EX 5
// const accepted = (array) => {
//     const regex = /^C\w+/;
//     const result = array.filter(item => {
//         if (!regex.test(item)) return item;
//     });
//     return result;
// }

// console.log(accepted(["Ducks", "Bears", "Cats"])) //➞ ["Ducks", "Bears"]
// console.log(accepted(["cars", "trucks", "planes"]))//➞ ["cars", trucks", "planes"]
// console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"])) //➞ ["Worms", "Bugs", "Beans"]

// EX6
// const validateEmail = (input) => {
//     const regex = /[\w\.]+@\w+(\.\w+)+/gi;
//     const result = regex.test(input);
//     console.log(result);
// }
// validateEmail("levana@gmail.com") //➞ true
// validateEmail("levanb12345@gmail.com") //➞ true
// validateEmail("levane.123@gmail")// ➞ false

// validateEmail("levanc12.34@gmail.com") //➞ true
// validateEmail("levane.123.stu.28tech.com.vn")// ➞ false

// validateEmail("levand@28tech.com.vn") //➞ true
// validateEmail("levane.123@stu.28tech.com.vn")// ➞ true
// validateEmail("levane.123@gmail.")// ➞ false


//---------------------------------------------------------------------4
// EXCERCISE

// EX1:
// Câu 01: "Đếm có bao nhiêu chữ 'D' trong một câu.
// Đề bài:
// Tạo hàm đếm số chữ D trong một câu.
// Không phân biệt chữ hoa, chữ thường
// Ví dụ:
// countD("My friend Dylan got distracted in school.") ➞ 4
// countD("Debris was scattered all over the yard.") ➞ 3
// countD("The rodents hibernated in their den.") ➞ 3

// const countNumberOfChar = (input) => {
//     const regex = /D/gi;
//     console.log(input.match(regex).length);    
// }

// countNumberOfChar("My friend Dylan got distracted in school.") //➞ 4
// countNumberOfChar("Debris was scattered all over the yard.") //➞ 3
// countNumberOfChar("The rodents hibernated in their den.") //➞ 3


// //==========================================

// // Câu 02: Tiếng hét của người Scotland
// // Đề bài:
// // Giọng đọc tiếng Scotland mạnh mẽ khiến các nguyên âm (u, e, o, a, i) khi đọc giống như là đọc chữ "e", vì vậy bạn nên thay thế mọi nguyên âm (u, e, o, a, i) bằng chữ "e".
// // Ngoài ra, do giọng nói mạnh mẽ, vì vậy hãy trả về một chuỗi đã được viết hoa.
// // Ví dụ:


// const convertToScotland = (input) => {
//     console.log(input.replace(/[ueoai]/gi, "e").toUpperCase());
// };

// convertToScotland("hello world")
// // ➞ "HELLE WERLD"

// convertToScotland("Mr. Fox was very naughty")
// // ➞ "MR. FEX WES VERY NEEGHTY"

// convertToScotland("Butterflies are beautiful!")
// // ➞ "BETTERFLEES ERE BEEETEFEL!"


//===========================================


// Câu 03: Owofied a Sentence
// Đề bài:
// Tạo một hàm nhận một câu và biến mọi "i" thành "wi" và "e" thành "we", và thêm "owo" vào cuối.
// Ví dụ:
// owofied("I'm gonna ride 'til I can't no more")
// ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

// owofied("Do you ever feel like a plastic bag")
// ➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

// owofied("Cause baby you're a firework")
// ➞ "Causwe baby you'rwe a fwirwework owo"

// const owofied = (input) => {
//     const result = input.replace(/i/g, "wi").replace(/e/g, "we");
//     console.log(result + " " + "owo");
// };
// owofied("Cause baby you're a firework");
// owofied("Do you ever feel like a plastic bag");
// owofied("I'm gonna ride 'til I can't no more");

// ///==========================================

// Câu 04: Tìm Slug dựa vào URL
// Đề bài:
// Viết một hàm truyền vào chuỗi URL, sau đó trả về Slug của URL đó.
// Ví dụ:
// slug("https://tech.com.vn/lap-trinh-c-co-ban-toi-nang-cao")
// ➞ "lap-trinh-c-co-ban-toi-nang-cao"

// slug("https://tech.com.vn/lap-trinh-front-end")
// ➞ "lap-trinh-front-end"

// slug("https://tech.com.vn/lap-trinh-back-end-nodejs")
// ➞ "lap-trinh-back-end-nodejs"

// const slug = (url) => {
//     const regex = /https:\/\/tech\.com\.vn\/(.+)/;
//     const res = url.match(regex);
//     console.log(res[1]);
// } 

// slug("https://tech.com.vn/lap-trinh-back-end-nodejs")
// slug("https://tech.com.vn/lap-trinh-front-end")
// slug("https://tech.com.vn/lap-trinh-c-co-ban-toi-nang-cao")

//==================================================

// Câu 05: Letters Only 1 (Chỉ chữ cái 1)
// Đề bài:
// Viết một hàm loại bỏ bất kỳ ký tự không phải là chữ cái từ một chuỗi, trả về chuỗi mới chỉ chứa các chữ cái.
// Ví dụ:
// lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"

// lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"

// lettersOnly("^U)6$22>8p).") ➞ "Up"

// const lettersOnly = (input) => {
//     const regex = /[^a-z]/gi;
//     console.log(input.replace(regex, ""));
// }

// lettersOnly("^U)6$22>8p).")
// lettersOnly("^,]%4B|@56a![0{2m>b1&4i4")
// lettersOnly("R!=:~0o0./c&}9k`60=y")


//====================================================
// Câu 06: Find the Time (Tìm thời gian)
// Đề bài:
// Viết hàm chuyền vào một chuỗi, sau đó tìm thời gian trong chuỗi đó và trả về một mảng các thời gian tìm được.
// Thời gian có định dạng: giờ:phút. Cả giờ và phút đều có hai chữ số, ví dụ như 09:00.
// Trong bài tập này không cần kiểm tra tính chính xác của thời gian, vì vậy 25:99 cũng có thể coi là kết quả hợp lệ.
// Ví dụ:
// findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456")
// ➞ ["09:00"]

// findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456. Bữa tối ăn lúc 20:30 ở phòng 222:333")
// ➞ ["09:00", "20:30"]

// const findTime = (input) => {
//     const regex = /\b[0-2][0-9]:[0-5][0-9]\b/g;
//     const res = input.match(regex);
//     res.forEach(element => {
//        console.log(element); 
//     });
// };

// findTime("Bữa sáng lúc 09:00 ăn ở phòng 123:456. Bữa tối ăn lúc 20:30 ở phòng 222:333")
// findTime("Bữa sáng lúc 09:31 ăn ở phòng 123:456")


//========================================================

// Câu 07: Even Number?
// Đề bài:
// Viết một hàm và chuyền vào một chuỗi các chữ số, kiểm tra xem số đó là số chẵn hay lẻ.
// Nếu là số chẵn trả ra true.
// Nếu là số lẻ trả ra false.
// Ví dụ:
// "2341" ➞ false

// "132" ➞ true

// "29" ➞ false

// "5578" ➞ true
// const isEvenNumber = (string) => {
//     const regex = /^\d+[02468]$/;
//     const result = regex.test(string);
//     return result;
//   }

//====================================================4

// Câu 08: Valid Zip Code
// Đề bài:
// Mã zip bao gồm 5 chữ số liên tiếp.
// Cho một chuỗi, viết một hàm để xác định xem chuỗi đầu vào có phải là một mã zip hợp lệ hay không.
// Một mã zip hợp lệ là như sau:
// Chỉ chứa các số (không được phép chứa ký tự khác).
// Không được chứa bất kỳ khoảng trắng nào.
// Chỉ có 5 chữ số.
// Ví dụ:
// isValid("59001") ➞ true

// isValid("853a7") ➞ false

// isValid("732 32") ➞ false

// isValid("393939") ➞ false

// const isValid = (input) => {
//     const regex = /^\d{5}$/g;
//     console.log(regex.test(input));
// };
// isValid("393939")
// isValid("732 32")
// isValid("853a7")
// isValid("59001")

//=======================================================

// Câu 09: Kiểm tra file hợp lệ hay không
// Đề bài:
// Giả sử một chương trình chỉ đọc tệp .js hoặc .jsx.
// Viết hàm chấp nhận đường dẫn tệp và trả về true nếu có thể đọc tệp và false nếu không thể.
// Ví dụ:
// isJS("/users/user.jsx") ➞ true
// isJS("/users/user.js") ➞ true
// isJS("/users/user.ts") ➞ false

// const isJS = (input) => {
//     const regex = /\.jsx?/g;
//     const res = input.match(regex);
//     console.log(res);
//     if (res){
//         return res.length >= 2 ? false : true;
//     }else {
//         return false;
//     }
// };
// console.log(isJS("/users/user.jsx"))
// console.log(isJS("/users/user.jsx.jsx"))
// console.log(isJS("/users/user.js"))
// console.log(isJS("/users/user.ts"))

//=============================================

// ### Câu 10: Có bao nhiêu chữ số thập phân?

// - Đề bài:
//     - Tạo một hàm trả về số lượng chữ số thập phân mà một số có.
//     - Bất kỳ số 0 nào sau dấu thập phân cũng được tính vào số lượng chữ số thập phân.
// - Ví dụ:
    
//     ```
//     getDecimalPlaces("43.20") ➞ 2
    
//     getDecimalPlaces("400") ➞ 0
    
//     getDecimalPlaces("3.1") ➞ 1

// const getDecimalPlaces = (input) => {
//     const regex = /\.(\d+)/g;
//     const res = input.match(regex);
//     console.log(res);
//     if (res){
//         console.log(res[0].length-1);
//     }else {
//         console.log(0);
//     }
// }
// getDecimalPlaces("43.202")
// getDecimalPlaces("400") 
// getDecimalPlaces("3.1")

//==============================================

// Câu 11: Di chuyển chữ in hoa lên phía trước
// Đề bài:
// Tạo hàm di chuyển tất cả các chữ in hoa về phía trước một từ.
// Ví dụ:
// capitalToFront("hApPy") ➞ "APhpy"

// capitalToFront("moveMENT") ➞ "MENTmove"

// capitalToFront("shOrtCAKE") ➞ "OCAKEshrt"

// const capitalToFront = (input) => {
//     const upper = input.match(/[A-Z]/g).join("");
//     const lower = input.match(/[a-z]/g).join("");
//     console.log(upper + lower);
// }
// capitalToFront("hApPy")
// capitalToFront("moveMENT")
// capitalToFront("shOrtCAKE")

//================================================

// Câu 12: Xác thực mã PIN ATM
// Đề bài:
// Máy ATM cho phép mã PIN gồm 4 hoặc 6 chữ số và mã PIN không được chứa chữ cái.
// Hãy tạo một hàm nhận vào một chuỗi và trả về true nếu mã PIN hợp lệ và trả về false nếu mã PIN không hợp lệ.
// Ví dụ:
// validatePIN("1234") ➞ true

// validatePIN("12345") ➞ false

// validatePIN("a234") ➞ false

// validatePIN("") ➞ false

// validatePIN("123456") ➞ true

// const validatePIN = (input) => {
//     if (input.length == 4 || input.length == 6){
//         const regex = /\d+/gi;
//         const res = input.match(regex);
//         if (res){
//             console.log(res[0].length == input.length);
//         }else {
//             console.log("False");
//         }
//     }else {
//         console.log("False");
//     }
// }

// const validatePIN = (pin) => {
//     // Sử dụng regex để kiểm tra mã pin có chứa chính xác 4 hoặc 6 chữ số không
//     const regex = /^(\d{4}|\d{6})$/;
//     const result = regex.test(pin);
//     console.log(result);
//   }
// validatePIN("1234")
// validatePIN("12345")
// validatePIN("a234")
// validatePIN("")
// validatePIN("123456")

//============================================

// Câu 13: Tách mã sản phẩm
// Đề bài:
// Bạn có một dãy mã sản phẩm có định dạng sau: "[chữ cái][chữ số]".
// Tạo một hàm chia các chuỗi này thành các phần chữ cái và chữ số.
// Ví dụ:
// splitCode("TEWA8392") ➞ ["TEWA", 8392]

// splitCode("MMU778") ➞ ["MMU", 778]

// splitCode("SRPE5532") ➞ ["SRPE", 5532]

// const splitCode = (input) => {
//     const regex = /([A-Z]+)|([0-9]+)/gi;
//     const res = input.match(regex);
//     console.log(res);
// }
// splitCode("TEWA8392")
// splitCode("MMU778") 
// splitCode("SRPE5532")


//======================================================

// Câu 14: Valid Variable Names (Tên biến hợp lệ)
// Đề bài:
// Khi tạo biến, tên biến phải luôn bắt đầu bằng một chữ cái và không được chứa dấu cách.
// Các kí tự tiếp theo được phép chứa số và dấu gạch dưới.
// Tạo một hàm trả về true nếu tên biến đã cho hợp lệ, nếu không thì trả về false.
// Ví dụ:
// variableValid("fullName") ➞ true

// variableValid("full_name") ➞ true

// variableValid("fullname") ➞ true

// variableValid("2fullName") ➞ false

// variableValid("full-name") ➞ false

// variableValid("full name") ➞ false

// variableValid("FullName") ➞ true

// const variableValid = (name) => {
//     const regex = /^[a-zA-Z][a-zA-Z0-9_]+$/;
//     const result = regex.test(name)
//     return result;
//   }


//================================================

//   Câu 15: Valid Hex Code (Mã Hex hợp lệ)
// Đề bài:
// Tạo hàm xác định xem một chuỗi có phải là mã hex hợp lệ hay không.
// Mã hex phải bắt đầu bằng phím thăng # và có độ dài chính xác là 6 ký tự.
// Mỗi ký tự phải là một chữ số từ 0-9 hoặc một ký tự chữ cái từ A-F.
// Tất cả các ký tự chữ cái có thể là chữ hoa hoặc chữ thường.
// Ví dụ:
// isValidHexCode("#CD5C5C") ➞ true

// isValidHexCode("#EAECEE") ➞ true

// isValidHexCode("#eaecee") ➞ true

// isValidHexCode("#CD5C58C") ➞ false

// isValidHexCode("#CD5C5Z") ➞ false

// isValidHexCode("#CD5C&C") ➞ false

// isValidHexCode("CD5C5C") ➞ false

// const isValidHexCode = (input) => {
//     const regex = /#[A-F0-9]+/gi;
//     if (input.length != 7){
//         console.log("false");
//     }else{
//         const res = input.match(regex);
//         console.log(res[0].length == 7);
//     }
// }

// isValidHexCode("#CD5C5C") //➞ true

// isValidHexCode("#EAECEE") //➞ true

// isValidHexCode("#eaecee") //➞ true

// isValidHexCode("#CD5C58C") //➞ false

// isValidHexCode("#CD5C5Z") //➞ false

// isValidHexCode("#CD5C&C") //➞ false

// isValidHexCode("CD5C5C") //➞ false

//===============================================

// Câu 16: Khoảng trắng giữa chữ thường và chữ hoa
// Đề bài:
// Viết một hàm chèn một khoảng trắng giữa mỗi cặp ký tự trong đó ký tự thứ nhất là chữ thường và ký tự thứ hai là chữ hoa.
// Ví dụ:
// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

// const insertWhitespace = (input) => {
//     const regex = /([A-Z][a-z]+)/g;
//     const arr = input.match(regex);
//     let res = "";
//     arr.forEach(word => {
//        res += " " + word; 
//     });
//     console.log(res);
// }

// C2
// const insertWhitespace = (string) => {
//     // Sử dụng regex để tìm mọi chữ thường được theo sau bởi một chữ hoa và thêm một khoảng trắng giữa chúng
//     const regex = /([a-z])([A-Z])/g;
//     const newString = string.replace(regex, "$1 $2");
//     /*
//       Trong đó:
//         [a-z] tìm kiếm một chữ cái viết thường.
//         [A-Z] tìm kiếm một chữ cái viết hoa.
//         ( ... ) định nghĩa các nhóm kết quả trong regex.
//         $1 và $2 đại diện cho kết quả của các nhóm được định nghĩa, tức là chữ cái viết thường và chữ cái viết hoa.
//     */
//     return newString;
//   };


// insertWhitespace("SheWalksToTheBeach")
// insertWhitespace("MarvinTalksTooMuch")
// insertWhitespace("TheGreatestUpsetInHistory")

//=====================================================

// Câu 17: Có bao nhiêu nguyên âm?
// Đề bài:
// Tạo một hàm nhận vào một chuỗi và trả về số lượng nguyên âm có trong chuỗi đó.
// a, e, i, o, u được coi là nguyên âm.
// Tất cả các trường hợp kiểm tra đều là một từ và chỉ chứa các ký tự chữ cái.
// Ví dụ:
// countVowels("Celebration") ➞ 5

// countVowels("Palm") ➞ 1

// countVowels("Prediction") ➞ 4

// const countVowels = (input) => {
//     const regex = /[ueoai]/gi;
//     console.log(input.match(regex).length);
// }
// countVowels("Prediction") 
// countVowels("Palm")
// countVowels("Celebration")

//====================================================

// ### Câu 18: Tìm bomb

// - Đề bài:
//     - Tạo một hàm để tìm từ "bomb" trong chuỗi được cung cấp (không phân biệt chữ hoa và chữ thường). Nếu tìm thấy, trả về "Duck!!!", ngược lại trả về "There is no bomb, relax.".
// - Ví dụ:
    
//     ```
//     bomb("There is a bomb.") ➞ "Duck!!!"
    
//     bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"
    
//     bomb("This goes boom!!!") ➞ "There is no bomb, relax."
//     ```
    
// - Ghi chú:
//     - "bomb" có thể xuất hiện ở các trường hợp khác nhau (ví dụ: chữ hoa, chữ thường, kết hợp).

// const bomb = (input) => {
//     const regex = /\bbomb\b/gi;
//     if (regex.test(input)){
//         console.log("Duck");
//     }else {
//         console.log("There is no bomb, relax.");
//     }
// }
// bomb("There is a bomb.")
// bomb("This goes boom!!!")
// bomb("Hey, did you think there is a bomb?")


// Câu 19: Xóa nguyên âm khỏi chuỗi
// Đề bài:
// Tạo một hàm nhận vào một chuỗi và trả về một chuỗi mới với tất cả các nguyên âm được loại bỏ.
// Ví dụ:
// removeVowels("I have never seen a thin person drinking Diet Coke.")
// ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// removeVowels("We're gonna build a wall!")
// ➞ "W'r gnn bld  wll!"

// removeVowels("Happy Thanksgiving to all--even the haters and losers!")
// ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

// const removeVowels = (input) => {
//     const res = input.replace(/[ueoai]/gi, "");
//     console.log(res);
// }
// removeVowels("I have never seen a thin person drinking Diet Coke.")

// removeVowels("We're gonna build a wall!")
// removeVowels("Happy Thanksgiving to all--even the haters and losers!")

//=================================================


// ### Câu 20: Trả về chỉ mục của nguyên âm đầu tiên

// - Đề bài:
//     - Viết một hàm trả về chỉ số của nguyên âm đầu tiên trong một chuỗi.
// - Ví dụ:
    
//     ```
//     firstVowel("apple") ➞ 0
    
//     firstVowel("hello") ➞ 1
    
//     firstVowel("STRAWBERRY") ➞ 3
    
//     firstVowel("pInEaPPLe") ➞ 1
//     ```
    
// - Ghi chú:
//     - Đầu vào sẽ là các từ đơn.
//     - Các ký tự trong từ sẽ ở dạng chữ hoa hoặc chữ thường.
//     - "y" không được coi là nguyên âm.
//     - Đầu vào luôn chứa một nguyên âm.

// const firstVowel = (string) => {
//     // Biểu thức chính quy /[aeiou]/i sẽ tìm nguyên âm đầu tiên (không phân biệt chữ hoa và chữ thường)
//     const match = string.match(/[aeiou]/i);
  
//     // Trả về chỉ số của nguyên âm đầu tiên trong chuỗi
//     return string.indexOf(match[0]);
//   };


  //==========================================

//   ### Câu 21: Hashes and Pluses

// - Đề bài:
//     - Tạo một hàm trả về số lượng ký tự "#" và "+" trong một chuỗi.
// - Ví dụ:
    
//     ```
//     hashPlusCount("###+") ➞ [3, 1]
    
//     hashPlusCount("##+++#") ➞ [3, 3]
    
//     hashPlusCount("#+++#+#++#") ➞ [4, 6]
    
//     hashPlusCount("") ➞ [0, 0]
//     ```
    
// - Ghi chú:
//     - Trả về [0, 0] cho một chuỗi rỗng.
//     - Trả về theo thứ tự: [hashes, pluses].

// const hashPlusCount = (string) => {
//     // Biểu thức chính quy /#/g sẽ tìm tất cả các ký tự "#"
//     // Biểu thức chính quy /\+/g sẽ tìm tất cả các ký tự "+"
//     const hashes = (string.match(/#/g) || []).length;
//     const pluses = (string.match(/\+/g) || []).length;
  
//     // Trả về số lượng ký tự "#" và "+"
//     return [hashes, pluses];
//   };

  //================================================

//   ### Câu 25: Nguyên âm đứt đoạn

// - Đề bài:
//     - Viết một hàm nhận vào một chuỗi và thêm dấu gạch ngang bên trái và bên phải của mỗi nguyên âm (a, e, i, o, u).
// - Ví dụ:
    
//     ```
//     dashed("28Tech")
//     ➞ "28T-e-ch"
    
//     dashed("Carpe Diem")
//     ➞ "C-a-rp-e- D-i--e-m"
    
//     dashed("Fight for your right to party!")
//     ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
//     ```
    
// - Ghi chú:
//     - Một chuỗi có thể chứa nguyên âm viết hoa và viết thường.
//     - Y không được coi là một nguyên âm.
// const dashed = (input) => {
//     const res = input.replace(/([ueoia])/g, "-$1-");
//     console.log(res);
// }
// dashed("28Tech")
// dashed("Carpe Diem")
// dashed("Fight for your right to party!")


//======================================================

// Câu 26: Thay thế nguyên âm bằng ký tự khác
// Đề bài:
// Tạo một hàm nhận vào một chuỗi và thay thế các nguyên âm bằng một ký tự khác.
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// Ví dụ:
// replaceVowel("karachi") ➞ "k1r1ch3"

// replaceVowel("chembur") ➞ "ch2mb5r"

// replaceVowel("khandbari") ➞ "kh1ndb1r3"

// const replaceVowel = (input) => {
//     const volve = {
//         'a': "1",
//         'e': "2",
//         'i': "3",
//         'o': "4",
//         'u': "5"
//     }
//     console.log(input.replace(/([ueoai])/g, match => volve[match]));
// }
// replaceVowel("khandbari") 
// replaceVowel("chembur")
// replaceVowel("karachi")

//==============================================================

// ### Câu 27: Đếm các chữ cái và chữ số

// - Đề bài:
//     - Viết một hàm nhận vào một chuỗi và tính số lượng ký tự chữ cái và chữ số có trong chuỗi đó. Trả về kết quả dưới dạng một đối tượng.
// - Ví dụ:
    
//     ```
//     countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }
    
//     countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }
    
//     countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }
//     ```
    
// - Ghi chú:
//     - Các chuỗi kiểm tra chỉ chứa các ký tự chữ và số.
//     - Khoảng trắng không phải là chữ cái.

// const countAll = (input) => {
//     const letter = input.match(/[a-zA-Z]/gi);
//     const digit = input.match(/[0-9]/gi);
//     console.log({
//         "Letters:": letter.length,
//         "Digits:": digit.length 
//     });
    
// }


//==============================================================

// ### Câu 28: Đếm trạng từ

// - Đề bài:
//     - Viết một hàm đếm số lượng trạng từ trong một câu.
//     - Một trạng từ là một từ kết thúc bằng "ly".
// - Ví dụ:
    
//     ```
//     countAdverbs("She ran hurriedly towards the stadium.") ➞ 1
    
//     countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2
    
//     countAdverbs("He hates potatoes.") ➞ 0
    
//     countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3
//     ```
    
// - Ghi chú:
//     - KHÔNG đếm các từ mà "ly" ở đầu hoặc ở giữa (ví dụ: Lysol, Illya).
//     - Với mục đích của bài tập này, bỏ qua sự phức tạp của ngôn ngữ Anh (một số tính từ cũng kết thúc bằng "ly").

// const countAdverbs = (input) => {
//     const regex = /\b\w\w+(ly)\b/g;
//     const match = input.match(regex) || [];
//     console.log(match.length);
    
// }
// countAdverbs("He was happily, crazily, foolishly over the moon.")
// countAdverbs("He hates potatoes.")
// countAdverbs("She ate the lasagna heartily and noisily.")
// countAdverbs("She ran hurriedly towards the stadium.")

//========================================================================

// Câu 29: Letters Only 2 (Chỉ chữ cái 2)
// Đề bài:
// Kiểm tra xem chuỗi đã cho có chỉ chứa các ký tự và dấu cách và tất cả các ký tự có đều viết thường không.
// Ví dụ:
// lettersOnly("JAVACRIPT") ➞ false

// lettersOnly("javascript") ➞ true

// lettersOnly("12321313") ➞ false

// lettersOnly("i have spaces") ➞ true

// lettersOnly("i have numbers(1-10)") ➞ false

// lettersOnly("") ➞ false

// const lettersOnly = (input) => {
//     const regex = /\d|[^\w\s]|\_|[A-Z]/g;
//     const res = input.match(regex);
//     console.log(res);
//     if (res){
//         console.log("fails");
//     }else {
//         console.log("true");
//     }
// }

// const lettersOnly = (string) => {
//     // Nếu string rỗng trả về false
//     if (!string) return false;
  
//     // Sử dụng biểu thức chính quy để kiểm tra xem chuỗi chỉ chứa chữ cái và dấu cách, và tất cả các chữ cái đều viết thường
//     const regex = /^[a-z\s]*$/;
//     const result = regex.test(string);
//     return result;
//   };

// lettersOnly("JAVACRIPT")
// lettersOnly("javascript")
// lettersOnly("12321313")
// lettersOnly("i have spaces")
// lettersOnly("i have numbers(1-10)")
// lettersOnly("")

//==============================================

// ### Câu 30: Hạn chế chữ và số

// - Đề bài:
//     - Tạo một hàm trả về true nếu chuỗi đã cho có bất kỳ một trong những điều sau:
//         - Chỉ chứa các chữ cái và không có số nào.
//         - Chỉ chứa các số và không có chữ cái nào.
//     - Nếu một chuỗi có cả số và chữ cái, hoặc chứa các ký tự không phù hợp sẽ trả về false.
// - Ví dụ:
    
//     ```
//     alphanumericRestriction("Bold") ➞ true
    
//     alphanumericRestriction("123454321") ➞ true
    
//     alphanumericRestriction("H3LL0") ➞ false
    
//     alphanumericRestriction("ed@bit") ➞ false
//     ```
    
// - Ghi chú:
//     - Bất kỳ chuỗi nào chứa khoảng trắng hoặc rỗng đều nên trả về false.

// const alphanumericRestriction = (input) => {
//     const regexNum = /^\d+$/g;
//     const regexChar = /^[a-zA-Z]+$/g
//     if (regexChar.test(input) || regexNum.test(input)){
//         console.log("True");
//     }else {
//         console.log("False");
//     }

// }

const alphanumericRestriction = (input) => {
    const regex = /^[a-zA-Z]*$|^\d*$/;
    console.log(input.match(regex));
    console.log(regex.test(input));
}

alphanumericRestriction("Bold")
alphanumericRestriction("123454321")
alphanumericRestriction("H3LL0")
alphanumericRestriction("ed@bit") 