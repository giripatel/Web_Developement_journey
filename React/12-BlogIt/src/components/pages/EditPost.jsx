import React, { useEffect, useState } from "react";
import appwirteSerice from '../../appwrite/config'
import {useNavigate} from 'react-router-dom'
import PostFrom from "../post-form/PostForm";
import Container from "../container/Container";

function EditPost(){
    const {post,setPost} = useState(null)
    const navigate = useNavigate()
    const slug = useParams()

    useEffect(()=>{
        if(slug){
            appwirteSerice.getPost(slug).then((post =>{
                if(post){
                setPost(post)
                }
            }))
        }else{
            navigate('/')
        }
    },[slug,navigate])

    return post ? (
        <div className="py-8">
            <Container>
                <PostFrom post={post}/>
            </Container>
        </div>
    ) : null
}

export default EditPost;