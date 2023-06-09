const router = require("express").Router();
const allPhones = require("../data/phones.json");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  try {
    res.json(allPhones);
  } catch (error) {
    console.log(error);
  }
});

router.get("/phones/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const onePhone = allPhones.find((p) => p.id.toString() === id);

    res.json(onePhone);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
