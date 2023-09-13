import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { buscar } from "../api/api"

const Post = ({url}) => {

const [post,setpost] = useState({})

    const {id} = useParams()
    
    useEffect(() =>{
        buscar(`/posts/${id}`,setpost)
    },[id])


    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post