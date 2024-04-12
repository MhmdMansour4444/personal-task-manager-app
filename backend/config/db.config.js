const mongoose = require("mongoose")

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI)

  mongoose.connection.once("connected", () => {
    console.log("Connected to mongoDB")
  })

  mongoose.connection.on("error", (error) => {
    console.log("MongoDB error: ", error)
  })
}


module.exports = { connect }