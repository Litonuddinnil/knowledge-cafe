
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
 
import BookMarks from './components/BooksMark/BookMarks'
import Header from './components/header/header'
import BookMark from './components/Bookmark/BookMark'

function App() {
 const [bookmarks,setbookmarks] = useState([]);
 const [readingTime,setReadingTime]=useState(0);
 const handlerAddToBookMarks =(blog)=>{
  const newBooksMark = [...bookmarks,blog]
   setbookmarks(newBooksMark)
 }
 const handerAddToReadingTime =(time,id)=>{
   const newReadTime = (readingTime+time);
   setReadingTime(newReadTime);
  // console.log('added',time)
  // console.log('remove aid',id);
  const remainingBooksMarks = bookmarks.filter(bookmark => bookmark.id !==id);
  setbookmarks(remainingBooksMarks)
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
