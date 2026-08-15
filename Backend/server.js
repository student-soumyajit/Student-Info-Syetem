const app = require("./src/app");
const config = require("./src/config/config");
const connectDB = require('./src/config/db')

connectDB();

app.get("/", (req, res) => {
  res.send("hi");
});

const PORT = config.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})