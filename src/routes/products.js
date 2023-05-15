const express = require("express");
const getproducts = require("../controllers/getproducts")
const saveproduct = require("../controllers/saveproduct")
const deleteproduct = require("../controllers/deleteproduct")
const getproductsnameid = require("../controllers/getproductsnameid")
const getproductbyid = require("../controllers/getproductbyid")
const updateproduct = require("../controllers/updateproduct")
const updateproductquantity = require("../controllers/updateproductquantity")
const addproducttype = require("../controllers/addproducttype")
const getallproducttype = require("../controllers/getallproducttype")
const deleteproducttype = require("../controllers/deleteproducttype")
const getdailyprice = require("../controllers/getdailyprice")
const savedailyprice = require("../controllers/savedailyprice")

const router = express.Router()

router.get("/getproducts", getproducts);
router.get("/getproductsnameid", getproductsnameid);
router.get("/getproductbyid/:id", getproductbyid);
router.get("/getallproducttype", getallproducttype);
router.get("/getdailyprice", getdailyprice);
router.post("/saveproduct", saveproduct);
router.post("/deleteproduct", deleteproduct);
router.post("/updateproduct", updateproduct);
router.post("/updateproductquantity", updateproductquantity);
router.post("/addproducttype", addproducttype);
router.post("/deleteproducttype", deleteproducttype);
router.post("/savedailyprice", savedailyprice);

module.exports = router;