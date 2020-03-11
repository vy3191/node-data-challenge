const express = require('express');
const router = express.Router();
const projectsModal = require("../modals/project-modal");

router.get("/", async (req,res,next) => {
  try{
    const projects = await projectsModal.find();
    res.status(200).json(projects);
  }catch(err) {
    next(err);
  }
});

router.get("/:id", async (req,res,next) => {
  try{
    const id = req.params.id;
    const project = await projectsModal.findById(id);
    if(!project) res.status(404).json({msg:`Could not find project wiht an ID ${id}`});
    res.status(201).json(project)

  }catch(err) {
    next(err);
  }
});

router.get("/:id/tasks-resources", async (req,res,next) =>{
   try {
     console.log(req.params.id);
     const allDetails = await projectsModal.getAllDetails(req.params.id);
     console.log(allDetails)
     res.status(200).json(allDetails);
   }catch(err){
     next(err);
   }
});

router.post("/", async (req,res,next) => {
  try{
    const newProject = {
      name:req.body.name,
      description:req.body.description
    }   
    console.log(newProject)
    if(!req.body.name) res.status(400).json({msg:'Name is missing'});
    if(!req.body.description) res.status(400).json({msg:'Description is missing'});
    const addedProject = await projectsModal.addProject(newProject);
    res.status(201).json(addedProject);

  }catch(err) {
    next(err);
  }
})

module.exports = router;