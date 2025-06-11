// File: app/blog/page.js
export default function BlogIndex() {
  // In a real app, you would fetch this from a CMS or markdown files
  const posts = [
    {
      title: "Understanding EternalBlue Exploit",
      excerpt: "A deep dive into the EternalBlue vulnerability and how to defend against it.",
      date: "2023-10-15",
      slug: "eternalblue-exploit",
      tags: ["Exploit", "Windows", "Security"]
    },
    {
      title: "Blue Team Fundamentals",
      excerpt: "Essential concepts every aspiring blue teamer should know.",
      date: "2023-09-22",
      slug: "blue-team-fundamentals",
      tags: ["Blue Team", "Defense", "Security"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8 last:border-b-0">
            <h2 className="text-2xl font-bold mb-2">
              <a href={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </a>
            </h2>
            <div className="text-gray-500 mb-4">
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}