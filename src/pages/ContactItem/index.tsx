import React, { useState, useEffect } from "react";
import StyledContainer from "./styles";
import { RouteComponentProps } from "react-router";
import { Col, Row } from "react-bootstrap";
import api from "../../services/api";
import Header from "../../components/Header";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const ContactItem = (props: Props) => {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    emails: [
      {
        id: "",
        email: "",
      },
    ],
    telephones: [
      {
        id: "",
        telephone: "",
        telephone_type_id: "",
      },
    ],
  });
  const [telephoneTypes, setTelephoneTypes] = useState([
    {
      id: "",
      name: "",
    },
  ]);

  const getContactInfo = (): void => {
    const userId = localStorage.getItem("userId");
    const contactId = props.match.params.id;

    api.get(`users/${userId}/contacts/${contactId}`).then((response: any) => {
      setContact(response.data);
      console.log(response);
    });
  };

  const getTelephoneTypes = (): void => {
    api.get(`telephone-types`).then((response: any) => {
      setTelephoneTypes(response.data);
      console.log(response);
    });
  };

  const getOneTelephoneType = (telephoneTypeId: any): string => {
    const telephoneType = telephoneTypes.find(
      (type) => type.id === telephoneTypeId
    );

    if (telephoneType !== undefined) {
      return telephoneType.name;
    }

    return "";
  };

  useEffect(() => {
    getContactInfo();
    getTelephoneTypes();
  }, []);

  return (
    <>
    <Header/>
    <StyledContainer>
      <Row>
        <h2>{contact.name}</h2>
      </Row>
      <h5>E-mails:</h5>
      <Row style={{marginBottom: 20}}>
        {contact.emails.map((emailItem: any) => (
          <Col>{emailItem.email}</Col>
        ))}
      </Row>
      <h5>Telefones:</h5>
      <Row style={{marginBottom: 20}}>
        {contact.telephones.map((phoneItem: any) => (
          <Col>
            {phoneItem.telephone} - Tipo:{" "}
            {getOneTelephoneType(phoneItem.telephone_type_id)}
          </Col>
        ))}
      </Row>
    </StyledContainer>
    </>
  );
};

export default ContactItem;
