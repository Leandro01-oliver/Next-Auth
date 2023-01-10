import axios from "axios";

class UserService{

  async findUserServiceAll(setDataUser : any){
    await axios.get("api/get/user/all")
    .then((result : any) => {
      setDataUser(result)
    }).catch((err : Error)=>{
       console.error(err);
    })
  }

  async findUserServiceById(id : Number, setDataUser : any){
    await axios.get(`api/get/user/by/id/${id}`)
    .then((result : any) => {
      setDataUser(result)
    }).catch((err : Error)=>{
       console.error(err);
    })
  }

}

export { UserService }