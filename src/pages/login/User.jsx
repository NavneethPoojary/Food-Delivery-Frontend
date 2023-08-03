import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { Card } from "../../utils/card/Card";
import styled from "styled-components";

const CardContainer = styled.div`
  align-items: center;
  justify-content: center;
  background: white;
  overflow: hidden;
`;

const GridDisplay = styled.ul`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-areas: "image" "text" "stats";
  gap: 20px;
  align-items: center;
  justify-content: center;
`

export default function User() {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    async function fetchPizza() {
      const res = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
      );
      const { data: data } = await res.data;
      const modifiedPizza = data["recipes"].splice(0, 20);
      setRecipeData(modifiedPizza);
    }
    fetchPizza();
  }, []);

  return (
    <>
      <Header />
      <GridDisplay>
        {recipeData &&
          recipeData.map((rec) => (
            <CardContainer key={rec.id}>
              <Card title={rec.title} date={rec.publisher} imgUrl={rec.image_url} />
            </CardContainer>
          ))}
      </GridDisplay>
    </>
  );
}
