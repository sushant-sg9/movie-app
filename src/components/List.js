import React from "react";

const List =(props)=>{
   let Component = props.component
   return (
    <>
    {props.movies.map((value,index)=>
        <div>
            <img src={value.Poster} alt='image'/>
            <div
                onClick={()=> props.handelFaviouratesClick(value)}
                ><Component/>
            </div>

        </div>)}
        </>
   )
}
export default List