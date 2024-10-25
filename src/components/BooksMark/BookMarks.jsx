 
 import PropTypes from 'prop-types'
import BookMark from '../Bookmark/BookMark'
 
 const BookMarks = ({bookmarks,readingTime}) => {
   return (
    <div className='md:w-1/3  ml-4 mt-2 pt-2'>
        <h1 className='bg-green-200 text-3xl p-4 m-4 rounded-lg'>Books Reading Time:{readingTime}</h1>
        <div className=" text-center bg-gray-200 p-4 m-4 rounded-lg">
      
      <h1 className="text-2xl ml-2 ">Bookmarks:{bookmarks.length}</h1>
      {
          bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
      }
       </div>
    </div>
   )
 }
 
 BookMarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
 }
 
 export default BookMarks
 