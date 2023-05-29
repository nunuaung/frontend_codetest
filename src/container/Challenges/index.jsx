import React, { useEffect, useState } from 'react'
import './challenges.css'
import { images } from '../../constants'
import Title from '../../components/Title'
import Button from '../../components/Button'
import axios from 'axios'
import PostCard from '../../components/PostCard'

const Challenges = () => {
    const [posts, setPosts] = useState([]);
    const postPerPage = 5;
    const [next, setNext] = useState(postPerPage);
    const handleMorePost = () => {
        setNext(next + postPerPage);
    };

    useEffect(()=>{
        getPosts();
    },[])

    const getPosts = ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
            let data = res.data;
            setPosts(data);
            console.log("data", data);
            })
    }
  return (
    <div className='challenges sec-mb' data-aos='slide-up'>
      <div className='inner'>
        <div className='flex challenges-flex'>
            <div className='challenges-image flex'>
                <img src={images.challenges} alt='challenges' />
            </div>
            <div className='challenges-content challenges-col'>
                <Title title='Our Challenges'/>
                <div className='posts'>
                    {
                        posts?.slice(0, next)?.map((post)=>{
                            return <PostCard key={post.id} post={post}/>
                        })
                    }
                </div>
                <button className='primary-btn' onClick={handleMorePost}>View More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Challenges
