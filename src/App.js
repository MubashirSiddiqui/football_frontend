import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddTeam from "./components/AddTeam";
import UpdateTeam from "./components/UpdateTeam";
import DeleteTeam from "./components/DeleteTeam";
import TeamStats from "./components/TeamStats";
import ViewTeams from "./components/ViewTeams"; // ✅ Import ViewTeams

const App = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Football Manager</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Add Team</Nav.Link>
                        <Nav.Link as={Link} to="/update">Update Team</Nav.Link>
                        <Nav.Link as={Link} to="/delete">Delete Team</Nav.Link>
                        <Nav.Link as={Link} to="/stats">Team Stats</Nav.Link>
                        <Nav.Link as={Link} to="/view">View Teams</Nav.Link> {/* ✅ Add link */}
                    </Nav>
                </Container>
            </Navbar>
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<AddTeam />} />
                    <Route path="/update" element={<UpdateTeam />} />
                    <Route path="/delete" element={<DeleteTeam />} />
                    <Route path="/stats" element={<TeamStats />} />
                    <Route path="/view" element={<ViewTeams />} /> {/* ✅ Add Route */}
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
