import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";


export default function User() {

  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    async function fetchPizza() {
      const res = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
      );
      const { data: data } = await res.data;
      setRecipeData(data.recipes);
    }
    fetchPizza();
  }, []);

  return (
    <>
      <Header />
      <ul>
        {recipeData && recipeData.map((rec) => (
          <li className="container" key={rec.id}>
            <div className="container">
              <img src={rec.image_url}  className="hero-img" alt="hero image"/>
                <p className="column">{rec.publisher}</p>
                <p className="column">{rec.title}</p>
                <button className="btn-block">Add to cart</button>
            </div>
          </li>
      ))}
      </ul>
    </>
  );
}
