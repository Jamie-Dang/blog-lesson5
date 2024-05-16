const express = require("express");

const app = express();

app.use(express.static("public"));

// import path để làm việc với các đường dẫn tập tin và thư mục trên hệ thống tập tin của máy tính
const path = require("path");
// Trả về một file html cho client => Chuyển sang Trang chủ
// Giờ cứ có một request tới trang chủ "/", thì trang home.html sẽ được trả về.
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "home.html"));
});

// Trả về một file html cho client => Chuyển sang Trang Editor
app.get("/editor", (req, res) => {
  res.sendFile(path.resolve(__dirname, "editor.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log("App listening on port 000");
});
