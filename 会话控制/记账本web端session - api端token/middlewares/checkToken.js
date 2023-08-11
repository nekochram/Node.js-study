const jwt = require("jsonwebtoken");
const {secret}=require('../config/config')
module.exports = (req, res, next) => {
  let token = req.get("token");
  if (!token) {
    return res.json({
      code: "2003",
      msg: "token缺失",
      data: null,
    });
  } else {
    jwt.verify(token, secret, (err, data) => {
      if (err) {
        return res.json({
          code: "2004",
          msg: "token错误",
          data: null,
        });
      }
      //保存用户的信息
      req.user = data; // req.session  req.body
      //如果 token 校验成功
      next();
    });
  }
};
