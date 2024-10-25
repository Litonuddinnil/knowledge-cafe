
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
 
import BookMarks from './components/BooksMark/BookMarks'
import Header from './components/header/header'

function App() {
 const [bookmarks,setbookmarks] = useState([]);
 const [readingTime,setReadingTime]=useState(0);
 const handlerAddToBookMarks =(blog)=>{
  const newBooksMark = [...bookmarks,blog]
   setbookmarks(newBooksMark)
 }
 const handerAddToReadingTime =(time)=>{
   const newReadTime = (readingTime+time);
   setReadingTime(newReadTime);
  console.log('added',time)
 }
  return (
    <>
    <Header></Header>
      <main  className='md:flex max-w-6xl mx-auto'>
      <Blogs handerAddToReadingTime={handerAddToReadingTime} handlerAddToBookMarks={handlerAddToBookMarks}></Blogs>
      <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
      </main>
    </>
  )
}

export default App
