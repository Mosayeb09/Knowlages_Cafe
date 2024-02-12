import PropTypes from 'prop-types';
import { BsBookmarkCheckFill } from "react-icons/bs";



const Blog = ({ blog,handleBookmarks,handleMarkasRead }) => {

    const {title ,cover,author,author_img,id,posted_date,hashtags, reading_time} = blog; 

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8   ' src={cover} alt={`cover picture of the title ${title}`} />
            
            <div className='flex justify-between '>
                <div className='flex  '>
                    <img className='w-14 rounded-full   ' src={author_img} alt="" />
                    <div className='ml-6 '>
                        <h3 className='text-4xl'>
                            {author}
                        </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                
                 <span>{reading_time} mit read</span>
                 <button
                    onClick={()=> handleBookmarks(blog)} className='ml-2 '><BsBookmarkCheckFill></BsBookmarkCheckFill>
                 </button>
                  
                </div>
            </div>
            <div>
               <h2 className='text-2xl'>{title}</h2>
               <p >
                {
                    hashtags.map((hash,idx) => <span className='ml-2' key={idx}><a href="">{hash}</a></span> )
                }
               </p>
               <button 
               onClick={() =>handleMarkasRead(id,reading_time)}
               className=' text-purple-800 font-bold underline'>Mark As Read</button>

            </div>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func,
    handleMarkasRead:PropTypes.func

}

export default Blog;