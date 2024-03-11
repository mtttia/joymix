import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Home() {
    
    

    let posts = [
        {
            title: 'Post 1',
            content: 'This is the first post'
        },
        {
            title: 'Post 2',
            content: 'This is the second post'
        },
        {
            title: 'Post 3',
            content: 'This is the third post'
        }
    ]

  return (
    <Swiper
        direction='vertical'
        resistance={false}
    >
        {posts.map((post, index) => {
            return (
                <SwiperSlide key={index}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default Home