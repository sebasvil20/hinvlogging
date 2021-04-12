import React from 'react'
import { PostCard } from '../PostCard'

export const PostList = ({posts}) => {
    return(
        <div className="postList">
            {
                posts.map(post => <PostCard key={post.id} id={post.id} cover={post.cover.name} title={post.title} description={post.description}/>)
            }
        </div>
    )
}