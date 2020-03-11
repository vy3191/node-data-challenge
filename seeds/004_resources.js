
exports.seed = async function(knex) {
  await knex("resources").insert([
    {
      name: "Online - lambda school",
      description: "It is online resouce with 18 months commitment",
      completed:true
    },
    {
      name: "Online - codeshool",
      description: "It is online resouce with no commitment",
      completed:false
    },
    {
      name: "Inperson - flat-iron",
      description: "It is onsite resouce with 12 months commitment",
      completed:false
    },
    {
      name: "Inperson - 4 years school",
      description: "It is onsite resouce with 60 months commitment",
      completed:false
    }
 ])
};
