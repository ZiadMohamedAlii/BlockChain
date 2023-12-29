const express = require("express");
const Blockchain = require("./blockchain");

const app = express();
const port = 3000;

const myBlockchain = new Blockchain();

app.get("/mineBlock", (req, res) => {
  // route
  const newBlock = new Block(
    myBlockchain.chain.length,
    new Date().toLocaleString(),
    "Block Data"
  );
  myBlockchain.addBlock(newBlock);
  res.send("Block mined and added to the blockchain!");
});

app.get("/getChain", (req, res) => {
  // getChain route
  res.json(myBlockchain);
});

app.listen(port, () => {
  // cheack for the running port.
  console.log(`Server is running on port ${port}`);
});
