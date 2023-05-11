const  getAllType  = require("../controllers/getAllTypes")

const handleTypes = async (req, res) => {
    try {
        let response = await getAllType()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({msg: error.message})
    }

}

module.exports = handleTypes;