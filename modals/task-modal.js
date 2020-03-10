const db = require("../data/config-data");

async function addTasks(newTask) {
   const [id] = await db("tasks").insert(newTask);
   const addedTask = await db("tasks").where("id", id).first();
   return addedTask;
};


module.exports = {
   addTasks
}