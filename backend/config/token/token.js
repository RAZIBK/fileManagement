var jwt = require('jsonwebtoken');
const generateToken=(id)=>{
    console.log(id);
    return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: '10d' })
};


module.exports={generateToken};
