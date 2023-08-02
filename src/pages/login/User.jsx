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

  //   async function fetchPizza() {
  //     try {
  //       const res = await axios.get(
  //         `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
  //       );
  //     //   console.log(res.data.data)
  //       const { data: data } = await res.data;
  //         let allRecipes = []
  //         allRecipes.push(data.recipes)
  //       setRecipeData(allRecipes);
  //       console.log(recipeData);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }

  //   const { image_url, publisher, title } = recipeData;

  //   const { recipes } = recipeData;

  return (
    <>
      <Header />
      {/* <div>
              <img src={recipe.image_url} />
              <h3>{recipe.title}</h3>
              <p>{recipe.publisher}</p>
            </div> */}
      <ul>
        {recipeData && recipeData.map((e) => <span>{e.publisher}</span>)}
        {/* {recipes?.map((rec) => {
          <li className="flex" key={rec.id}>
            <img src={rec.image_url} alt={rec.title} className="image" />
            <div className="flex ">
              <p className="font-medium">{rec.publisher}</p>
              <div className="mt-auto flex items-center justify-between">
                <button type="small">Add to cart</button>
              </div>
            </div>
          </li>;
        })} */}
      </ul>
    </>
  );
}
