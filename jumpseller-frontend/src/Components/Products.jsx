import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(
      cat === "pop"
        ? `http://localhost:3000/popular/products`
        : `http://localhost:3000/category/${cat}/products`
    )
      .then((response) => response.json())
      .then((actualData) => setProducts(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, [cat]);

  useEffect(() => {
    filter &&
      cat &&
      setFilteredProducts(
        products.filter((item) => {
          console.log(item.tags);
          console.log(filter.tag);
          return item.tags.filter((e) => e.name === filter.tag).length > 0;
        })
      );
  }, [cat, filter, products]);

  useEffect(() => {
    if (sort === "Newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.created_at - b.created_at)
      );
    } else if (sort === "asc") {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat === "pop"
        ? products.map((item) => <Product item={item} key={item.id} />)
        : filteredProducts.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
