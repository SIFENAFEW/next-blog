// Mock technology blog posts data
export const techPosts = [
  {
    id: 1,
    userId: 1,
    title: "The Future of Artificial Intelligence in Web Development",
    body: "Artificial Intelligence is revolutionizing how we build and interact with web applications. From automated code generation to intelligent user interfaces, AI is transforming the development landscape. In this article, we explore the latest AI tools and frameworks that are making developers more productive and creating better user experiences. We'll dive into GitHub Copilot, ChatGPT for coding, and emerging AI-powered development platforms that are changing the game.",
    category: "AI & Machine Learning",
    tags: ["AI", "Web Development", "Automation", "GitHub Copilot"],
    publishedAt: "2024-01-15T10:00:00Z",
    readTime: 8
  },
  {
    id: 2,
    userId: 2,
    title: "React 18: New Features and Performance Improvements",
    body: "React 18 introduces several groundbreaking features including concurrent rendering, automatic batching, and new hooks. These improvements significantly enhance application performance and user experience. Learn how to leverage these new capabilities in your next React project and migrate from previous versions. We'll cover Suspense improvements, the new useId hook, and how concurrent features can make your apps more responsive.",
    category: "Frontend Development",
    tags: ["React", "JavaScript", "Performance", "Frontend"],
    publishedAt: "2024-01-12T14:30:00Z",
    readTime: 6
  },
  {
    id: 3,
    userId: 1,
    title: "Building Scalable APIs with Node.js and GraphQL",
    body: "GraphQL has become the go-to solution for building flexible and efficient APIs. Combined with Node.js, it provides a powerful stack for modern web applications. This comprehensive guide covers best practices, performance optimization, and real-world implementation strategies for GraphQL APIs. We'll explore schema design, resolver optimization, and how to handle complex queries efficiently.",
    category: "Backend Development",
    tags: ["GraphQL", "Node.js", "API", "Backend"],
    publishedAt: "2024-01-10T09:15:00Z",
    readTime: 10
  },
  {
    id: 4,
    userId: 3,
    title: "The Rise of Edge Computing and Its Impact on Web Performance",
    body: "Edge computing is bringing computation closer to users, dramatically reducing latency and improving web performance. Explore how CDNs, edge functions, and distributed architectures are reshaping the web. Learn about the tools and platforms that make edge computing accessible to developers, including Vercel Edge Functions, Cloudflare Workers, and AWS Lambda@Edge.",
    category: "Cloud Computing",
    tags: ["Edge Computing", "Performance", "CDN", "Cloud"],
    publishedAt: "2024-01-08T16:45:00Z",
    readTime: 7
  },
  {
    id: 5,
    userId: 2,
    title: "Cybersecurity Best Practices for Modern Web Applications",
    body: "As web applications become more complex, security threats continue to evolve. This article covers essential security practices including authentication, authorization, data encryption, and protection against common vulnerabilities like XSS and CSRF attacks. Keep your applications and users safe with these proven security strategies and learn about the latest security tools and frameworks.",
    category: "Security",
    tags: ["Security", "Authentication", "Web Security", "Best Practices"],
    publishedAt: "2024-01-05T11:20:00Z",
    readTime: 9
  },
  {
    id: 6,
    userId: 4,
    title: "Machine Learning in the Browser: TensorFlow.js and Beyond",
    body: "Machine learning is no longer confined to servers and cloud platforms. With TensorFlow.js and WebAssembly, we can now run sophisticated ML models directly in the browser. Discover how to implement real-time image recognition, natural language processing, and predictive analytics in web applications. We'll build practical examples and explore the performance implications of client-side ML.",
    category: "AI & Machine Learning",
    tags: ["Machine Learning", "TensorFlow.js", "Browser", "WebAssembly"],
    publishedAt: "2024-01-03T13:10:00Z",
    readTime: 12
  }
];

// Mock technology-focused comments
export const techComments = [
  {
    id: 1,
    postId: 1,
    name: "Sarah Chen",
    email: "sarah.chen@techdev.com",
    body: "Great insights on AI in web development! I've been experimenting with GitHub Copilot and it's amazing how much it speeds up development. Looking forward to more AI-powered tools."
  },
  {
    id: 2,
    postId: 1,
    name: "Mike Rodriguez",
    email: "mike.r@startup.io",
    body: "The section on automated testing with AI was particularly interesting. Have you tried any specific tools for AI-driven test generation?"
  },
  {
    id: 3,
    postId: 2,
    name: "Emily Johnson",
    email: "emily.j@webstudio.com",
    body: "React 18's concurrent features are game-changers! The automatic batching alone has improved our app's performance significantly. Thanks for the migration tips."
  },
  {
    id: 4,
    postId: 2,
    name: "David Kim",
    email: "david.kim@techcorp.com",
    body: "Excellent breakdown of the new hooks. The useId hook has been particularly useful for accessibility improvements in our forms."
  },
  {
    id: 5,
    postId: 3,
    name: "Lisa Wang",
    email: "lisa.wang@apidesign.com",
    body: "GraphQL has transformed our API development workflow. The type safety and query flexibility are unmatched. Great article on best practices!"
  }
];

// Function to get technology posts (simulating API call)
export const getTechPosts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(techPosts);
    }, 500); // Simulate network delay
  });
};

// Function to get a single post by ID
export const getTechPost = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = techPosts.find(p => p.id === parseInt(id));
      if (post) {
        resolve(post);
      } else {
        reject(new Error('Post not found'));
      }
    }, 300);
  });
};

// Function to get technology comments (simulating API call)
export const getTechComments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(techComments);
    }, 300); // Simulate network delay
  });
};

// Function to get comments for a specific post
export const getPostComments = async (postId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const postComments = techComments.filter(comment => comment.postId === parseInt(postId));
      resolve(postComments);
    }, 200);
  });
};
