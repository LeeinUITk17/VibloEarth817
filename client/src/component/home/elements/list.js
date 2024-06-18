import React,{useContext} from 'react';
import {BlogContext} from '../../../context/BlogContext';
const Latestblog=()=>{
	const { blogs, loading, error } = useContext(BlogContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs: {error.message}</div>;

    return (

        <div className="latest-news pt-150 pb-150">
		<div className="container">

			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Our</span> News</h3>
						<p>Viblo.Earth817 is the source where we discuss thoughts on 尾田 栄一郎 One Piece. </p>
					</div>
				</div>
			</div>

			<div className="row">
			{blogs.slice(0,3).map((blog) => (
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
				<div className="col-lg-12 text-center">
					<a href="/news" className="boxed-btn">More News</a>
				</div>
			</div>
		</div>
	</div>

    )
}

export default Latestblog;