// FIle chính code chứa toàn bộ app
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/products-management');

const app = express();


app.set('views', './views'); // Tìm thư mục views với ... file bên trong
app.set('view engine', 'pug'); // Template engine được thêm vào pug
app.use(express.static("public")); // Ta cần dùng các file public cho giao diện thì cần đưa vào mục public.
// Public ở đây thì folder sẽ public hết bên trong 
// Cài mongoose

// connect to MongoDB
// 'mongodb://admin:password123@myserver.example.com:27017/online_store'
// Tên miền server là thay phần ip
const Product = new mongoose.model('Product', {
  title: String,
  price: Number,
  thumbnail: String
});

console.log(Product);
// Định nghĩa một router cho URL '/' với phương thức GET
app.get('/', (req, res) => {
    res.render('index.pug', {
      titlePage: "Trang chủ"
    }); // Render giao diện vào 
    // res.render('index', { title: 'Hey', message: 'Hello there!' }) // thêm được cả param
});

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  // console.log(products);
  res.render('products', {
    titlePage: "Danh sách sản phẩm",
    products: products
  });
});

// Định nghĩa một router cho URL '/about' với phương thức GET
app.get('/about', (req, res) => {
  res.send('Giới thiệu về chúng tôi');
});

// Định nghĩa một router cho URL '/contact' với phương thức POST
app.post('/contact', (req, res) => {
  res.send('Liên hệ');
});



// Khởi động máy chủ
app.listen(3000, () => {
  console.log('Server đang lắng nghe tại cổng 3000');
});
