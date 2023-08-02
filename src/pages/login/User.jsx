import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";

export default function User() {
  
    const [recipeData, setRecipeData] = useState([]);

    let fetchPizza = async () => {
        try {
            const res = await axios.get(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
            );
            const data = await res.data;
            console.log(data, "dataaaaaaaaaaa");
            let allRecipe = data.data;
            let allData = allRecipe.recipes
            setRecipeData(allData);
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        fetchPizza();
    }, []);

     const { image_url, publisher, title} = recipeData

     const {recipes} = recipeData
  
    return (
        <>
            <Header />
            {/* <div>
              <img src={recipe.image_url} />
              <h3>{recipe.title}</h3>
              <p>{recipe.publisher}</p>
            </div> */}
            <ul>
              {recipes?.map(rec => {
                <li className="flex" key={rec.id}>
                    <img
                        src={rec.image_url}
                        alt={rec.title}
                        className="image"
                    />
                    <div className="flex ">
                        <p className="font-medium">{rec.publisher}</p>
                        <div className="mt-auto flex items-center justify-between">
                          <button type="small">
                            Add to cart
                          </button>
                        </div>
                    </div>
                </li>
                })}
            </ul>
        </>
    );
}
