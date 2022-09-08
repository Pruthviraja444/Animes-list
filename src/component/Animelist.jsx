import { useEffect } from "react"
import { useState } from "react"

const Animelist = ({animes}) => {

    const [wish,setwish]=useState([1,0])

    useEffect(()=>{
        if(localStorage.getItem("wish"==null))  // if wish array is not present before
        {
            localStorage.setItem("wish","[]")  // then create nw array
        }
    }, [])

    let handlewishlist =(id)=>{
       
        let x=localStorage.getItem("wish")
        x= JSON.parse(x)

       if (x.includes(id)==false)
       {
        alert("added to wishlist")
        x.push(id)
        x=JSON.stringify(x)
        localStorage.setItem("wish",x)

        console.log(x, typeof x);
       }
       else{
        alert("item already in wislist")
        let i=x.indexOf(id);
        x.splice(i,1);
        x=JSON.stringify(x)
        localStorage.setItem("wish",x)


       }
       
    }

    

    return (  
        <div className="animelist">
         {
            animes.map((anime)=>{
                return(
                    <div key={anime.mal_id} className="anime">
                        <img src={anime.images.jpg.small_image_url} alt="not Found" />
                         <h4>Title:{anime.title}</h4>
                         <h4>Type:{anime.type}</h4>
                         <h4>Source:{anime.source}</h4>
                         <button onClick={()=>{handlewishlist(anime.mal_id)}}>&#10084;</button> 
                         {/* <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button> */}
                    </div>
                )
            })
         }
        </div>
    );
}
 
export default Animelist;