import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <FooterContainer>
      <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Wanderly</h1>

    <h2>Contact</h2>

    <address>
    123 Maple Street
    Springfield,
    United States

      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>

  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">About Us</h2>

      <ul class="nav__ul">
        <li>
        <p>Blog</p>
        </li>

        <li>
        <p>What We Do</p>
        </li>

        <li>
        <p>Recent Tours</p>
        </li>
      </ul>
    </li>

    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Services</h2>

      <ul class="nav__ul nav__ul--extra">
        <li>
          <p>Family Tour</p>
        </li>

        <li>
        <p>Luxury Tour</p>
        </li>

        <li>
        <p>Budget Tour</p>
        </li>

        <li>
        <p>Urgent Tour</p>
        </li>

        <li>
        <p>Corporate Tour</p>
        </li>

        <li>
        <p>Small Group Tour</p>
        </li>
      </ul>
    </li>

    <li class="nav__item">
      <h2 class="nav__title">Help</h2>

      <ul class="nav__ul">
        <li>
        <p>Cookies</p>
        </li>

        <li>
        <p>Help Center</p>
        </li>

        <li>
        <p>Privacy Policy</p>
        </li>
      </ul>
    </li>
  </ul>

  <div class="legal">
    <p>&copy; 2024 Wanderly Travel.</p>

    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> by Olivia Wong</span>
    </div>
  </div>
</footer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`

.footer {
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: white;
  border-top: 1px solid #e5e5e5;
  background-color: #2A2A2E;
}

.footer > * {
  flex:  1 100%;
}

.footer__addr {
  margin-right: 1.25em;
  margin-bottom: 2em;
}

.footer__logo {
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  text-transform: lowercase;
  font-size: 1.5rem;
}

.footer__addr h2 {
  margin-top: 1.3em;
  font-size: 15px;
  font-weight: 400;
  color: white;
}

.nav__title {
  font-weight: 400;
  font-size: 15px;
  color: white;
}

.footer address {
  font-style: normal;
  color: #999;
}

.footer__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: rgb(33, 33, 33, 0.07);
  border-radius: 100px;
  color: white;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
  background-color: orange;
}

.footer ul {
  list-style: none;
  padding-left: 0;
  color: #999;
}

.footer li {
  line-height: 2em;
}

.footer a {
  text-decoration: none;
}

.footer__nav {
  display: flex;
  flex-flow: row wrap;
}

.footer__nav > * {
  flex: 1 50%;
  margin-right: 1.25em;
}

.nav__ul a {
  color: #8D8985;
}

.nav__ul--extra {
  column-count: 2;
  column-gap: 1.25em;
}

.legal {
  display: flex;
  flex-wrap: wrap;
  color: white;
}

.legal__links {
  display: flex;
  align-items: center;
}

.heart {
  color: red;
}

@media screen and (min-width: 24.375em) {
  .legal .legal__links {
    margin-left: auto;
  }
}

@media screen and (min-width: 40.375em) {
  .footer__nav > * {
    flex: 1;
  }

  .nav__item--extra {
    flex-grow: 2;
  }

  .footer__addr {
    flex: 1 0px;
  }

  .footer__nav {
    flex: 2 0px;
  }
}
`;
