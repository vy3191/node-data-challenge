const db = require("../data/config-data");

async function addTasks(newTask) {
   const [id] = await db("tasks").insert(newTask);
   const addedTask = await db("tasks").where("id", id).first();
   return addedTask;
};

async function findTasks() {
  const tasks = await db("tasks as t")
           .join("projects as p", "p.id", "t.project_id")
           .select("t.id as Task ID",                  
                  "p.name as Project Name",             
                  "p.description as Project Descrition",
                   "t.project_id as Project ID", 
                   "t.description as Task Description",
                   "t.notes as Task Notes",
                  "t.completed as Is Task Completed?" )
           .orderBy("t.project_id");
           
  return tasks;         
}


module.exports = {
   addTasks,
   findTasks
}