const express = require('express');
const router = express.Router();
const taskModal = require("../modals/task-modal");

router.post("/", async (req,res,next) => {
    const newTask = {
      description:req.body.description,
      notes:req.body.notes,
      project_id: req.body.project_id,
      completed:req.body.completed
    };
    if(!req.body.description) res.status(400).json({msg:'Description is missing'});
    if(!req.body.notes) res.status(400).json({msg:'Notes are missing'});
    if(!req.body.project_id) res.status(400).json({msg:'Project ID is missing.'})
    const addedTask = await taskModal.addTasks(newTask);
    res.status(201).json(addedTask);
})

module.exports = router;