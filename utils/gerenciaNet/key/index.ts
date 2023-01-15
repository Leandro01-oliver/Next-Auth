import axios from "axios"

const generetKey = async () =>{
    await axios.get("api/pix")
    .then(res=>{
        console.log(res)
    })
}

export { generetKey }