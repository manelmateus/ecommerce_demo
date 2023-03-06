import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from "react";
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    ${mobile({padding: "0px", flexDirection: "column"})}
`;



const Categories = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
       });
  }, []);
  
  return (
    <Container>
      {data && data.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories