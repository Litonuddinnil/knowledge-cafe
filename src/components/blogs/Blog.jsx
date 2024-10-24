import { useEffect } from "react";
import { useState } from "react";

 

const Blog = () => {
    const [blogs,setBlogs]=useState([]);
     
    useEffect(()=>{
        fetch('blog.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div>
            <h1>blogs:{blogs.length}</h1>
        </div>
    );
};

export default Blog;