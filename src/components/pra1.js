import React ,{useState}from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
function Contact(props) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [telnum, setTelnum] = useState('');
    const [email, setEmail ]= useState('');
    const [agree, setAgree] = useState('');
    const [contactType, setContactType] = useState('Tel.');
    const [message, setMessage] = useState('');
console.log(contactType);
const [touched, setTouched] = useState({
    firstname:false,
    lastname:false,
    telnum:false,
    email:false
})
  function  handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify({firstname:firstname,
        lastname:lastname,
        telnum:telnum,
        email:email,
        agree:agree,
        contactType:contactType,
        message:message
    }));
        alert('Current State is: ' + JSON.stringify({firstname:firstname,
            lastname:lastname,
            telnum:telnum,
            email:email,
            agree:agree,
            contactType:contactType,
            message:message
        }));
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

  function   validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (touched.firstname && firstname.length < 3){
            errors.firstname = 'First Name should be >= 3 characters';
        }
            
        else if (touched.firstname && firstname.length > 10){
            errors.firstname = 'First Name should be <= 10 characters';
        }
           

        else if (touched.lastname && lastname.length < 3){
            errors.lastname = 'Last Name should be >= 3 characters';
        }
          
        else if (touched.lastname && lastname.length > 10){
            errors.lastname = 'Last Name should be <= 10 characters';
        }
         

        const reg = /^\d+$/;
        if (touched.telnum && !reg.test(telnum)){
            errors.telnum = 'Tel. Number should contain only numbers';
        }
           

        if(touched.email && email.split('').filter(x => x === '@').length !== 1){
            errors.email = 'Email should contain a @';
        }
       

        return errors;
    }
    
    const errors = validate(firstname, lastname, telnum,email);
    return(
        <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={handleBlur('firstname')}
                                        onChange={(e)=>{
                                            setFirstname(e.target.value)
                                        }} />
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={handleBlur('lastname')}
                                        onChange={(e)=>{
                                            setLastname(e.target.value)
                                        }} />
                                         <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={handleBlur('telnum')}
                                        onChange={(e)=>{
                                            setTelnum(e.target.value)
                                        }}  />
                                           <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={handleBlur('email')}
                                        onChange={(e)=>{
                                            setEmail(e.target.value)
                                        }}  />
                                            <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={agree}
                                                onChange={(e)=>{
                                                    setAgree(e.target.checked)
                                                }}  /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={contactType}
                                            onChange={(e)=>{
                                                setContactType(e.target.value)
                                            }} >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={message}
                                        onChange={(e)=>{
                                            setMessage(e.target.value)
                                        }} ></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
               </div>
        </div>
    );
}

export default Contact;