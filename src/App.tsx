import React from "react";
import "./styles/App.scss";
import Nav from "./components/nav/Nav";
import Post from "./containers/post/Post";
import PostList from "./containers/postsList/PostList";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { Helmet } from "react-helmet";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Inside the flow - a blog by Pavlo Vasylkivskyi</title>
          <meta
            name="description"
            content="Personal blog by Pavlo Vasylkivskyi. This is where I write down my thoughts."
          />
        </Helmet>
        <Nav />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/:post" exact component={Post} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
