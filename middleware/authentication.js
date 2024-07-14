import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({})

let Auth = async (req, res, next) => {
  try {
    let token = req.cookies.uid; // we seted already

    // 
    if (!token) {
        return res.status(401).json({
            massage:"you are not authenticated",
            success:false
        })
    }
    let check = await jwt.verify(token, process.env.JWT_SECRET_KEY)
    
    req.id = check.userId

    next()
  } catch (error) {
    console.log(error);
  }
};

export default Auth
