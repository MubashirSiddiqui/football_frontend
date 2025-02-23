import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const UpdateTeam = () => {
    const [teamName, setTeamName] = useState("");
    const [updateData, setUpdateData] = useState({});

    const handleChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/api/football/update/${teamName}`, updateData);
            alert("✅ Team updated successfully!");
        } catch (error) {
            console.error(error);
            alert("❌ Error updating team");
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Update a Team</h2>
            <Form className="shadow-lg p-4 bg-white rounded" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Team Name" onChange={(e) => setTeamName(e.target.value)} required />
                </Form.Group>
                {["gamesPlayed", "win", "draw", "loss", "goalsFor", "goalsAgainst", "points", "year"].map((key) => (
                    <Form.Group className="mb-3" key={key}>
                        <Form.Label>{key.toUpperCase()}</Form.Label>
                        <Form.Control type="text" name={key} onChange={handleChange} />
                    </Form.Group>
                ))}
                <Button variant="success" type="submit" className="w-100">
                    Update Team
                </Button>
            </Form>
        </Container>
    );
};

export default UpdateTeam;
