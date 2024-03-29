import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";


export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Get Best Deals",
      subTitle:
        "Unlock substantial savings while earning fantastic rewards via Apps payment.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subTitle:
        "We feature curated hotels with comprehensive COVID safety measures",
    },
    {
      icon: service3,
      title: "Payment with flexibility",
      subTitle:
        "Enjoy flexible app payments and earn rewards with each transaction!",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Discover top hotels and nearby attractions with just one click.",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #FCEAE3;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
