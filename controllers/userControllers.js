import User from '../models/userSchema.js';
import Topic from '../models/topicSchema.js';
import { compare, genSalt, hash } from 'bcrypt';

class UserController {
    // Get user info via POST
    static async Login(req, res) {
        const body = req.body;
        req.session = null;
        try {
            console.log("The login controller hit")
            // Search for userName in database
            const user = await User.findOne({userName: body.username});

            // Check whether there is a user found or not
            if (user) {
                // Check user password with hashed password in database
                const isValidPassword = await compare(body.password, user.password);

                if (isValidPassword) {
                    req.session = user;
                    req.session.userId = user._id;
                    res.status(200).json({message: "Valid password", userId: user._id, userName: user.userName, session: req.session});
                } else {
                    res.json({message: "Invalid password", userId: "", userName: ""});
                }

            } else {
                res.json({message: "Invalid username", userId: "", userName: ""});
            }

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Create a new user via POST
    static async Signup(req, res) {     
        const body = req.body;

        try {
            // Create new mongoose document from user data
            const user = new User({
                firstName: body.firstName,
                lastName: body.lastName,
                userName: body.username,
                email: body.email,
                password: body.password
            });
        
            // Generate salt to hash password
            const salt = await genSalt(10);

            // Hash the user's password
            user.password = await hash(user.password, salt);

            // Save the new document
            user.save().then((doc) => {
                req.session = null;
                req.session = user;
                req.session.userId = user._id;
                res.status(201).json({message: "Successfully created user", userId: doc._id, userName: doc.userName})
            });
            
            // Create a 'Home Directory' root directory for the user
            const newTopic = {
                topicName: 'Home Directory',
                userName: body.username,
                topicChildrenIds: [],
                noteChildrenIds: []
            }
            
            await Topic.create(newTopic);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Verify unique username and email entered during Signup
    static async VerifySignup(req, res) {
        const body = req.body;
        let isUniqueUserName = false;
        let isUniqueEmail = false;

        try {
            // Determine if userName already exists in database
            let userNameExists = await User.findOne({userName: body.username});
            
            if (userNameExists) {
                isUniqueUserName = false;
            } else {
                isUniqueUserName = true;
            }

            // Determine if email already exists in database
            let emailExists = await User.findOne({email: body.email});

            if (emailExists) {
                isUniqueEmail = false;
            } else {
                isUniqueEmail = true;
            }

            // Return results to frontend
            res.json({
                isUniqueUserName: isUniqueUserName,
                isUniqueEmail: isUniqueEmail
            });

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Check session
    static async CheckSession(req, res) {
        try {
            // Search for userId in database
            const user = await User.findOne({_id: req.session._id});
            res.json(user);

        } catch {
            res.json(null);
        }
    }

    // Logout and remove session
    static async Logout(req, res) {
        req.session = null;
        res.json({message: "Logged out"});
    }
}

export default UserController;