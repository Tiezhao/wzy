const express = require("express");
const app = express();
var bodyParser = require("body-parser");
//只要加入这个配置，在req请求对象上会多出来一个属性
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());
const port = 7890;

const apiDO = require("./api").default;
apiDO.register(app);

// app.get("/test", (req, res) => {
//   req.query;
// });

app.listen(port, function() {
  console.log("已开启http服务器，地址为:");
  console.log(`http://127.0.0.1:${port}`);
});
