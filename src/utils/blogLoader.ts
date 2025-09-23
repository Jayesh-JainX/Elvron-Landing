import fm from 'front-matter';

type BlogMeta = {
  title: string;
  date: string;
  summary: string;
  image: string;
  slug: string;
};

export type Blog = BlogMeta & { content: string };

const blogFiles = import.meta.glob('../#', { as: 'raw', eager: true });

function parseBlog(raw: string): Blog {
  const { attributes, body } = fm<BlogMeta>(raw);
  return {
    title: attributes.title,
    date: attributes.date,
    summary: attributes.summary,
    image: attributes.image,
    slug: attributes.slug,
    content: body,
  };
}

export function getAllBlogs(): Blog[] {
  return Object.values(blogFiles)
    .map(parseBlog)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return getAllBlogs().find((b) => b.slug === slug);
}
