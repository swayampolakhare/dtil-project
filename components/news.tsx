import React from 'react';
import Link from 'next/link';


interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
}

const News: React.FC = () => {
    // Example blog posts data
    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "First Blog Post",
            excerpt: "This is a short excerpt from the first blog post...",
            date: "2024-01-20"
        },
        {
            id: 2,
            title: "Second Blog Post",
            excerpt: "This is a short excerpt from the second blog post...",
            date: "2024-01-21"
        },
        // Add more blog posts as needed
    ];

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8">Latest News</h1>
            <div className="grid gap-6">
                {blogPosts.map((post) => (
                    <article key={post.id} className="border rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{post.date}</span>
                            <Link href={`/blog/${post.id}`}>
                                <span className="text-blue-600 hover:text-blue-800">
                                    Read more →
                                </span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default News;