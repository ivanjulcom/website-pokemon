import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardFooter,
} from "reactstrap";

class MyPokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        };
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=10")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.results.map(data => (
                {
                    name: `${data.name}`,
                    url: `${data.url}`,
                    thumbnail: `${data.name}.jpg`

                }
            )))
            .then(pokemon => this.setState({ pokemon }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { pokemon } = this.state;
        console.log(pokemon)
        return (
            <Container fluid={true} className="py-5">
                <Container className="pokemonList">
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                            <h1 className="text-light text-center">Daftar Pokemon</h1>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        {
                            pokemon.length > 0 ? pokemon.map(item => {
                                const { name, thumbnail } = item;
                                let urlDetail = "/detail/" + name;
                                return (
                                    <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 4 }} xl={{ size: 3 }} className="mb-2">
                                        <Card className="h-100">
                                            <CardImg draggable="false" top src={"pokemon/" + thumbnail} title={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} alt={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} className="h-100 p-4" />
                                            <CardBody>
                                                <CardTitle className="text-capitalize text-center" tag="h4">{name}</CardTitle>
                                            </CardBody>
                                            <CardFooter>
                                                <NavLink key={name} to={urlDetail}>
                                                    <Button outline className="w-100" color="primary">Lihat Detail</Button>
                                                </NavLink>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                );
                            }) : null
                        }
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default MyPokemonList;