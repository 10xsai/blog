import posts from "./meta.json";

function getPost(id) {
    const filteredPosts = posts.filter(post => post.id===id);
    if (filteredPosts.length<1) {
      console.log("Post id-" + id + "not found");
    }
    else if (filteredPosts.length>1) {
      console.log("Expected 1 but found morethan 1 post");
    }
    else {
      return filteredPosts[0];
    }
  }

export default getPost; 