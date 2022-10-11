import React, { useState } from "react";
import {
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback
} from "reactstrap";
function CommentForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [touched, setTouched] = useState({
    name:false,
   
})
  function toggleModal() {
    setIsModalOpen((isModalOpen) => {
      return !isModalOpen;
    });
  }
  function handleSubmit(event) {
    console.log(
      "Current State is: " +
        JSON.stringify({ author: name, rating: rating, comment: comment })
    );
    alert(
      "Current State is: " +
        JSON.stringify({
          author: name,
          rating: rating,
          comment: comment,
        })
    );
    event.preventDefault();
  }
  const  handleBlur = (field) => (evt) => {
    setTouched(
        {
            ...touched,
            [field]: true
        }
    )
  
}
  function validate(name) {
    let errors=''
    if (touched.name &&name.length < 3) {
        errors= "Must be greater than 2 characters";
    } else if (touched.name && name.length > 15) {
        errors= "Must be 15 characters or less";
    };
    return errors
  }
  const errors =validate(name);
  return (
    <div>
      <FormGroup row>
        <Col md={{ size: 10 }}>
          <Button type="submit" color="" onClick={toggleModal}>
            Submit Comment
          </Button>
        </Col>
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}> Submit Comment</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Input type="number" id="rating" name="rating"
                value={rating} onChange={(e)=>{
                    setRating(e.target.value)
                }} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  valid={errors=== ''}
                  invalid={errors!== ''}
                  onBlur={handleBlur('name')}
                  onChange={(e)=>{
                    setName(e.target.value)
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
                  onChange={(e)=>{
                    setComment(e.target.value)
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

export default CommentForm;
