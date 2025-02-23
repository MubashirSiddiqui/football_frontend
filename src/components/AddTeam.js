import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const AddTeam = () => {
    const [team, setTeam] = useState({
        team: "",
        gamesPlayed: "",
        win: "",
        draw: "",
        loss: "",
        goalsFor: "",
        goalsAgainst: "",
        points: "",
        year: ""
    });

    const handleChange = (e) => {
        setTeam({ ...team, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/football/add", team);
            alert("✅ Team added successfully!");
        } catch (error) {
            console.error(error);
            alert("❌ Error adding team");
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Add a New Team</h2>
            <Form onSubmit={handleSubmit} className="shadow-lg p-4 bg-white rounded">
                {Object.keys(team).map((key) => (
                    <Form.Group className="mb-3" key={key}>
                        <Form.Label>{key.toUpperCase()}</Form.Label>
                        <Form.Control type="text" name={key} value={team[key]} onChange={handleChange} required />
                    </Form.Group>
                ))}
                <Button variant="primary" type="submit" className="w-100">
                    Add Team
                </Button>
            </Form>
        </Container>
    );
};

export default AddTeam;
