import { useEffect, useState } from "react"

const Filter = ({originalData, setData}) => {
    const [superHost, setSuperHost] = useState(false);
    useEffect(() => {
        if(superHost) {
            const filteredData = originalData.filter((item) => 
                item.host_is_superhost
            )
            setData(filteredData);
        } 
    }, [superHost])
    
  return (
    <div>
    <label htmlFor="">       
        <input type="checkbox" onChange={(e) => setSuperHost(!superHost)}/>
        Super Host
    </label>
    </div>
  )
}
export default Filter