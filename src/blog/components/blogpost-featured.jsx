import getPost from "../helpers";

const BlogPostFeatured = props => {
  console.log(props.id) 
  const blogPost = getPost(props.id);
    
  return (
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">{blogPost.tag}</strong>
                <h3 className="mb-0">{blogPost.title}</h3>
                <div className="mb-1 text-muted">{blogPost.publishedDate}</div>
                <p className="card-text mb-auto">{blogPost.description}
                </p>
                <a href="#" className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </div>
            </div>
    );
}

export default BlogPostFeatured;