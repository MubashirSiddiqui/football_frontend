import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Spinner } from "react-bootstrap";

const ViewTeams = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from the API
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/football/teams");
                setTeams(response.data);
            } catch (error) {
                console.error("Error fetching teams:", error);
            }
            setLoading(false);
        };

        fetchTeams();
    }, []);

    // Delete a team by ID
    const handleDelete = async (id) => {
        try {
            await axios.post(`http://localhost:5000/api/football/delete/${id}`);
            setTeams(teams.filter((team) => team._id !== id)); // Remove from state
            alert("✅ Team deleted successfully!");
        } catch (error) {
            console.error("Error deleting team:", error);
            alert("❌ Error deleting team");
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Football Teams Data</h2>

            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" />
                </div>
            ) : teams.length === 0 ? (
                <p className="text-center">No teams found.</p>
            ) : (
                <Table striped bordered hover responsive className="shadow-lg">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>#</th>
                            <th>Team</th>
                            <th>Games Played</th>
                            <th>Wins</th>
                            <th>Draws</th>
                            <th>Losses</th>
                            <th>Goals For</th>
                            <th>Goals Against</th>
                            <th>Points</th>
                            <th>Year</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((team, index) => (
                            <tr key={team._id}>
                                <td>{index + 1}</td>
                                <td>{team.team}</td>
                                <td>{team.gamesPlayed}</td>
                                <td>{team.win}</td>
                                <td>{team.draw}</td>
                                <td>{team.loss}</td>
                                <td>{team.goalsFor}</td>
                                <td>{team.goalsAgainst}</td>
                                <td>{team.points}</td>
                                <td>{team.year}</td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(team._id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default ViewTeams;
