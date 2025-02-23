import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const DeleteTeam = () => {
    const [teamName, setTeamName] = useState("");

    const handleDelete = async () => {
        try {
            await axios.post(`http://localhost:5000/api/football/delete/${teamName}`);
            alert("✅ Team deleted successfully!");
        } catch (error) {
            console.error(error);
            alert("❌ Error deleting team");
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Delete a Team</h2>
            <Form className="shadow-lg p-4 bg-white rounded">
                <Form.Group className="mb-3">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Team Name" onChange={(e) => setTeamName(e.target.value)} required />
                </Form.Group>
                <Button variant="danger" onClick={handleDelete} className="w-100">
                    Delete Team
                </Button>
            </Form>
        </Container>
    );
};

export default DeleteTeam;
