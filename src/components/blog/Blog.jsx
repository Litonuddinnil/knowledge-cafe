import { CiBookmarkPlus } from "react-icons/ci";
import PropTypes from 'prop-types';
const Blog = ({blog,handlerAddToBookMarks,handerAddToReadingTime}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
   
    return (
        <div >
            <img className='w-full  rounded-md' src={cover} alt= {`cover picture ${title}`} />
            <div className='flex items-center justify-between my-6 '> 
 
               <div>
                 <div className='flex gap-4'>
                 <div>
                 <img className='w-[60px] rounded-full' src={author_img} alt={`author image ${author_img}`} />
                 </div>
                   <div>
                    <h1 className='font-bold text-2xl'>{author}</h1>
                    <p>{posted_date}</p>
                   </div> 
                </div>
               </div>
 
               <div className="flex gap-2 items-center justify-center">
               <p className='text-xl font-medium text-gray-400'>{`${reading_time} min read`}</p>
               <button className="ml-2 text-2xl text-red-400 " onClick={()=>handlerAddToBookMarks(blog)}> <CiBookmarkPlus /></button>
               </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-xl font-medium text-gray-400 p-3 gap-2 flex'>
                {
                    hashtags.map((hash,idx)=> <span key={idx}> <a href="">{hash}</a></span>)
                }
            </p> 
            <button className="text-purple-500 underline mb-6" onClick={() =>handerAddToReadingTime(reading_time,id)} href="">Marks As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handlerAddToBookMarks: PropTypes.func,
    handerAddToReadingTime: PropTypes.func
}

export default Blog;