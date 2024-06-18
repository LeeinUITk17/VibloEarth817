import React,{useContext} from 'react';
import {BlogContext} from '../../../context/BlogContext';
const Mainbody=()=>{

    const { blogs, loading, error } = useContext(BlogContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs: {error.message}</div>;

   return(
    <div className="latest-news mt-150 mb-150">
    <div className="container">
        <div className="row">
        {blogs.map((blog) => (
                    <div className="col-lg-4 col-md-6" key={blog._id}>
                        <div className="single-latest-news">
                            <a href={`/news/detail/${blog._id}`}>
                            <div className="latest-news-bg " style={{backgroundImage: `url(${blog.avatar})`}}></div>
                            </a>
                            <div className="news-text-box">
                                <h3><a href={`/news/detail/${blog._id}`}>{blog.name}</a></h3>
                                <p className="blog-meta">
                                    <span className="author"><i className="fas fa-user"></i> {blog.author}</span>
                                    <span className="date"><i className="fas fa-calendar"></i>  {new Date(blog.createdAt).toISOString().split('T')[0]}</span>
                                </p>
                                <p className="excerpt">{blog.category}</p>
                                <a href={`/news/detail/${blog._id}`} className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
        </div>

        <div className="row">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="pagination-wrap">
                            <ul>
                                <li><a href="#">Prev</a></li>
                                <li><a href="#">1</a></li>
                                <li><a className="active" href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   )
}
export default Mainbody;