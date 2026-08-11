import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/navbar.css';

const NavigationBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm fixed-top">
      <Container>
        {/* Logo / Nom du profil */}
        <Navbar.Brand href="#accueil" className="fw-bold brand-logo">
          Achirou <span className="text-accent">Achabi</span>
        </Navbar.Brand>

        {/* Bouton Burger pour mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />

        {/* Éléments du menu */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#accueil" className="nav-item-custom">Accueil</Nav.Link>
            <Nav.Link href="#parcours" className="nav-item-custom">Parcours</Nav.Link>
            <Nav.Link href="#projet" className="nav-item-custom">Projet</Nav.Link>
            <Nav.Link href="#contact" className="nav-item-custom btn-contact-nav ms-lg-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;