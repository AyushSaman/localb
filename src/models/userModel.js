const {mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : [true,"Provide Username"],
        unique: true
    },
    email:{
        type : String,
        required : [true,"Provide Email"],
        unique: true
    },
    password :{
        type : String,
        required : [true,"Provide Password"]
    },
    isVerified :{
        type: Boolean,
        default : false
    },
    isAdmin : {
        type: Boolean,
        default : false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;