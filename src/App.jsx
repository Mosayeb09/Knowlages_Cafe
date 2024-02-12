
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Booksmarks/Bookmarks'
import Header from './components/Header/Head'


function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setRearingTime] = useState(0)

  const handleBookmarks = (blog) => {

        const newBookmarks = [...bookmarks,blog]

        setBookmarks(newBookmarks)
  }
  const handleMarkasRead =(id, time) => {

    // const newreadingTime = readingTime + time;
    setRearingTime(readingTime + time);

    const remainBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainBookmarks)
  }
  

  return (
    <>
   
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookmarks={handleBookmarks} handleMarkasRead={handleMarkasRead} ></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
     
      </div>
     
      
    </>
  )
}

export default App
