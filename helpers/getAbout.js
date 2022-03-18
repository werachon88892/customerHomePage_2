import axios from "axios";

export const  getAboutData = async () =>{
  let aboutData;
  try {
    aboutData = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/add_new6/api_about_page.php`,
      {
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
    return aboutData;
  } catch (error) {
   const errObj =  { success: false, data:[], Error: error.toString() } 
   return errObj
  }
}

export const  getAboutCards = async () =>{
  let aboutCards;
  try {
    aboutCards = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/add_new6/api_about_main.php`,
      {
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
    return aboutCards;
  } catch (error) {
   const errObj =  { success: false, data:[], Error: error.toString() } 
   return errObj
  }
}