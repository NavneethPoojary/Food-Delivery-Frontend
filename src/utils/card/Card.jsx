import styled from "styled-components";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 50px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #fffcf9;
  //background: #fffcf9;
  //box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-size: cover;
`;

const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
`;

const CardTextDate = styled.span`
  color: black;
  font-size: 13px;
`;

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const CardTextBody = styled.p`
  color: grey;
  font-size: 12px;
  font-weight: 100;
`;

const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #5930e5;
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: transparent;
  padding: 10px;
`;

const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 200;
`;

export const Card = ({ title, date, imgUrl }) => {
  return (
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate>{date} </CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
            Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
            temporibus omnis illum maxime and delecios food with high ingredients.. Taste is maximum sit amet consectetur
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          <CardStats>
            <LinkText href="#">Order Now</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">Add to cart</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
  );
};
