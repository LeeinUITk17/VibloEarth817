import React, { useState, useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {BlogContext} from '../../../context/BlogContext';
import { UserContext } from '../../../context/UserContext';
const Detail = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [comment, setComment] = useState('');
	
	const { blogs } = useContext(BlogContext);
	const { user } = useContext(UserContext);
  
	useEffect(() => {
	  const fetchBlogDetail = async () => {
		try {
		  const response = await axios.get(`http://localhost:8000/api/blog/detail/${id}`);
		  setBlog(response.data);
		  setLoading(false);
		} catch (error) {
		  setError(error);
		  setLoading(false);
		}
	  };
  
	  fetchBlogDetail();
	}, [id]);
  
	const handleCommentSubmit = async (e) => {
	  e.preventDefault();
	  const newComment = {
		name: user ? user.name : 'Guest',
		avatar: user ? user.avatar : 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1717061277/xesgw0ilky3wbrj9xixd.jpg',
		newid: blog.data._id,
		comment: comment
	  };
  
	  try {
		const response = await axios.post(`http://localhost:8000/api/blog/comment`, newComment);
		setBlog((prevBlog) => ({
		  ...prevBlog,
		  comments: [...prevBlog.comments, response.data]
		}));
		setComment('');
	  } catch (error) {
		setError(error);
	  }
	};
  
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error loading blog details: {error.message}</div>;

	

    return (
        <div className="mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<div className="single-article-section">
						<div className="single-article-text">
							<div className="single-artcile-bg" style={{backgroundImage: `url(${blog.data.avatar})`}}></div>
							<p className="blog-meta">
								<span className="author"><i className="fas fa-user"></i> {blog.author.name}</span>
								<span className="date"><i className="fas fa-calendar"></i> {new Date(blog.data.createdAt).toISOString().split('T')[0]}</span>
							</p>
							<h2>{blog.data.name}</h2>
							<div dangerouslySetInnerHTML={{ __html: blog.data.content }} />
						</div>

                        <div className="comments-list-wrap">
        <h3 className="comment-count-title">Comment: {blog.comments?.length}</h3>
        <div className="comment-list">
			{blog.comments.map((comment) => (
				<div className="single-comment-body">
                <div className="comment-user-avater">
				<img src={comment.avatar} alt="author_avatar" />
                </div>
                <div className="comment-text-body">
                    <h4>{comment.name} <span className="comment-date">{new Date(comment.createdAt).toISOString().split('T')[0]}</span> </h4>
                    <p>{comment.comment}.</p>
                </div>
            </div>
              ))}
        </div>
    </div>

	<div className="comment-template">
                <h4>Leave a comment</h4>
                <p>If you have a comment, don't hesitate to send us your opinion.</p>
                <form onSubmit={handleCommentSubmit}>
                 <p>
				 <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
				 </p>
                 <p>
				 <input type="submit" value="Submit" />
				 </p>
                </form>
              </div>
                        
				</div>
			</div>
            <div className="col-lg-4">
					<div className="sidebar-section">
						<div className="recent-posts">
							<h4>Recent Posts</h4>
							<ul>
							{blogs.slice(0, 5).map((blog) => (
								<li><a href={`/news/detail/${blog._id}`}>{blog.name}</a></li>
							))}
								</ul>
						</div>
						<div className="tag-section">
							<h4>Tags</h4>
							<ul>
								<li><a href="single-news.html">Marine</a></li>
								<li><a href="single-news.html">Pirates</a></li>
							</ul>
						</div>
					</div>
				</div>
		</div>
	</div>
    </div>
    )
}

export default Detail;