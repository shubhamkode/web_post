import React from 'react';

import Posts from "./Posts";

export default function Body() {
    const [posts,setPosts] = React.useState<any>([]);

    React.useEffect(()=>{
        (async()=>{
            const json = await fetch("https://jsonplaceholder.typicode.com/posts/")
                .then(response => response.json())
                .then(data => setPosts(data))
        })()
        console.log(posts)
    },[])

    return (
        <div className="p-3 mt-5 text-white ">
            <Posts posts={posts}/>
        </div>
    )
}
