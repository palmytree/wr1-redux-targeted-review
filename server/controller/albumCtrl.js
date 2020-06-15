const data = require('../../data.json')
let id = 11;
module.exports = {
    getPhotos: (req, res) => {
        res.status(200).send(data)
    },
    addPhoto: (req, res) => {
        const {title, url} = req.body
        const photo = {
            albumId: 1,
            id,
            title,
            url,
            thumbnailUrl: url
        }
        data.push(photo)
        id++
        res.sendStatus(200);
    }
}