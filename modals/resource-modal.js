const db = require("../data/config-data");

async function find() {
   const resources = await db("resources").select();
   return resources;
}

async function findById(id) {
   const resource = await db("resources").where("id", id).first();
   return resource;
}

async function addResources(newResources) {
   const [id] = await db("resources").insert(newResources);
   const addedResources = await db("resources").where("id", id).first();
   return addedResources;
}

module.exports = {
   find,
   findById,
   addResources
}