import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/blog/all');
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};
