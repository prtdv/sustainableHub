import Button from "./button";
import { useState } from 'react';

function Search(){
      const [item, setItem] = useState("");

    return(
        <div className="flex justify-between mb-[20px]">
            <form action="">
            <input type="search" value={item} name="searchitem" className="w-[500px] p-3 rounded-full border-2 border-gray-400 text-white" />            
            </form>
            <Button name="Toggle metrics"/>
        </div>
    )
}

export default Search;