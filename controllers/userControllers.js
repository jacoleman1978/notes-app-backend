import Users from '../models/userSchema';

class UserController {
    // Get user info via GET
    static async GetUser(req, res) {
        const userName = req.body.username;
        try {
            const response = await Users.findOne({userName: userName}).exec();
            res.json(response);

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // Create a new user via POST
    static async CreateUser(req, res) {
        try {
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const userName = req.body.userName;
            const email = req.body.email;
            const hashedPwd = "placeholder";

            await Users.create({
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                email: email,
                hashedPwd: hashedPwd
            })
            res.json({status: "success"});

        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }
}

export default UserController;