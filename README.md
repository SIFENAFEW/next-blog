# TechInsights - Next.js Technology Blog

A modern, responsive technology blog built with Next.js 15, TailwindCSS, and featuring dynamic content with interactive commenting system.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15 and TailwindCSS
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Dynamic Routing**: Individual blog post pages with SEO-friendly URLs
- **Interactive Comments**: Add and view comments on blog posts
- **Search & Filter**: Find articles by keywords and categories
- **Technology Focus**: Curated content about AI, web development, and more
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS
- **Language**: JavaScript
- **Deployment**: Vercel
- **Icons**: Heroicons (SVG)

## 📁 Project Structure

```
next-blog/
├── app/
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.js          # Individual blog post page
│   │   └── page.js              # Blog listing page
│   ├── globals.css              # Global styles with TailwindCSS
│   ├── layout.js                # Root layout with metadata
│   └── page.js                  # Home page
├── components/
│   ├── CommentForm.js           # Interactive comment form
│   ├── Footer.js                # Site footer
│   ├── Header.js                # Navigation header
│   ├── Layout.js                # Page layout wrapper
│   └── PostCard.js              # Blog post card component
├── lib/
│   └── techData.js              # Mock data for blog posts and comments
└── public/                      # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/next-blog.git
cd next-blog
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features Overview

### Home Page
- Hero section with call-to-action
- Featured blog posts
- Technology categories
- Responsive design

### Blog Page
- Complete article listing
- Search functionality
- Category filtering
- Responsive grid layout

### Individual Post Pages
- Full article content
- Author information
- Interactive comments
- Related post suggestions
- SEO optimized

### Interactive Comments
- Form validation
- Real-time comment addition
- Responsive comment display
- User-friendly interface

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/next-blog)

## 📱 Responsive Design

The blog is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Customization

### Adding New Posts
Edit `lib/techData.js` to add new blog posts:

```javascript
{
  id: 7,
  userId: 1,
  title: "Your New Post Title",
  body: "Your post content...",
  category: "Your Category",
  tags: ["tag1", "tag2"],
  publishedAt: "2024-01-20T10:00:00Z",
  readTime: 5
}
```

### Styling
Customize the design by editing TailwindCSS classes in components or adding custom CSS in `app/globals.css`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**TechInsights Team**
- Website: [TechInsights Blog](https://your-deployed-url.vercel.app)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- Vercel for seamless deployment
- Heroicons for beautiful SVG icons

---

Built with ❤️ using Next.js and TailwindCSS
