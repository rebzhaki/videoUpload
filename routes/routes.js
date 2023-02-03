const express = require("express");
const router = express.Router();
const multer = require("multer");
const File = require("../model/model");

//Configuration for Multer
const upload = multer({ dest: "public/files" });

//Post Method
router.post("/post", (req, res) => {
  res.send("Post API");
});

router.post("/uploadFile", upload.single("myFile"), async (req, res) => {
  // Stuff to be added later
  // console.log(req.file)
  try {
    const newFile = await File.create({
      name: req.file.filename,
    });
    res.status(200).json({
      status: "success",
      message: "File created successfully!!",
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

router.get("/getFiles", async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json({
      status: "success",
      files,
    });
  } catch (error) {
    res.json({
      status: "Fail",
      error,
    });
  }
});

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send("Get by ID API");
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
