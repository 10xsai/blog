import { Link } from "react-router-dom";
import getPost from "../helpers";

const BlogPostLongFeatured = () => {
    
  const data = getPost(1);
  
  return (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">{data.title}</h1>
            <p className="lead my-3">{data.description}</p>
            <p className="lead mb-0">
              <Link to="blogpost1" className="text-white fw-bold">
                Continue reading...
              </Link>
            </p>
          </div>
        </div>
    )
}

export default BlogPostLongFeatured;