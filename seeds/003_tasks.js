
exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      "description": "Learning HTML - requires 30 hours of study with at least 5 projects",
      "notes": "There are several online resouces like lambda school, codecademy, and treehouse",
      "project_id": 1,
      "completed":true

    },
    {
     "description": "Learning CSS - requires 40 hours of study with at least 7 projects",
     "notes": "There are several online resouces like lambda school, codecademy, and treehouse",
     "project_id": 2,
     "completed":true


   },
   {
     "description": "Learning Javascript - requires 50 hours of study with at least 10 projects",
     "notes": "There are several online resouces like lambda school, codecademy, and treehouse",
     "project_id": 3,
     "completed":true


   },
   {
     "description": "Learning Bootstrap - requires 70 hours of study with at least 3 projects",
     "notes": "There are several online resouces like lambda school, codecademy, and treehouse",
     "project_id": 4,
     "completed":true


   }
  ])
};
