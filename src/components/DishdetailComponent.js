import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import { baseUrl } from '../shared/baseUrl';
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
const RenderComments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((item) => {
        return (
          <ul className="list-unstyled">
            <li>{item.comment}</li>
            <li>
              -- {item.author} ,
              {new Intl.DateTimeFormat("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }).format(new Date(item.date))}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
const RenderDish = ({ dish }) => {
  return (
    <div>
      <Card>
        <CardImg width="100%" src={baseUrl +dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
const DishDetail = (props) => {
  console.log(props.comments);
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments
              comments={props.comments}
              addComment={props.addComment}
              dishId={props.dish.id}
            />
            <CommentForm
              addComment={props.addComment}
              dishId={props.dish.id}
              c={props.comments}
            />
          </div>
        </div>
      </div>
    );
  }
};

function CommentForm({ addComment, dishId, c }) {
  console.log(dishId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [touched, setTouched] = useState({
    name: false,
  });
  function toggleModal() {
    setIsModalOpen((isModalOpen) => {
      return !isModalOpen;
    });
  }
  function handleSubmit(event) {
    // console.log(
    //   "Current State is: " +
    //     JSON.stringify({ author: name, rating: rating, comment: comment })
    // );
    console.log(c);
    addComment(dishId, rating, name, comment);
    setIsModalOpen(false);
    console.log(c);
    event.preventDefault();
  }
  const handleBlur = (field) => (evt) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };
  function validate(name) {
    let errors = "";
    if (touched.name && name.length < 3) {
      errors = "Must be greater than 2 characters";
    } else if (touched.name && name.length > 15) {
      errors = "Must be 15 characters or less";
    }
    return errors;
  }
  const errors = validate(name);
  return (
    <div>
      <FormGroup row>
        <Col md={{ size: 10 }}>
          <Button type="submit" color="" onClick={toggleModal}>
            <span className="fa fa-pencil fa-lg"></span> Submit Comment
          </Button>
        </Col>
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}> Submit Comment</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Input
                  type="number"
                  id="rating"
                  name="rating"
                  value={rating}
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  valid={errors === ""}
                  invalid={errors !== ""}
                  onBlur={handleBlur("name")}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <FormFeedback>{errors}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message"> Comment</Label>

                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="12"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                ></Input>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                {" "}
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </FormGroup>
    </div>
  );
}

export default DishDetail;
