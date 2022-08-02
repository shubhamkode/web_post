import {useRouter} from "next/router";
import Image from "next/image";
import React from 'react';

import { Post } from "../../models/Post.model";


const BlogPage:React.FC = () => {

    const [post, setPost] = React.useState<Post>();

    const router = useRouter()
    const id = router.query.blog

    React.useEffect(()=>{
        (async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const fetchedPost = await response.json()
            setPost(fetchedPost);
        })()
    },[])

    return (
        <div className="max-w-2xl mx-auto p-8 rounded">
            <div className="object-fit overflow-hidden rounded-xl">
                <Image 
                className='object-cover hover:object-fit w-full'
                src={`https://picsum.photos/id/${post?.id}/1920/1080`} alt=""
                height="900" width="1080"
            />
            </div>
            <div className="flex flex-col space-y-10">
                <h1 className="text-white text-3xl">{post?.title}</h1>
                <p className="text-gray-400">{post?.body}</p>
            </div>
        </div>
    )
}

export default BlogPage;
