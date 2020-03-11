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
   console.log(id);
   return await db("projects").where("id",id).first();
};

async function getAllDetails(id) {
  const projects =  await db("projects").where({id}).first();
  const tasks = await db("tasks as t")
                        .where({"t.project_id": id})
                        .select("t.id as Task Id",
                                "t.project_id as Project ID",
                                "t.description as Task Description", 
                                "t.notes as Task Notes",
                                "t.completed as Is Task Completed" );
  const resources = await db("resources as r")
                           .join("projects_resources as pr", "pr.resource_id", "r.id")
                           .where({"pr.project_id": id}) 
                           .select("r.id as Resource ID", "r.name as Resouce Name", "r.description as Description");
                           
  return { ...projects, tasks, resources};                            
}

module.exports = {
   find,
   findById,
   addProject,
   getAllDetails
}