import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Header from "./blog/sections/header";
import Footer from "./blog/sections/footer";
import Blogpage from './blog';
import BlogPost from './blog/components/blogpost';
import Post from "./blog/blogposts/learn_basic_github_commands";

function App() {
  return (
    <div className="App container">
      <HashRouter basename="/">
        <Header></Header>

        <Switch>
          <Route path={`/blogpost/:postId`}>
            <BlogPost />
          </Route>

          <Route path="/blogpost1">
            <Post></Post>
          </Route>

          <Route path="/">
            <Blogpage />
          </Route>
        </Switch>
        
        <Footer></Footer>
      </HashRouter>

    </div>
  );
}

export default App;
