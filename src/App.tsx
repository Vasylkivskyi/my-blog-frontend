import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Nav from './components/nav/Nav';
import Post from './containers/post/Post';
import PostList from './containers/postsList/PostList';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Register from './containers/register/Register';
import AdminHomepage from './containers/Admin/adminHomepage/AdminHomepage';

const App: React.FC = () => (
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
          <Route path="/register" exact component={Register} />
          <Route path="/admin" exact component={AdminHomepage} />
          <Route path="/:post" component={Post} />
        </Switch>
      </ScrollToTop>
      <Footer />
    </div>
  </Router>
);

export default App;
