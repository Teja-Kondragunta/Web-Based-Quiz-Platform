import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions,{ answers } from '../database/data.js'
import User from '../models/userSchema.js'





/**  login  */

export async function login(req,res){
    const {email,password}=req.body;
    User.findOne({email:email}).then(user=>{
        if(user)
        {
            if(user.password===password){
                res.json({msg:"Sucess","user":user});
                console.log(user);
            } else{
                res.json("the password is incorrect")
            }
        }else{
                res.json("No record existed")
        }

    })

            
}

/** Get all questions */
export async function getAllQuestions(req,res){
    try {
            const q= await Questions.find();
            res.json(q);
    } catch (error) {
        res.json('Error:'+error);
    }
}

/** get question by topic name */
export async function getQuestions(req, res) {
    try {
        const sub = req.params.subject;
        const subject=sub.toLowerCase();
        console.log(subject)

        const questions = await Questions.find({ topic: subject });
        if (questions.length === 0) {
            return res.status(404).json({ error: 'No questions found for the given topic.' });
        }

        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
}


/** insert all questions */
export async function insertQuestions(req,res){
    try {
          await  Questions.insertMany(req.body),
            res.json({ msg: "Data Saved Successfully...!" });

    } catch (error) {
        res.json('Error:'+error );

    }
}

/** Delete all questions */
export async function dropQuestions(req,res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Data deleted Successfully...!" });

    } catch (error) {
        res.json('Error:'+error );
    }

}

/**get all results */
export async function getResult(req,res){
    try {
        const r=await Results.find();
        res.json(r);
    } catch (error) {
            res.json({ error })
    }
}

/** insert all results */
export async function postResult(req,res){
    try {
        const { username,result,attempts,points,achived }=req.body;
        if(!username && !result) 
        {
            throw new Error('Data Not Provided.....!');
        }

        // await Results.create({ username, result, attempts, points, achived },function(err,data){
        //     res.json({msg:"Result Saved Sucessfully...!"})
        //   })

        const resultInstance = new Results({
            username,
            result,
            attempts,
            points,
            achived
        });
        await resultInstance.save().then(()=>{
            res.json({msg:"Result Saved Sucessfully...!"})
        });
        
        
    } catch (error) {
        res.json(error)
    }
}


/**delete all results */
export async function dropResult(req,res){
    try {
        await Results.deleteMany();
        res.json({msg:"Result deleted sucessfully....!"})
    } catch (error) {
            res.json({ error })
    }
}

