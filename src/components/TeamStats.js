import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Table } from "react-bootstrap";

const TeamStats = () => {
    const [year, setYear] = useState("");
    const [stats, setStats] = useState(null);

    const fetchStats = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/football/stats/${year}`);
            setStats(response.data);
        } catch (error) {
            console.error(error);
            alert("❌ Error fetching stats");
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Team Stats</h2>
            <Form className="shadow-lg p-4 bg-white rounded">
                <Form.Group className="mb-3">
                    <Form.Label>Enter Year</Form.Label>
                    <Form.Control type="text" onChange={(e) => setYear(e.target.value)} required />
                </Form.Group>
                <Button variant="info" onClick={fetchStats} className="w-100">
                    Get Stats
                </Button>
            </Form>
            {stats && (
                <Table striped bordered hover className="mt-4">
                    <thead>
                        <tr>
                            <th>Games Played</th>
                            <th>Wins</th>
                            <th>Draws</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{stats[0]?.totalGames}</td>
                            <td>{stats[0]?.totalWins}</td>
                            <td>{stats[0]?.totalDraws}</td>
                        </tr>
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default TeamStats;
