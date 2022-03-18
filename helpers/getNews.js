import axios from "axios";

 export const  getLastesNews = async () =>{
   let latestNews;
   try {
     latestNews = await axios.get(
       `${process.env.NEXT_PUBLIC_API_URL}/add_new6/api_news3.php`, 
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
     return latestNews;
   } catch (error) {
    const errObj =  { success: false, data:[], Error: error.toString() } 
    return errObj
   }
 }

 export const  getAllNews = async () =>{
  let latestNews;
  try {
    latestNews = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/add_new6/api_news2.php`,
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
    return latestNews;
  } catch (error) {
   const errObj =  { success: false, data:[], Error: error.toString() } 
   return errObj
  }
}

export const  getCategories = async () =>{
  let latestNews;
  try {
    latestNews = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/add_new6/api_cat.php`, 
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
    return latestNews;
  } catch (error) {
   const errObj =  { success: false, data:[], Error: error.toString() } 
   return errObj
  }
}