const db = require("../data/config-data");

async function find() {
  const projects = await db("projects")
  return projects;
}

async function findById(id) {
   const project = await db("projects").where("id",id).first();
   return project;
}

async function addProject(newProject) {
   const [id] = await db("projects").insert(newProject);
   return await db("projects").where("id",id).first();
};

module.exports = {
   find,
   findById,
   addProject
}