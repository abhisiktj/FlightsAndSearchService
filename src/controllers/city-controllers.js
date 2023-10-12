const {CityService}=require('../services/index');

const cityService=new CityService();


const create=async (req,res)=>{
    try{
        const city=await cityService.create(req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully Created a city",
            error:{}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not Able To Create A City",
            error:{}
        });
    }

}

const destroy=async(req,res)=>{
    try{
        const city=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully Deleted a city",
            error:{}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not Able To Delete The City",
            error:{}
        });
    }
}

const get=async(req,res)=>{
    try{
        const city=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully Fetched a city",
            error:{}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not Able To Get The City",
            error:{}
        });
    }
}

const update=async(req,res)=>{
    try{
        const city=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully Updated a city",
            error:{}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not Able To Update The City",
            error:{}
        });
    }
}



module.exports={
   create,
   destroy,
   update,
   get
}

