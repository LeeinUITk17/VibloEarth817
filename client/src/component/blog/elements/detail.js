import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BlogContext } from '../../../context/BlogContext';
import { UserContext } from '../../../context/UserContext';

const Detail = () => {
  const { id,userid } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState('');
  const { blogs } = useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [isFollowing, setIsFollowing] = useState(false);
  // const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // const fetchUserData = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:8000/api/profile/inf/${user._id}`);
    //     console.log(response.data.followers);
    //     if (response.data) {
    //       setFollowers(response.data.followers);
    //     } else {
    //       console.error('Failed to fetch user data:');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //   }
    // };
  
    // if (user) {
    //   fetchUserData();
    // }

    const fetchBlogDetail = async () => {
     
      try {
        if(userid==='undefined'){
          window.location.href = '/login';
        }
        const response = await axios.get(`http://localhost:8000/api/blog/detail/${id}`);
        const followers = await axios.get(`http://localhost:8000/api/profile/inf/${userid}`);
        setBlog(response.data);
         if(followers.data.followers.includes(response.data.author._id)){
          setIsFollowing(true);
         }
         else{
          setIsFollowing(false);
         }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    // const checkFollowingStatus =()=>{
    //     if(followers){
    //       console.log(followers.includes(blog.author._id));
    //     }
    // }

  fetchBlogDetail();
  // checkFollowingStatus();
  }, [id,userid]);

 



  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      name: user ? user.name : 'Guest',
      avatar: user
        ? user.avatar
        : 'https://res.cloudinary.com/dbonwxmgl/image/upload/v1717061277/xesgw0ilky3wbrj9xixd.jpg',
      newid: blog.data._id,
      comment: comment,
    };

    try {
      const response = await axios.post(`http://localhost:8000/api/blog/comment`, newComment);
      setBlog((prevBlog) => ({
        ...prevBlog,
        comments: [...prevBlog.comments, response.data],
      }));
      setComment('');
    } catch (error) {
      setError(error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/api/blog/like/${user._id}/${id}`);
      setBlog((prevBlog) => ({
        ...prevBlog,
        data: {
          ...prevBlog.data,
          upvotes: response.data,
        },
      }));
	  window.location.reload();
    } catch (error) {
      setError(error);
    }
  };

  const handleDislike = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/api/blog/dislike/${user._id}/${id}`);
      setBlog((prevBlog) => ({
        ...prevBlog,
        data: {
          ...prevBlog.data,
          downvotes: response.data,
        },
      }));
	  window.location.reload();
    } catch (error) {
      setError(error);
    }
  };

  const handleUnlike = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/blog/unlike/${user._id}/${id}`);
      setBlog((prevBlog) => ({
        ...prevBlog,
        data: {
          ...prevBlog.data,
          upvotes: response.data,
        },
      }));
	  window.location.reload();
    } catch (error) {
      setError(error);
    }
  };

  const handleUndislike = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/blog/undislike/${user._id}/${id}`);
      setBlog((prevBlog) => ({
        ...prevBlog,
        data: {
          ...prevBlog.data,
          downvotes: response.data,
        },
      }));
	  window.location.reload();
    } catch (error) {
      setError(error);
    }
  };

  const handleFollow = async () => {
    try {
     const response= await axios.post(`http://localhost:8000/api/profile/addFollower/${user._id}/${blog.author._id}`);
      await axios.post(`http://localhost:8000/api/profile/addFollowing/${blog.author._id}/${user._id}`);
     if(response.data===true){
      setIsFollowing(true);
     }
    //  alert(response.data);

    } catch (error) {
      setError(error);
    }
  };

  const handleUnfollow = async () => {
    try {
      const response= await axios.delete(`http://localhost:8000/api/profile/removeFollower/${user._id}/${blog.author._id}`);
      await axios.delete(`http://localhost:8000/api/profile/removeFollowing/${blog.author._id}/${user._id}`);
      if(response.data===true){
        setIsFollowing(false);
       }
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
                <div
                  className="single-artcile-bg"
                  style={{ backgroundImage: `url(${blog.data.avatar})` }}
                ></div>
                <p className="blog-meta">
                  <span className="author">
                    <i className="fas fa-user"></i> {blog.author.name}
                  </span>
                  <span className="date">
                    <i className="fas fa-calendar"></i>{' '}
                    {new Date(blog.data.createdAt).toISOString().split('T')[0]}
                  </span>
                </p>
                <h2>{blog.data.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: blog.data.content }} />
              </div>

              <div className="like-dislike-buttons">
                <button onClick={handleLike} disabled={!user} style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33' }}>
                  Like ({blog.data.upvotes.length})
                </button>
                <button onClick={handleDislike} disabled={!user} style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33' }}>
                  Dislike ({blog.data.downvotes.length})
                </button>
                <button onClick={handleUnlike} disabled={!user} style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33' }}>
                  Remove Like
                </button>
                <button onClick={handleUndislike} disabled={!user} style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33' }}>
                  Remove Dislike
                </button>
              </div>

              <div className="comments-list-wrap">
                <h3 className="comment-count-title">
                  Comment: {blog.comments?.length}
                </h3>
                <div className="comment-list">
                  {blog.comments.map((comment) => (
                    <div className="single-comment-body" key={comment._id}>
                      <div className="comment-user-avater">
                        <img src={comment.avatar} alt="author_avatar" />
                      </div>
                      <div className="comment-text-body">
                        <h4>
                          {comment.name}{' '}
                          <span className="comment-date">
                            {new Date(comment.createdAt).toISOString().split('T')[0]}
                          </span>{' '}
                        </h4>
                        <p>{comment.comment}.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {user ? (
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
              ) : (
                <div className="comment-template">
                  <h4>Leave a comment</h4>
                  <p>
                    <a href="/login">
                      If you'd like to leave a comment, please log in to access this feature.
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar-section">
              <div className="sidebar-widget card border-1 mb-3">
                <img src={blog.author.avatar} alt="author image" className="img-fluid" />
                <div className="card-body p-4 text-center">
                  <h5 className="mb-0 mt-4">{blog.author.name}</h5>
                  <p>Enjoy it!</p>
                </div>
                {user ? (
                  <div>
                  {!isFollowing && (
                    <button onClick={handleFollow} disabled={!user} style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33' }}>
                      Follow
                    </button>
                     )}
                      {isFollowing && (
                    <button onClick={handleUnfollow} disabled={!user} style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33' }}>
                      Unfollow
                    </button>
                      )}
                  </div>
                ) : (
                  <div>
                    <button onClick={handleFollow} disabled style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33' }}>
                      Follow
                    </button>
                    <button onClick={handleUnfollow} disabled style={{ fontFamily: 'Inter, sans-serif !important', backgroundColor: 'FFAC33' }}>
                      Unfollow
                    </button>
                  </div>
                )}
              </div>
              <div className="recent-posts">
                <h4>Recent Posts</h4>
                <ul>
                  {blogs.slice(0, 5).map((blog) => (
                    <li key={blog._id}>
                      <a href={`/news/detail/${blog._id}/${user._id}`}>{blog.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tag-section">
                <h4>Tags</h4>
                <ul>
                  <li>
                    <a href="/news">Marine</a>
                  </li>
                  <li>
                    <a href="/news">Pirates</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
