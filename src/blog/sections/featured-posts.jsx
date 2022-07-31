import BlogPostFeatured from "../components/blogpost-featured";
import getPost from "../helpers";

const SectionFeaturedPosts = () => {
  return (
    <div className="row mb-2">
      <div className="col-md-6">
        <BlogPostFeatured id={2} />
      </div>
      <div className="col-md-6">
        <BlogPostFeatured id={3} />
      </div>
    </div>
  );
};

export default SectionFeaturedPosts;
