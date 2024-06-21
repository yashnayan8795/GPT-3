import React from 'react'
import './article.css'
import { motion } from "framer-motion"
const Article = ({imgUrl,date,text,bloglink}) => {
  return (
    <motion.div className='gpt3__blog-container_article' whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="Blog Image" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <div >
          <p id='LinkHighlight'><a href={bloglink} target='_blank'>Read Full Article</a></p>
        </div>

      </div>
    </motion.div >
  )
}
export default Article