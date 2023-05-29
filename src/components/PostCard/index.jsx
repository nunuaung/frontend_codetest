import React from 'react'
import './postCard.css'

const PostCard = ({post}) => {
  return (
    <a href='#' className='card flex'>
        <div className='post-number'><span>{post.id < 10 ? `0${post.id}` : `${post.id}`}</span></div>
        <p className='post-title'>{post.title}</p>
    </a>
  )
}

export default PostCard
