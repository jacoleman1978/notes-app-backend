import User from '../models/userSchema.js';
import { compare, genSalt, hash } from 'bcrypt';

class UserController {
    // Get user info via GET
    static async Login(req, res) {
        const body = req.body;

        try {
            // Search for userName in database
            const user = await User.findOne({userName: body.username});

            // Check whether there is a user found or not
            if (user) {
                // Check user password with hashed password in database
                const isValidPassword = await compare(body.password, user.password);

                if (isValidPassword) {
                    res.status(200).json({message: "Valid password", userId: user._id});
                } else {
                    res.json({message: "Invalid password", userId: ""});
                }

            } else {
                res.json({message: "Invalid username", userId: ""});
            }

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Create a new user via POST
    static async Signup(req, res) {     
        const body = req.body

        try {
            // Create new mongoose document from user data
            const user = new User({
                firstName: body.firstName,
                lastName: body.lastName,
                userName: body.userName,
                email: body.email,
                password: body.password
            });
        
            // Generate salt to hash password
            const salt = await genSalt(10);

            // Hash the user's password
            user.password = await hash(user.password, salt);
            user.save().then((doc) => res.status(201).send(doc));

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }
}

export default UserController;