import "../static/assets/css/blog.css";
import BlogPostLongFeatured from "./components/blogpost-feature-long";
import SectionFeaturedPosts from "./sections/featured-posts";
import BlogPost from "./components/blogpost";
import Navbar from "./sections/navbar";
import SocialLinks from "./sections/socialLinks";
import About from "./sections/about";
import BlogPostFeatured from "./components/blogpost-featured";


export default function Blogpage() {

  return (
    <div>
      <Navbar />

      <main>
        <BlogPostLongFeatured/>
        <h2 className="mb-3">Upcoming posts</h2>
        <SectionFeaturedPosts></SectionFeaturedPosts>

        <div className="row g-5">
          <div className="col-md-8">
            <BlogPostFeatured id={4} />
          </div>

          <div className="col-md-4">
            <div className="position-sticky" style={{ top: 2 + "rem" }}>
              <About></About>
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
