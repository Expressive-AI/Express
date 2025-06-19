import { useState } from 'react';

interface BlogContent {
  featuredPost: any;
  blogPosts: any;
}

export const useBlogContent = () => {
  const [blogContent, setBlogContent] = useState<BlogContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadBlogContent = async () => {
    if (blogContent) return; // Already loaded
    
    setLoading(true);
    setError(null);
    
    try {
      // Dynamic import of the blog content
      const { default: content } = await import('../data/blogContent.json');
      setBlogContent(content);
    } catch (err) {
      setError('Failed to load blog content');
      console.error('Error loading blog content:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    blogContent,
    loading,
    error,
    loadBlogContent
  };
};
