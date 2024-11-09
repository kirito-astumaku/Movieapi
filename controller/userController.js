import User from "../models/users";

const getUsere = async (req, res) =>{
    try {
        const users = await User
        .find({isActive: true, role: 'CUSTOMER'})

         res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:'error', Error:error.message})
    }
}

const getEmployees = async (req, res) =>{
    try {
        const employee = await User
        .find({isActive: true, role: 'EMPLOYEE'})
        res.status(200).json(employee)
    } catch (error) {
        
    }
}


export{ getUsere, getEmployees}