import React, {Component} from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col
} from 'reactstrap';
import Weather from './components/weather'

class App extends Component () {
  constructor(props){
    super(props)
    this.state = {
      weather: null,
      cityList: [],
      newCityName: ''
    }
  }

  getCityList = () => {
    fetch('/api/cities')
    .then(res => res.json())
    .then(res => {
      let cityList = res.map(r => r.city_name);
      this.setState({cityList})
    });
  };

  render(){
  return (
    <Container fluid className="centered">
      <Navbar dark color="dark">
        <NavbarBrand href="/">MyWeather</NavbarBrand>
      </Navbar>
      <Row>
        <Col>
        
        </Col>
      </Row>
      <Row>
        <Col>
        
        </Col>
      </Row>
      <Weather />
    </Container>
  );
}}

export default App;
