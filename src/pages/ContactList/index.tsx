import React, { useState, useEffect } from "react";
import ContactCard from "./components/ContactCard";
import api from "../../services/api";
import StyledContainer from "./styles";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/Header";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const getUserContacts = (): void => {
    const userId = localStorage.getItem("userId");
    api.get(`users/${userId}/contacts`).then((response: any) => {
      setContacts(response.data);
    });
  };

  useEffect(() => {
    getUserContacts();
  }, []);

  return (
    <>
    <Header />
    <StyledContainer>
      <Row>
        {contacts.map((contact: any) => (
          <Col>
            <ContactCard name={contact.name} id={contact.id} />
          </Col>
        ))}
      </Row>
    </StyledContainer>
    </>
  );
}

export default ContactList;
