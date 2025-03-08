const { default: mongoose } = require("mongoose");

const connectToDB=async()=>{
    const connectionURL="mongodb+srv://eeeeeeeerohit:IxgNX7iioKkblInS@cluster0.63464.mongodb.net/";
    mongoose.connect(connectionURL).then(()=>console.log("Connection is Successful")).catch((e)=>console.log("Something went wrong"));
}
export default connectToDB