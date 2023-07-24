import HeroBanner from "../../assets/hero.png";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const SectionHero = styled.div`
  background-color: #fdf2e9;
  padding: 4.8rem 0 9.6rem 0;
`;

const Hero = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9.6rem;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: 700;
  line-height: 1.05;
  color: #333;
  letter-spacing: -0.5px;
  margin-bottom: 3.2rem;
`;

const Description = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionHero>
        <Hero>
          <div className="text-container">
            <Heading>
              A healthy meal delivered to your door, every single day
            </Heading>
            <Description>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </Description>
          </div>

          <div class="hero-img-box">
            <Image src={HeroBanner} className="hero-img" alt="hero image" />
          </div>
        </Hero>
      </SectionHero>
    </>
  );
}
