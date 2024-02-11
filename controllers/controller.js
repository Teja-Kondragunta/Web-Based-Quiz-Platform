/** Get all questions */
export async function getQuestions(req,res){
    res.json("questions api get request")
}


/** insert all questions */
export async function insertQuestions(req,res){
    res.json("questions api post request")
}

/** Delete all questions */
export async function dropQuestions(req,res){
    res.json("questions api delete request")
}

/**get all results */
export async function getResult(req,res){
    res.json("result api get request")
}

/** insert all results */
export async function postResult(req,res){
    res.json("result api post request")
}

/**delete all results */
export async function dropResult(req,res){
    res.json("result api delete request")
}

