import React from 'react';

import PostCard from './PostCard';
import {Post} from "../models/Post.model"

interface IPostsInterface {
    posts: Post[]
}

const Posts: React.FC<IPostsInterface> = ({posts}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-3 sm:max-w-5xl  mx-auto md:max-w-max h-screen"
 >
      {posts.map((post: any, index: any) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;


