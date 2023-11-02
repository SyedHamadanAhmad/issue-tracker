export const getClosed = async()=>{
    try {
      const res = await fetch('http://localhost:3000/api/closed', {
        cache:"no-store",
      })
      if(!res.ok){
        throw new Error('Failed to get Closed Issues')
      } 
      
      return res.json()
      
    } catch (error) {
      console.log("Error loading topics: ", error)
    }
  
  }
  

 export const getOpen= async()=>{
    try {
      const res = await fetch('http://localhost:3000/api/open', {
        cache:"no-store",
      })
      if(!res.ok){
        throw new Error('Failed to get Closed Issues')
      } 
      
      return res.json()
  
    } catch (error) {
      console.log("Error loading topics: ", error)
    }
  
  }

  export const getOngoing= async()=>{
    try {
      const res = await fetch('http://localhost:3000/api/ongoing', {
        cache:"no-store",
      })
      if(!res.ok){
        throw new Error('Failed to get Closed Issues')
      } 
      
      return res.json()
  
    } catch (error) {
      console.log("Error loading topics: ", error)
    }
  
  }