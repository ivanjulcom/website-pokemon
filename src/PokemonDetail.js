import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PokemonConsumer } from './Pokemon-Context';

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardTitle,
    CardText
} from "reactstrap";

class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon_details: [],
            name: ""
        };
    }

    componentDidMount() {
        let url = window.location.href;
        let url_split = url.split("/");
        let pokemon_name = url_split[5];

        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_name)
            .then(res => res.json())
            .then(pokemon_details => this.setState({
                pokemon_details,
                name: pokemon_name
            }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { name, pokemon_details } = this.state;

        function catchPokemon() {
            if (Math.random() >= 0.5) {
                return prompt("Yess berhasil, ayo beri nama pokemon ini!");
            } else {
                alert(" Gagal menangkap " + name + " ayo coba lagi!");
                return false;
            }
        }

        return (
            <PokemonConsumer>
                {({ updatepokemon }) => (
                    <Container fluid={true} className="py-5">
                        <Container id="pokemonDetail">
                            <Row className="justify-content-center mb-4">
                                <Col sm={{ size: 8 }} md={{ size: 6 }} lg={{ size: 4 }}>
                                    <h1 className="display-4 fw-bold text-light text-center text-capitalize">{name}</h1>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-4">
                                <Col sm={{ size: 8 }} md={{ size: 6 }} lg={{ size: 4 }}>
                                    <img draggable="false" className="w-100 rounded" src={"/pokemon/" + name + ".jpg"} title={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} alt={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} />
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-4">
                                <Col xs={{ size: 6 }} sm={{ size: 3 }} lg={{ size: 2 }}>
                                    <Button className="w-100 text-capitalize" color="primary" onClick={event => {
                                        let nickname = catchPokemon();
                                        if (nickname) {
                                            updatepokemon([{ name: name, nickname: nickname }]);
                                            alert("Berhasil simpan, silahkah lihat didaftar pokemon saya!");
                                        }
                                    }}>Tangkap Dia</Button>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col sm={{ size: 6 }} md={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 3 }} className="mb-4">
                                    <Card body>
                                        <CardTitle tag="h5">Stats</CardTitle>
                                        <CardText>
                                            <ul>
                                                {
                                                    pokemon_details.stats ?
                                                        pokemon_details.stats.map(item => {
                                                            const { stat } = item;
                                                            return (
                                                                <li className="text-capitalize" key={stat.name}>{stat.name}</li>
                                                            );
                                                        }) : null
                                                }
                                            </ul>
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col sm={{ size: 6 }} md={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 3 }} className="mb-4">
                                    <Card body>
                                        <CardTitle tag="h5">Types</CardTitle>
                                        <CardText>
                                            <ul>
                                                {
                                                    pokemon_details.types ?
                                                        pokemon_details.types.map(item => {
                                                            const { type } = item;
                                                            return (
                                                                <li className="text-capitalize" key={type.name}>{type.name}</li>
                                                            );
                                                        }) : null
                                                }
                                            </ul>
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col sm={{ size: 6 }} md={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 3 }} className="mb-4">
                                    <Card body>
                                        <CardTitle tag="h5">Held Items</CardTitle>
                                        <CardText>
                                            <ul>
                                                {
                                                    pokemon_details.held_items ?
                                                        pokemon_details.held_items.map(item_hi => {
                                                            const { item } = item_hi;
                                                            return (
                                                                <li className="text-capitalize" key={item.name}>{item.name}</li>
                                                            );
                                                        }) : null
                                                }
                                            </ul>
                                        </CardText>
                                    </Card>
                                </Col>
                                <Col sm={{ size: 6 }} md={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 3 }} className="mb-3">
                                    <Card body>
                                        <CardTitle tag="h5">Moves</CardTitle>
                                        <CardText>
                                            <ul>
                                                {
                                                    pokemon_details.moves ?
                                                        pokemon_details.moves.map(item => {
                                                            const { move } = item;
                                                            return (
                                                                <li className="text-capitalize" key={move.name}>{move.name}</li>
                                                            );
                                                        }) : null
                                                }
                                            </ul>
                                        </CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                )}
            </PokemonConsumer>
        );
    }
}

export default PokemonDetail;