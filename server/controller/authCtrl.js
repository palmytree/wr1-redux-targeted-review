const bcrypt = require('bcrypt');
const prevHashed = '$2b$10$/wpMnseXasuvv9njHn4s.ueuVIlhW8thmzbuzirF/W.OoOk7hMu.G'

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body

        if(email !== 'dev@dev.mtn'){
            return res.status(404).send('User does not exist')
        } else {
            const authenticated = bcrypt.compareSync(password, prevHashed)
            if (authenticated) {
                req.session.user = {
                    userId: 12,
                    email: 'dev@dev.mtn'
                }
                console.log(req.session.user)
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Email or password incorrect')
            }
        }
    },
    register: async (req, res) => {
        const {email, password} = req.body;

        if (email !== "dev@dev.mtn"){
            return res.status(409).send("User doesn't have an account")
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        console.log('hash ', hash)

        req.session.user = {
            userId: 12,
            email: email
        }

        res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    }
}