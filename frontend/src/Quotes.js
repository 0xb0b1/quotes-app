import React, {useState} from "react"
import axios from "axios"

function Quotes() {
    const [text, setText] = useState("")
    const [author, setAuthor] = useState("")

    function getQuote() {
        axios.get("http://localhost:5000/", { crossdomain: true })
            .then(response => {
                setText(response.data.text)
                setAuthor(response.data.author)
            })
    }

    return (
        <div>
            <button className="btn" onClick={getQuote}>Generate Quote</button>
            <h2>{text}</h2>
            <p>{"- " + author}</p>
        </div>
    )
}

export default Quotes
