import React,{useContext} from 'react';
import {BlogContext} from '../../../context/BlogContext';
import {UserContext} from '../../../context/UserContext';
const Mainbody=()=>{

    const { blogs, loading, error } = useContext(BlogContext);
    const { user } = useContext(UserContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs: {error.message}</div>;

   return(
    <div className="latest-news mt-150 mb-150">
    <div className="container">
        <div className="row">
        {blogs.map((blog) => (
                    <div className="col-lg-4 col-md-6" key={blog._id}>
                        <div className="single-latest-news">
                            <a href={`/news/detail/${blog._id}/${user._id}`}>
                            <div className="latest-news-bg " style={{backgroundImage: `url(${blog.avatar})`}}></div>
                            </a>
                            <div className="news-text-box">
                                <h3><a href={`/news/detail/${blog._id}/${user._id}`}>{blog.name}</a></h3>
                                <p className="blog-meta">
                                    <span className="author"><i className="fas fa-user"></i> {blog.author}</span>
                                    <span className="date"><i className="fas fa-calendar"></i>  {new Date(blog.createdAt).toISOString().split('T')[0]}</span>
                                </p>
                                <p className="excerpt">{blog.category}</p>
                                <a href={`/news/detail/${blog._id}/${user._id}`} className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
</div>
   )
}
export default Mainbody;