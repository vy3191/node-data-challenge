const server = require("./server");
const PORT = process.env.PORT || 8000;

server.listen(PORT, (req,res) => {
   console.log(`App is up and running at htpp://localhost:${PORT}`);
})