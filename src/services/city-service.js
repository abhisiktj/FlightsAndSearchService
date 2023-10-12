const {CityRepository}=require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository=new CityRepository();
    }

    async createCity({name}){
        try{
        const city=this.cityRepository.createCity({name});
        return city;
        }
        catch(error){
             throw error;
        }

    }
    
    async deleteCity(cityId){
        try{
        this.cityRepository.createCity({cityId});
        return true;
        }
        catch(error){
             throw error;
        }

    }

    async updateCity({data,cityId}){
        try{
        const city=this.cityRepository.createCity({cityId,data});
        return city;
        }
        catch(error){
             throw error;
        }

    }


    async getCity(cityId){
        try{
        const city=this.cityRepository.createCity(cityId);
        return city;
        }
        catch(error){
             throw error;
        }

    }
}

module.exports=CityService;