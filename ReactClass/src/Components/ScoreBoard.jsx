import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";

export default function ScoreBoard() {

    const [scoreA, setScoreA] = useState(1);
    const [scoreB, setScoreB] = useState(1);
    const [round, setRound] = useState(1);


    const incrementScoreA = () => {
        setScoreA(scoreA + 1);
    };

    const decrementScoreA = () => {
        if (scoreA > 0) {
            setScoreA(scoreA - 1);
        }
    };

    const incrementScoreB = () => {
        setScoreB(scoreB + 1);
    };

    const decrementScoreB = () => {
        if (scoreB > 0) {
            setScoreB(scoreB - 1);
        }
    };

    const incrementRound = () => {
        setRound(round + 1);
    };

    const decrementRound = () => {
        if (round > 1) {
            setRound(round - 1);
        }
    };

    return (
        <>
        <Container>
            <Row>
                <Col>
                    <div>
                        <h1>Team A</h1>
                        <div className="Score">
                            <p>{scoreA}</p>
                        </div>
                        <div className="buttonContainer">
                            <Button  className='button' variant="primary" onClick={incrementScoreA}>+</Button>
                            <Button className='button' variant="success" onClick={decrementScoreA}>-</Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="round">
                        <div className="header">
                            <p>Round</p>
                        </div>
                        <div className="roundContainer">
                            <p>{round}</p>
                        </div>
                        <div className="buttonContainer">
                            <Button className='button' variant="primary" onClick={incrementRound}>+</Button>
                            <Button className='button' variant="success" onClick={decrementRound}>-</Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>Team B</h1>
                        <div className="Score">
                            <p>{scoreB}</p>
                        </div>
                        <div className="buttonContainer">
                            <Button className='button' variant="primary" onClick={incrementScoreB}>+</Button>
                            <Button className='button' variant="success" onClick={decrementScoreB}>-</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
