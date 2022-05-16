import React,{useState} from 'react';


function Compose(){
    return(
    <div >
        <h1 className="text-center md:text-3xl underline font-semibold text-orange-600">Compose</h1>

        <form action="/compose" method="POST" className="">
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="Url-Img"></input>
            <div>

            <textarea type="text" placeholder="Content"></textarea>

            </div>
        </form>

    </div>)
}

export default Compose;