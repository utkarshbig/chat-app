const getUserDetailsFromToken = require("../helper/getUserDetailsFromToken")

async function userDeatails(request,response) {
    try {
        const token=request.cookies.token || ""
        const user=await getUserDetailsFromToken(token)
        return response.status(200).json({
            message:"User details",
            data:user
        })
    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true
        })
    }
}
module.exports=userDeatails