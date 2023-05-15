const express = require("express");
const savesale = require("../controllers/savesale")
const getsales = require("../controllers/getsales")
const deletesale = require("../controllers/deletesale")
const getsalebyid = require("../controllers/getsalebyid")
const updatesale = require("../controllers/updatesale")
const gettotalsales = require("../controllers/gettotalsales")
const getsaleandproduct = require("../controllers/getsaleandproduct")


const router = express.Router()

router.get("/getsales", getsales);
router.get("/gettotalsales", gettotalsales);
router.post("/savesale", savesale);
router.post("/deletesale", deletesale);
router.post("/getsalebyid", getsalebyid);
router.post("/getsaleandproduct", getsaleandproduct);
router.post("/updatesale", updatesale);


module.exports = router;