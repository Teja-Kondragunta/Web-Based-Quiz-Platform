import User from '../models/userSchema.js';

/** insert user  */
export function StoreUser(req, res) {

  const { name, email, password,admin} = req.body
  User.findOne({ email }).then((err, user) => {
    if (user) {
      res.send({ message: 'User Already Registered' })
    } else {
      const user = new User({
        name,
        email,
        password,
        admin
      })
      user.save().then((err) => {
        if (err) {
          res.send(err)
        } else {
          res.send({ message: 'Successfully Registered' })
        }
      })
    }
  })
}

/** get user  */
export async function getUser(req, res) {
  try {
    const q = await User.find({admin:false});
    res.json(q);
    
  } catch (error) {
    res.json({ "Error": error })
  }
}


/**delete user by name */
export async function deleteUser(req, res) {
  try {
    const { name } = req.params;
    const deletedUser = await User.findOneAndDelete({ name });

    if (deletedUser) {
      res.json({ message: 'User deleted successfully', deletedUser });
    } else {
      res.json({ message: 'User not found' });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const { name } = req.params;
    const user = await User.findOne({ name });

    if (!user) {
      return res.json({ message: 'User not found' });
    }else{
    // user.name=req.body.name;
    user.email=req.body.email;
    user.password = req.body.password;
    const updatedUser = await user.save();
    return res.json({ message: 'User updated successfully', user: updatedUser });
    }
  } catch (error) {
  
    return res.status(500).json({ error: error.message });
  }
}

