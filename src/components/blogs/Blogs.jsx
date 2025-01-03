import { useEffect } from "react";
import { useState } from "react"; 
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({handlerAddToBookMarks,handerAddToReadingTime}) => {
    const [blogs,setBlogs]=useState([]);
     
    useEffect(()=>{
        fetch('blog.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                     key={blog.id} 
                     handerAddToReadingTime={handerAddToReadingTime}
                     handlerAddToBookMarks={handlerAddToBookMarks}
                     blog={blog}>
                     </Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handlerAddToBookMarks: PropTypes.func,
    handerAddToReadingTime:PropTypes.func
}
export default Blogs;