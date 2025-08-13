'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import CommentForm from '../../../components/CommentForm';
import { getTechPost, getPostComments } from '../../../lib/techData';

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postData, commentsData] = await Promise.all([
          getTechPost(params.id),
          getPostComments(params.id)
        ]);
        setPost(postData);
        setComments(commentsData);
      } catch (err) {
        setError('Post not found');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  const handleAddComment = (commentData) => {
    setComments(prev => [...prev, commentData]);
    setShowCommentForm(false);
  };

  const getAuthorName = (userId) => {
    const authors = {
      1: "Alex Thompson",
      2: "Sarah Chen", 
      3: "Mike Rodriguez",
      4: "Emily Johnson"
    };
    return authors[userId] || `Author ${userId}`;
  };

  const getAuthorInitials = (userId) => {
    const initials = {
      1: "AT",
      2: "SC",
      3: "MR", 
      4: "EJ"
    };
    return initials[userId] || "AU";
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="mt-2 text-lg font-medium text-gray-900">Article not found</h2>
            <p className="mt-1 text-sm text-gray-500">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/blog" 
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title={`${post.title} - TechInsights`}
      description={post.body.substring(0, 160) + '...'}
    >
      <article className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {getAuthorInitials(post.userId)}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{getAuthorName(post.userId)}</div>
                  <div className="text-gray-500">Author</div>
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-900">{post.readTime} min read</div>
                <div className="text-gray-500">Reading time</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-900">
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <div className="text-gray-500">Published</div>
            </div>
          </div>

          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.body}
          </div>
        </div>

        {/* Comments Section */}
        <section className="border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Comments ({comments.length})
            </h2>
            <button
              onClick={() => setShowCommentForm(!showCommentForm)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              {showCommentForm ? 'Cancel' : 'Add Comment'}
            </button>
          </div>

          {showCommentForm && (
            <div className="mb-8">
              <CommentForm
                onSubmit={handleAddComment}
                onCancel={() => setShowCommentForm(false)}
                postId={post.id}
              />
            </div>
          )}

          {comments.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{comment.name}</h3>
                    <span className="text-sm text-gray-500">{comment.email}</span>
                  </div>
                  <p className="text-gray-700">{comment.body}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors inline-block"
          >
            ← Back to All Articles
          </Link>
        </div>
      </article>
    </Layout>
  );
}
