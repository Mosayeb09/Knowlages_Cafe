
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Booksmarks/Bookmarks'
import Header from './components/Header/Head'


function App() {

  const [booksmarks,setBookmarks] = useState([]);

  const handleBookmarks = (blog) => {

        const newBookmarks = [...booksmarks,blog]

        setBookmarks(newBookmarks)
  }
  

  return (
    <>
   
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookmarks={handleBookmarks} ></Blogs>
      <Bookmarks></Bookmarks>
      </div>
     
      
    </>
  )
}

export default App
