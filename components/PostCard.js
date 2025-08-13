import Link from 'next/link';
import { useState } from 'react';

// Helper functions for author information
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

const getReadTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(' ').length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const PostCard = ({ post, showComments = false, onToggleComments, comments = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const postComments = comments.filter(comment => comment.postId === post.id);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h2>
        
        <div className="text-gray-600 mb-4">
          {isExpanded ? (
            <p>{post.body}</p>
          ) : (
            <p className="line-clamp-3">{post.body}</p>
          )}
          {post.body.length > 150 && (
            <button
              onClick={toggleExpanded}
              className="text-blue-600 hover:text-blue-800 text-sm mt-2 font-medium"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              {getAuthorInitials(post.userId)}
            </div>
            <span>{getAuthorName(post.userId)}</span>
          </div>
          <span className="text-xs">{getReadTime(post.body)} min read</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <button
            onClick={() => onToggleComments && onToggleComments(post.id)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{showComments ? 'Hide' : 'Show'} Comments ({postComments.length})</span>
          </button>
          
          <Link
            href={`/blog/${post.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            Read Full Post
          </Link>
        </div>

        {showComments && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Comments</h3>
            {postComments.length === 0 ? (
              <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
            ) : (
              <div className="space-y-3">
                {postComments.map((comment) => (
                  <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{comment.name}</h4>
                      <span className="text-xs text-gray-500">{comment.email}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{comment.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default PostCard;
