import React from "react";
import { restaurent } from "../../constants/data";
import { styled } from "styled-components";
import { TEXT } from "../../constants/textConstants";

export default function Home() {
  return (
    <>
      <div className="des">
        <div className="heading">
          <h2 className="">Popular locations in </h2>
          <img
            alt="India flag"
            src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"
            loading="lazy"
            class="image"
          ></img>
          <h2>India</h2>
        </div>
        <div className="text-main">
          <span className="text-content">{TEXT}</span>
        </div>
      </div>
      <div className="restaurents">
        {restaurent.map((each) => (
          <div key={each.id} className="state-box1">
            <span className="state-text">{each.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
