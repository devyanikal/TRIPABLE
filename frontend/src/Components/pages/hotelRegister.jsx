import React from "react";
import axios from 'axios';
import { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Register(){

    //form fields
    const [pk, setPk] = useState('')
    const [un, setUn] = useState('')
    const [landmark, setLandmark] = useState('')
    const [city, setCity ] = useState('')
    const [state, setState ] = useState('')
    const [country, setCountry ] = useState('')
    const [pincode, setPincode ] = useState('')
    const [prefix, setPrefix] = useState('')
    const [mobile, setMobile] = useState('')
    const [vi, setVi] = useState('')
    const [wi, setWi] = useState('')
    const [hi, setHi] = useState('')
    const [si, setSi] = useState('')
    
    const [name_type1, setName_type1]= useState('')
    const [cnt_type1, setCnt_type1]= useState('')
    const [price_type1, setPrice_type1]= useState('')
    const [extra_type1, setExtra_type1]= useState('')


    const [name_type2, setName_type2]= useState('')
    const [cnt_type2, setCnt_type2]= useState('')
    const [price_type2, setPrice_type2]= useState('')
    const [extra_type2, setExtra_type2]= useState('')


    const [name_type3, setName_type3]= useState('')
    const [cnt_type3, setCnt_type3]= useState('')
    const [price_type3, setPrice_type3]= useState('')
    const [extra_type3, setExtra_type3]= useState('')


    const [error, setError] = useState('')

    
    


    function submitLogin(e){
        e.preventDefault();
        console.log(e)
        var formData = new FormData();

        formData.append('id',pk)
        formData.append("username",un)
        formData.append("landmark",landmark)
        formData.append("city",city)
        formData.append("state",state)
        formData.append("country",country)
        formData.append("pincode",pincode)

        formData.append("prefix",prefix)
        formData.append("mobile",mobile)
        formData.append("visual_impaired",vi)
        formData.append("wheelchair_impaired",wi)
        formData.append("hearing_impaired",hi)
        formData.append("speech_impaired",si)

        formData.append("name_type1",name_type1)
        formData.append("cnt_type1",cnt_type1)
        formData.append("price_type1",price_type1)
        formData.append("extra_type1",extra_type1)

        formData.append("name_type2",name_type2)
        formData.append("cnt_type2",cnt_type2)
        formData.append("price_type2",price_type2)
        formData.append("extra_type2",extra_type2)
        
        formData.append("name_type3",name_type3)
        formData.append("cnt_type3",cnt_type3)
        formData.append("price_type3",price_type3)
        formData.append("extra_type3",extra_type3)

        console.log(pk)

        axios({
            method: 'post',
            url: `http://127.0.0.1:8000/hoteldata_api/${pk}/`,
            data: formData,
            headers:{'Content-type': 'multipart/form-data'}
          })
          .then(function (response) {
            console.log(response);
  
            if(response.data.error !== ''){
            setError(response.data.error)}
    
          })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error)
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } } )
          ;   
    
          setPk('')
          setUn('')
          setLandmark('')
          setCity('')
          setState('')
          setCountry('')
          setPincode('')
          setPrefix('')
          setMobile('')

          setVi('')
          setWi('')
          setHi('')
          setSi('')

          setName_type1('')
          setCnt_type1('')
          setPrice_type1('')
          setName_type2('')
          setCnt_type2('')
          setPrice_type2('')
          setName_type3('')
          setCnt_type3('')
          setPrice_type3('')

          setExtra_type1('')
          setExtra_type2('')
          setExtra_type3('')
    }


    return (
        <div>
            <Form onSubmit={e => submitLogin(e)}>

            <Row>
                <FloatingLabel controlId="floatingInput"  className="mb-3" >
                    <Form.Control type="text" placeholder="Hotel ID" value={pk}   onChange={e => setPk(e.target.value)}/>
                </FloatingLabel>
            </Row>
            <Row>
                <br/>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name ='username'
                    onChange={e => setUn(e.target.value)}
                    />
                </InputGroup>
            </Row>

            <Row>
                <Col xs= {6}>
                    <FloatingLabel controlId="floatingInput"  className="mb-3" >
                        <Form.Control type="text" placeholder="Landmark" value={landmark}  onChange={e => setLandmark(e.target.value)}/>
                    </FloatingLabel>
                </Col>

                <Col>
                    <FloatingLabel controlId="floatingInput"  className="mb-3">
                        <Form.Control type="text" placeholder="City" value={city}  onChange={e => setCity(e.target.value)}/>
                    </FloatingLabel>
                </Col>

                <Col>
                    <FloatingLabel controlId="floatingInput" className="mb-3">
                        <Form.Control type="text" placeholder="State" value={state}  onChange={e => setState(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                <Col>
                    <FloatingLabel controlId="floatingInput" className="mb-3">
                        <Form.Control type="text" placeholder="Country" value={country}  onChange={e => setCountry(e.target.value)}/>
                    </FloatingLabel>
                </Col>

                <Col xs = {3}>
                    <FloatingLabel controlId="floatingInput"  className="mb-3">
                        <Form.Control type="text" placeholder="Pincode" value={pincode}  onChange={e => setPincode(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                
                <Col xs={3}>
                    <FloatingLabel controlId="floatingInput"  className="mb-3">
                        <Form.Control type="text" placeholder="Prefix" value={prefix}  onChange={e => setPrefix(e.target.value)}/>
                    </FloatingLabel>
                </Col>

                <Col xs={3}>
                    <FloatingLabel controlId="floatingInput" className="mb-1">
                        <Form.Control type="text" placeholder="Mobile Number" value={mobile}  onChange={e => setMobile(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col className="mb-3">
                    <label className="checkbox-label">
                    <Form.Check type='checkbox' id='vi'   value={vi}   onChange={e => setVi(e.target.value)} /> Visualy Impaired</label>
                    <br/>
                    <label className="checkbox-label"> 
                    <Form.Check type='checkbox' id='wi' value={wi}  onChange={e => setWi(e.target.value)}/> Wheelchair User</label>
                    <br/>
                    <label className="checkbox-label">
                    <Form.Check type='checkbox' id='hi' value={hi}  onChange={e => setHi(e.target.value)}/> Hearing Impaired</label>
                    <br/>
                    <label className="checkbox-label">
                    <Form.Check type='checkbox' id='si' value={si}  onChange={e => setSi(e.target.value)}/> Speech Impaired</label>
                    <br/>
                </Col>
            </Row>


            <Row>
                <Col >
                    <FloatingLabel controlId="floatingInput" name="name_type1"  className="mb-3" >
                        <Form.Control type="text" placeholder="Type of Room" value={name_type1}  onChange={e => setName_type1(e.target.value)}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingPassword"  name="cnt_type1">
                        <Form.Control type="text" placeholder="Number of rooms" value={cnt_type1}  onChange={e => setCnt_type1(e.target.value)}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingPassword"  name="price_type1" >
                        <Form.Control type="text" placeholder="Price per night" value={price_type1}  onChange={e => setPrice_type1(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                <Col>
                <FloatingLabel controlId="floatingPassword"  name="extra_type1"  >
                        <Form.Control type="text" placeholder="Extra Facility" value={extra_type1}  onChange={e => setExtra_type1(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>
            <br/>

            <Row>
                <Col >
                    <FloatingLabel controlId="floatingInput" name="name_type2"  className="mb-3">
                        <Form.Control type="text" placeholder="Type of Room" value={name_type2}  onChange={e => setName_type2(e.target.value)}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingPassword"  name="cnt_type2" >
                        <Form.Control type="text" placeholder="Number of rooms" value={cnt_type2}  onChange={e => setCnt_type2(e.target.value)}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingPassword"  name="price_type2" >
                        <Form.Control type="text" placeholder="Price per night" value={price_type2}  onChange={e => setPrice_type2(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                <Col>
                <FloatingLabel controlId="floatingPassword"  name="extra_type2" >
                        <Form.Control type="text" placeholder="Extra Facility" value={extra_type2}  onChange={e => setExtra_type2(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>
            <br/>

            <Row>
                <Col >
                    <FloatingLabel controlId="floatingInput" name="name_type3"  className="mb-3">
                        <Form.Control type="text" placeholder="Type of Room" value={name_type3}  onChange={e => setName_type3(e.target.value)}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingPassword"  name="cnt_type3" >
                        <Form.Control type="text" placeholder="Number of rooms" value={cnt_type3}  onChange={e => setCnt_type3(e.target.value)}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel controlId="floatingPassword"  name="price_type3">
                        <Form.Control type="text" placeholder="Price per night" value={price_type3}  onChange={e => setPrice_type3(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
                <Col>
                    <FloatingLabel controlId="floatingPassword"  name="extra_type3">
                        <Form.Control type="text" placeholder="Extra Facility" value={extra_type3}  onChange={e => setExtra_type3(e.target.value)}/>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row>
            <Button type="submit">Submit form</Button>
            </Row>

            </Form>
        </div>
    )
}

export default Register;