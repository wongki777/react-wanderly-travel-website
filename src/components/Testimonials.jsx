import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Testimonials</h2>
        <p>Experience the world with our exclusive travel deals and expertly crafted itineraries.</p>
        <p>Start your journey with us today and let the adventure begin!</p>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Agatha Christie</h4>
              <span>Author - London, UK</span>
            </div>
          </div>
        </div>
        <div className="testimonial2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Ashley Olsen</h4>
              <span>Actress - California, USA</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Elon Musk</h4>
              <span>CEO - Tesla, SpaceX</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 5rem;
    font-size: 2rem;
  }

  .title h2 {
    margin-bottom: 1.5rem;
  }

  .title p{
    color: #242422;
    font-size: 1.4rem;
  }

  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    margin-bottom: 10rem;
    gap: 2rem;
    .testimonial {
      background-color: #FCEAE3;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
    .testimonial2 {
      background-color: #FF521C;
      color: white;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
