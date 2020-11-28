var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/domain", function (req, res, next) {
  const user = req.body;
  console.log(user.domain);
  //const user2 = users.find((us) => us.domain === user.domain);
  getIP(user.domain).then(data => {
    res.status(200).send({
      status: 200,
      message: data,
    });
  });
});
module.exports = router;

async function getIP(domain){
  
  const fetch = require("node-fetch");
  let response = await fetch("http://ip-api.com/json/"+domain);
  let data = await response.json();
  console.log(data.query);
  return data.query;
}
