function Card_Text({body, setBody}){
    function onChange(event){
        setBody(event.target.value)
    }

    return(
        <textarea className="card-content" value={body} placeholder="Write a note" onChange={onChange}/>
    )

}

export default Card_Text