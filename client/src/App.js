import React, {Component} from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Jumbotron,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup
} from 'reactstrap';
import Weather from './components/weather'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      weather: null,
      cityList: [],
      newCityName: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({newCityName: event.target.value})
  }

  handleAddCity = () => {
    fetch('/api/cities', {
      method: 'post',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ city: this.state.newCityName })
    })
    .then(res => res.json())
    .then(res => {
      this.getCityList();
      this.setState({newCityName: ''})
    })

  }

  getCityList = () => {
    fetch(`/api/cities`)
    .then(res => res.json())
    .then(res => {
      let cityList = res.map(r => r.city_name);
      this.setState({cityList})
    });
  };

  getWeather = (city) => {
    fetch(`/api/weather/${city}`)
    .then(res => res.json)
    .then(weather => {
      this.setState({ weather })
    })
  }

  handleInputChange = (event) => {
    this.getWeather(event.target.value);
  }

  componentDidMount() {
    this.getCityList()
  }

  render(){
  return (
    <Container fluid className="centered">
      <Navbar dark color="dark">
        <NavbarBrand href="/">MyWeather</NavbarBrand>
      </Navbar>
      <Row>
        <Col>
        <Jumbotron>
          <h1 className="display-3">My Weather App</h1>
          <p className="lead">The Current Weather For Your Favourite Cities</p>
          <InputGroup className="input-group">
          <Input
            placeholder="New City Name"
            value={this.state.newCityName}
            onChange={this.handleInputChange}
          />
          <InputGroupAddon addonType="append">
          <Button color="dark" onClick={this.handleAddCity}>Add City</Button>
          </InputGroupAddon>
        </InputGroup>
        </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
        <h1 className='disply-5'>Current Weather</h1>
        <FormGroup>
          <Input type="select" onChange={this.handleChangeCity}>
            { this.state.cityList.length === 0 && <option>No Cities Added Yet</option> }
            { this.state.cityList.length > 0 && <option>Select A City</option> }
            {/* SAVE THIS LINE OF CODE SOMEWHERE IT IS HANDY FOR MAPPING LIST */}
            { this.state.cityList.map((city, index) => <option key={index}>{ city }</option>) }
          </Input>
        </FormGroup>
        </Col>
      </Row>
      <Weather />
    </Container>
  );
}}

export default App;
