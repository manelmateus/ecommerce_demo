import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Products from "../Components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};
`;

const SelectOption = styled.option``;

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2].split("-")[0];
  const catName = location.pathname.split("/")[2].replaceAll("-"," ").slice(1);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (event) => {
    const value = event.target.value;
    setFilter({
      ...filter,
      [event.target.name]: value,
    });
  };

  return (
    <Container>
      <NavBar />
      <Title>{catName}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="tag" onChange={handleFilters}>
            <SelectOption>Tag</SelectOption>
            <SelectOption>Test</SelectOption>
            <SelectOption>Test</SelectOption>
            <SelectOption>None</SelectOption>
            <SelectOption>Black</SelectOption>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <SelectOption value="newest">Newest</SelectOption>
            <SelectOption value="asc">Price (asc)</SelectOption>
            <SelectOption value="desc">Price (desc)</SelectOption>
            <SelectOption value="pop">Popularity</SelectOption>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort}></Products>
      <Footer></Footer>
    </Container>
  );
}

export default ProductList;
