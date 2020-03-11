
exports.seed = async function(knex) {
  await knex("projects").insert([
    {
      name: 'Learning HTML',
      description: 'First step in web development - learn HTML',
      completed:true
    },
    {
     name: 'Learning CSS',
     description: 'second step in web development - learn CSS',
     completed:true
   },
   {
     name: 'Learning JavaScript',
     description: 'Third step in web development - learn Javascript with jquery',
     completed:false
   },
   {
     name: 'Learning pre-processors',
     description: 'Fourth step in web development - learn SASS, LESS, Bootstrap',
     completed:true
   }
 ])
};
