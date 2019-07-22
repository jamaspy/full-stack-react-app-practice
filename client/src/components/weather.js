import React from 'react';
import {Row, Col, Table} from 'reactstrap';

const Weather = (props) => {
const { data } = props;

    if(!data)
        return <div><p>BROKEN</p></div>
    return(
        <Row className="weather">
            <Col sm="12 md={{size: 4, offset: 4">
                <h2>SOMETHING</h2>
                <img />
                <span></span>
                <span></span>
            <Table>
                <tbody>

                </tbody>
            </Table>    
            </Col>
        </Row>
    );
};
export default Weather