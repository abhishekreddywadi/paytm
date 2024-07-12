import axios from "axios"
import { useEffect, useState } from "react"
import SingleUser from "./SingleUser"

const AllUsers=()=>{
    const [user,setUser] = useState([])
    const [filter,setFilter] = useState("")
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/user/bulk?filter="+filter).then((response)=>{
      setUser(response.data.user)
    },[filter])
  })
  const filteredUser = ()=>{
    
    const filterdUser= user.filter((user)=>user.firstName.toLowerCase().includes(filter.toLowerCase()))
    setUser(filterdUser)
  }

 
    return(<>
        
    <form action="" onSubmit={(e)=>e.preventDefault()} >
    <input type="text" placeholder="Search by name" value={filter} onChange={(e)=>{
        filteredUser()  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  // Call the filteredUser function when the search bar value changes  //
       // Filter the user list on typing in the search bar
      return setFilter(e.target.value)} }/>
    </form>
    {
        user.map((user,index)=>(
            <SingleUser key={index} user={user} />

        ))
    }

    </>)
}
export default AllUsers