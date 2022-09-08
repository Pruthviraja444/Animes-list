import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";
import Animelist from "./Animelist";

const Wishlist = () => {

    let{data:animes,error,pending}= useFetch("https://api.jikan.moe/v4/anime")

    let [wish,setwish]=useState(null)

        useEffect(()=>{

        var wish=localStorage.getItem("wish")
        wish=JSON.parse("wish")
        setwish(wish)

       
            

    }, [])

    return ( 
        <div>
 {pending && <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}

    {animes && <Animelist animes={animes.filter((anime)=>{ return wish.includes(animes.mal_id)})
}  /> }

        </div>
     );
}
 
export default Wishlist
