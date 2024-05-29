const express = require("express");
// import path để làm việc với các đường dẫn tập tin và thư mục trên hệ thống tập tin của máy tính
const path = require("path");

// Store "public" folder's path to this variable
let initial_path = path.join(__dirname, "public");

// Setup the server
const app = express();
app.use(express.static(initial_path));

// Trả về một file html cho client => Chuyển sang Trang chủ
// Giờ cứ có một request tới trang chủ "/", thì trang home.html sẽ được trả về.

// route tới trang chủ
app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "home.html"));
});

// route tới trang editor
app.get("/editor", (req, res) => {
  res.sendFile(path.join(initial_path, "editor.html"));
});

// start server by "npm start"
app.listen("3000", () => {
  console.log("Listening on Port: 3000");
});
