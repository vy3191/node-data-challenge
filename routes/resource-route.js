const express = require('express');
const router = express.Router();
const resourceModal = require("../modals/resource-modal");

router.get("/", async (req,res,next) => {
    try {
      const resources = await resourceModal.find();
      res.status(200).json(resources);
    }catch(err) {
      next(err);
    }
});

router.get("/:id", async (req,res,next) => {
  try {
    const {id} = req.params;
    console.log(id);
    const resource = await resourceModal.findById(id).first();
    console.log(resource);
    if(!resource) res.status(404).json({msg:`Could not find resource with an ID ${req.params.id}`});
    res.status(200).json(resource);
  }catch(err) {
    next(err);
  }
});

router.post("/", async (req,res,next) => {
  try {
    const newResource = {
      name:req.body.name,
      description:req.body.description,
      completed:req.body.completed
    }
    if(!req.body.name) res.status(400) .json({msg:'Name is missing'});
    if(!req.body.description) res.status(400).json({msg:'Description is missing'});
    const addedResource = await resourceModal.addResources(newResource);
    res.status(201).json(addedResource);
  }catch(err) {
    next(err);
  }
})

module.exports = router;