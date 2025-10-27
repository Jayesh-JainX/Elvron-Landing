import { Link } from "react-router-dom";
import { getAllBlogs } from "@/utils/blogLoader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Helmet } from "react-helmet";

export default function LatestBlogs() {
  const blogs = getAllBlogs().slice(0, 10);
  return (
    <>
      <Helmet>
        <title>Elvron Blog – Latest Updates</title>
        <meta
          name="description"
          content="Stay up to date with the latest Elvron news, product updates, and community stories."
        />
      </Helmet>
      <div className="mb-16">
        <h1 className="text-2xl font-bold mb-8">On-site Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-[100]">
          {blogs.map((blog) => (
            <Card
              key={blog.slug}
              className="group hover:border-[#0361DA]/50 transition-colors"
            >
              <CardHeader>
                <img
                  src={blog.image}
                  alt={`Blog cover: ${blog.title}`}
                  className="w-full h-40 object-cover object-center rounded-lg mb-3"
                  loading="lazy"
                />
                <CardTitle className="text-lg mb-1 group-hover:text-[#0361DA] transition-colors">
                  {blog.title}
                </CardTitle>
                <CardDescription className="mb-2 text-xs text-muted-foreground">
                  {new Date(blog.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {blog.summary}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between group/link"
                >
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="group/link flex items-center gap-2"
                  >
                    <span className="font-medium text-[#0361DA]">
                      Read More
                    </span>
                    <svg
                      className="h-4 w-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
