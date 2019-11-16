const { Router } = require("express");
const Image = require("./Image");

const router = new Router();

router.get("/image", (request, response, next) => {
	Image.findAll()
		.then(image => {
			response.json(image);
		})
		.catch(next);
});

router.post("/image", (request, response, next) => {
	Image.create({ url: request.body.url, title: request.body.title })
		.then(image => response.json(image))
		.catch(err => next(err));
});
module.exports = router;