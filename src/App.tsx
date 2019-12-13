import React from "react";
import "./App.scss";
import Nav from "./components/nav/Nav";
import Post from "./components/post/Post";
import PostList from "./containers/postsList/PostList";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/:post" exact component={Post} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
