import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Button,
} from "reactstrap";

class Home extends Component {
    render() {
        return (
            <Container fluid={true} className="py-5">
                <Container>
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                            <img draggable="false" src="/render-pokemon-png-1.png" className="w-75" alt={"Logo " + process.env.REACT_APP_TITLE} />
                        </Col>
                    </Row>
                    <Row className="my-5 text-center">
                        <Col>
                            <div>
                                <h1 className="display-4 text-light">Selamat Datang Ditaman Pokemon</h1>
                                <h2 className="lead text-light">
                                    Tangkap Dia<br />
                                    Koleksi Pokemon untuk Bersenang-senang - Lihat didaftar Pokemon
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-5 justify-content-center">
                        <Col md={{ size: 3 }} xl={{ size: 4 }}></Col>
                        <Col>
                            <Link to="/pokemon-list">
                                <Button color="primary" className="w-100">Mulai</Button>
                            </Link>
                        </Col>
                        <Col md={{ size: 3 }} xl={{ size: 4 }}></Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Home;