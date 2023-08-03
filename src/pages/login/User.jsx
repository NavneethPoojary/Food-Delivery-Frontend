import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import { Card } from "../../utils/card/Card";
import styled from "styled-components";
import SkeletonPizza from "../../skeleton/SkeletonPizza";

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
`;

export default function User() {
  const [recipeData, setRecipeData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPizza();
  }, []);

  async function getPizza() {
    setLoading(true);
    const res = await axios.get(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
    );
    const { data: data } = await res.data;
    const modifiedPizza = data["recipes"].splice(0, 20);
    const filteredPizza = modifiedPizza.filter((each, index, self) => {
      return index === self.findIndex((t) => t.title === each.title);
    });
    setRecipeData(filteredPizza);
    setLoading(false);
  }

  return (
    <>
      <Header />
      <GridDisplay>
        {loading &&
          [1, 2, 4, 5, 6, 7].map((n) => (
            <div key={n}>
              <SkeletonPizza />
            </div>
          ))}
        {recipeData &&
          recipeData.map((rec) => (
            <CardContainer key={rec.id}>
              <Card
                title={rec.title}
                date={rec.publisher}
                imgUrl={rec.image_url}
              />
            </CardContainer>
          ))}
      </GridDisplay>
    </>
  );
}
