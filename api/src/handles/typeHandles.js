const  getAllType  = require("../controllers/getAllTypes")

const handleTypes = async (req, res) => {
    try {
        let response = await getAllType()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = handleTypes;