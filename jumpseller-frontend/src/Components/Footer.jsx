import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: "column"})}
  background-color: lightgray;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>JUMPSELLER.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut enim
          lacinia purus fringilla porta vitae at odio. Donec euismod, erat et
          iaculis dictum, neque mauris semper nisl, eget auctor ante massa a
          purus. Curabitur vehicula varius porttitor. Curabitur vel posuere
          tellus. Nam in tellus a nunc imperdiet accumsan id a sapien. Maecenas
          gravida odio mollis dui vulputate auctor. Nullam in placerat nisi.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Catalog</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms and Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/> Campus do Lumiar, Estrada do Paco do Lumiar, Edf. K1,
          1649-038, Lisbon
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/> 21 193 4098
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/>
          contact@jumpseller.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
