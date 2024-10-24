
import './App.css'
import Blog from './components/blogs/blog'
import BookMarks from './components/BooksMark/BookMarks'
import Header from './components/header/header'

function App() {
 

  return (
    <>
    <Header></Header>
      <main  className='md:flex'>
      <Blog></Blog>
      <BookMarks></BookMarks>
      </main>
    </>
  )
}

export default App
