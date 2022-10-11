import React, { useState } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "..//shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

function Main({dishes,comments,promotions,leaders}) {
  // const [dishes, setDishes] = useState(DISHES);
  // const [comments, setComments] = useState(COMMENTS);
  // const [promotions, setPromotions] = useState(PROMOTIONS);
  // const [leaders, setLeaders] = useState(LEADERS);
  
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Route
          exact
          path="/aboutus"
          component={() => <About leaders={leaders} />}
        />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
const HomePage = () => {
  const [dishes, setDishes] = useState(DISHES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [leaders, setLeaders] = useState(LEADERS);
  return (
    <Home
      dish={dishes.filter((dish) => dish.featured)[0]}
      promotion={promotions.filter((promo) => promo.featured)[0]}
      leader={leaders.filter((leader) => leader.featured)[0]}
    />
  );
};

const DishWithId = ({ match }) => {
  const [dishes, setDishes] = useState(DISHES);
  const [comments, setComments] = useState(COMMENTS);
  return (
    <DishDetail
      dish={
        dishes.filter(
          (dish) => dish.id === parseInt(match.params.dishId, 10)
        )[0]
      }
      comments={comments.filter(
        (comment) => comment.dishId === parseInt(match.params.dishId, 10)
      )}
    />
  );
};
export default  withRouter(connect(mapStateToProps)(Main));
