const { Router } = require("express");
const User = require("./model");
const bcrypt = require('bcrypt')

const router = new Router();


router.post("/user", (req, res, next) => {
	console.log("in post method");
	const { email, password } = req.body;

	if (email === "" || password === "") {
		return res.status(400).send("Invalid userid and password");
	}
	console.log(email, password);
	User.create({ email: email, password: bcrypt.hashSync(password, 10) })
		.then(user => res.json(user))
		.catch(err => next(err));
});

module.exports = router;