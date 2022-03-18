import axios from "axios";

export const  getExternalLinks = async () =>{
  let externalLinks;
  try {
    externalLinks = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/add_new6/api_ext_links.php`, {
     headers: {
       "Content-Type": "application/json",
     },
    }).then((res) =>{
      const resObj =  { success: true, data:res.data, Error: "" } 
      return resObj
    }).catch((error) =>{
     const errObj =  { success: false, data:[], Error: error.toString() } 
     return errObj
    })
    return externalLinks;
  } catch (error) {
   const errObj =  { success: false, data:[], Error: error.toString() } 
   return errObj
  }
}