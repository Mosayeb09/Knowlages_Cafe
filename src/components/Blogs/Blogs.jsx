import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from 'prop-types';


const Blogs = ({handleBookmarks,handleMarkasRead}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then (data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-2xl">Blogs :{blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                     key={blog.id} 
                     blog={blog}
                     handleBookmarks={handleBookmarks}
                     handleMarkasRead={handleMarkasRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks:PropTypes.func,
    handleMarkasRead:PropTypes.func
}

export default Blogs;