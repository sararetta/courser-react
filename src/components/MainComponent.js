import React, {useEffect } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders:()=>{
    dispatch(fetchLeaders())
  }
});
function Main({
  dishes,
  comments,
  promotions,
  leaders,
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  location,
  fetchLeaders
}) {
  console.log(comments);
  useEffect(() => {
    fetchDishes();
    fetchComments();
    fetchPromos();
    fetchLeaders()
  }, []);

  // const [dishes, setDishes] = useState(DISHES);
  // const [comments, setComments] = useState(COMMENTS);
  // const [promotions, setPromotions] = useState(PROMOTIONS);
  // const [leaders, setLeaders] = useState(LEADERS);

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={300}
        >
          <Switch location={location}>
            <Route
              path="/home"
              component={() => (
                <HomePage
                  leaders={leaders}
                  dishes={dishes}
                  promotions={promotions}
                />
              )}
            />
            <Route
              exact
              path="/menu"
              component={() => <Menu dishes={dishes} />}
            />
            <Route
              path="/menu/:dishId"
              // component={() => (
              //   <DishWithId
              //     dishes={dishes}
              //     comments={comments}
              //     addComment={addComment}
              //   />
              // )}
              render={({ match }) => (
                <DishWithId
                  id={match.params.dishId}
                  dishes={dishes}
                  comments={comments}
                  postComment={postComment}
                />
              )}
            />
            <Route exact path="/contactus" 
              component={() => <Contact 
                 />}
            />
            <Route
              exact
              path="/aboutus"
              component={() => <About
                 leaders={leaders.leaders}
                 isLoading={leaders.isLoading}
                 errMess={leaders.errMess} />}
            />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
const HomePage = ({ dishes, leaders, promotions }) => {
  // const [dishes, setDishes] = useState(DISHES);
  // const [promotions, setPromotions] = useState(PROMOTIONS);
  // const [leaders, setLeaders] = useState(LEADERS);
  return (
    <Home
      dish={dishes.dishes.filter((dish) => dish.featured)[0]}
      dishesLoading={dishes.isLoading}
      dishesErrMess={dishes.errMess}
      promotion={promotions.promotions.filter((promo) => promo.featured)[0]}
      promoLoading={promotions.isLoading}
      promoErrMess={promotions.errMess}
      leader={leaders.leaders.filter((leader) => leader.featured)[0]}
      leaderLoading={leaders.isLoading}
      leaderErrMess={leaders.errMess}
    />
  );
};

const DishWithId = ({ id, comments, dishes, postComment }) => {
  return (
    <DishDetail
      dish={dishes.dishes.filter((dish) => dish.id === parseInt(id, 10))[0]}
      isLoading={dishes.isLoading}
      errMess={dishes.errMess}
      comments={comments.comments.filter(
        (comment) => comment.dishId === parseInt(id, 10)
      )}
      commentsErrMess={comments.errMess}
      addComment={postComment}
    />
  );
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
