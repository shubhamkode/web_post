import React from "react";
import Image from "next/image";
import Link from "next/link";

import {Post} from "../models/Post.model";

interface IPostCardProps{
    post: Post
}

const PostCard: React.FC<IPostCardProps> = ({post}) => {
    return (
        <div className="flex justify-center">
        <Link href={`/blog/${post.id}`}>
            <a href="" className="block object-fit overflow-hidden rounded-xl max-w-sm hover:scale-105 hover:z-10 ease-in-out duration-100">
            <Image 
            className='object-cover hover:object-fit w-full'
        src={`https://picsum.photos/id/${post.id}/1920/1080`} alt=""
            height="900" width="1080"
        />
            <div className="p-4 bg-gray-900">
                <h5 className="text-xl text-gray-300 truncate">{post.title}</h5>
                <p className="truncate text-sm text-slate-300">{post.body}</p>
            </div>
        </a>
        </Link>
    </div>
    )
}

export default PostCard;
