// [SECTION] Dependencies and Modules
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { createAccessToken } = require("../auth");
const { errorHandler } = require("../errorHandler");

// [SECTION] Register
module.exports.register = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
    .then(existingUser => {
        if (existingUser) {
            return res.status(400).send({ error: "Email already exists" });
        }

        const hashed = bcrypt.hashSync(password, 10);
        let newUser = new User({ email, password: hashed });

        return newUser.save()
        .then(() => res.status(201).send({ message: "User registered successfully" }))
        .catch(err => {
            console.error("Error in saving user:", err);
            return res.status(500).send({ error: "Failed to register user" });
        });
    })
    .catch(err => errorHandler(err, req, res));
};

// [SECTION] Login
module.exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
    .then(user => {
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).send({ error: "Invalid credentials" });
        }

        // 🔑 Use createAccessToken from auth.js
        const token = createAccessToken(user);

        return res.status(200).send({ access: token });
    })
    .catch(err => errorHandler(err, req, res));
};
