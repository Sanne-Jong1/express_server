const express = require("express");
const axios = require("axios");
const app = express();

app.get("/test",(req,res)=>{
res.send("success")
})
app.get("/getData", async (req, res) => {
  try {
    const response = await axios.get("https://api.parts-catalogs.com/v1/catalogs/nissan/schemas?carId=c302e0c82d01db8fef520aeac7b92bd0&branchId=547&page=0");

    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
