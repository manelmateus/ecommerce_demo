import React from "react";
import styled from "styled-components";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Products from "../Components/Products";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <NavBar />
      <Categories />
      <Products cat="pop"/>
      <Footer />
    </Container>
  );
};

export default Home;
