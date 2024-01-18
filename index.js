const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/compute", (req, res) =>{
	let n1 = parseFloat(req.query.num1);
	let n2 = parseFloat(req.query.num2);
	let ans = n1 + n2;
	ans = ans.toFixed(2)
	let msg = "result of addition = " + ans;
	res.json({"msg":msg});
});

app.listen(8000, () => { console.log("server ready @ port 7000"); });