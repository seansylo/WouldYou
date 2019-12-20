import React from 'react';
import { Row, Col } from 'react-bootstrap';

class PageNoExist extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <h3>404 Error</h3>
                    <h2>Uh Oh.. Page doesn't exists.</h2>
                    <p>Please check the URL and try again.</p>
                </Col>
            </Row>
        )
    }
}

export default PageNoExist;