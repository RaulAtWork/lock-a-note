function Card_Text({body, setBody}){

    return(
        <textarea className="card-content" value={body} placeholder="Write a note" onChange={setBody}/>
    )

}

export default Card_Text