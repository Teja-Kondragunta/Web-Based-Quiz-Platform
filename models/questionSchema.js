import mongoose from "mongoose";
const { Schema }=mongoose;
/** Question model */
const  QuestionModel=new Schema({
    topic:String,
    question:String,
    options:{type:Array,default:[]},
    correct_answer:String,
    explanation:String,
    createdAt:{type:Date,default:Date.now}
});

export  default mongoose.model("Question",QuestionModel)