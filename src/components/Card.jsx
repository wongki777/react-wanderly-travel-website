import React from "react";
import styled from "styled-components";


export default function Card() {

  return (
    <Section>

<div class="c-heroImageGrid">
	<div class="container">
		<div class="column"></div>
		<div class="column">
			<div class="row"></div>
			<div class="row">
				<div>
					<div class="text">
						<h6>
            Discover Your World, One Journey at a Time!
						</h6>
						<p>
            Indulge your wanderlust with our expertly curated selection of travel experiences, where every journey is crafted to ignite your sense of adventure and create cherished memories that will last a lifetime. From breathtaking landscapes to cultural treasures, embark on an exploration of discovery and delight as you traverse the globe with us."
						</p>
					</div>
				</div>
				<div></div>
			</div>
			<div class="row"></div>
		</div>
	</div>
</div>
    </Section>
  );
}

const Section = styled.section`
h6, p {
  font-family: sans-serif;
}

.c-heroImageGrid {
	position: relative;
	overflow: hidden;
	height: 50vw;
	background: #fff;
	margin-bottom: 90px;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 90px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
}

.c-heroImageGrid .container {
	display: flex;
	align-items: flex-end;
	position: absolute;
	top: -20vw;
	left: -8vw;
	transform: rotateZ(45deg);
	height: 100vw;
	width: 107vw;
}

.c-heroImageGrid .container .column {
	overflow: hidden;
	position: relative;
}

.c-heroImageGrid .container .column:nth-of-type(1) {
	border-right: 8px solid white;
	width: 25%;
	height: 66vw;
}

.c-heroImageGrid .container .column:nth-of-type(1):hover {
	opacity: 0.75;
	cursor: pointer;
}

.c-heroImageGrid .container .column:nth-of-type(1):before {
	position: absolute;
	top: 8.4vw;
	left: 8.1vw;
	background-repeat: no-repeat;
	background-size: cover;
	transform: rotateZ(-45deg);
	content: "";
	width: 37vw;
	height: 38vw;
	background-image: url(https://images.unsplash.com/photo-1618059485046-161ace8b928d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
}


.c-heroImageGrid .container .column:nth-of-type(2) {
	display: flex;
	flex-direction: column-reverse;
	width: 75%;
	height: 109.1vw;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row {
	border-top: 8px solid #fff;
}


.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(1) {
	position: relative;
	overflow: hidden;
	height: 50vw;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(1):hover {
	opacity: 0.75;
	cursor: pointer;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(1):before {
	position: absolute;
	top: -10.1vw;
	left: -14.3vw;
	background-repeat: no-repeat;
	background-size: cover;
	transform: rotateZ(-45deg);
	content: "";
	width: 65vw;
	height: 39vw;
	background-image: url(https://images.unsplash.com/photo-1532444143931-9f60a76242e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(2) {
	display: flex;
	height: 40.5vw;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(3) {
	border-top: none;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(2) div:nth-of-type(1) {
	overflow: hidden;
	width: 30%;
	background-color: #FF521C;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(2) div:nth-of-type(1) .text {
	width: 100%;
	height: 100%;
	overflow: visible;
	transform: rotateZ(-45deg);
	position: relative;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(2) div:nth-of-type(1) .text h6 {
	position: absolute;
	color: #fff;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 1.35vw;
	width: 20vw;
	top: 16vw;
	left: 7vw;
	line-height: 1.55vw;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(2) div:nth-of-type(1) .text p {
	text-align: right;
	position: absolute;
	color: #fff;
	font-size: 0.9vw;
	width: 18vw;
	top: 23.5vw;
	left: -3.5vw;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(2) div:nth-of-type(2) {
	position: relative;
	width: 70%;
	border-left: 8px solid white;
	overflow: hidden;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(2) div:nth-of-type(2):hover {
	opacity: 0.75;
	cursor: pointer;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(2) div:nth-of-type(2):before {
	position: absolute;
	top: 0;
	left: -40vw;
	width: 110.1vw;
	height: 110vw;
	background-repeat: no-repeat;
	background-size: cover;
	transform: rotateZ(-45deg);
	content: "";
	background-image: url(https://images.unsplash.com/photo-1587242689479-cad77df96a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(3) {
	position: relative;
	height: 18.6vw;
	overflow: hidden;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(3):hover {
	opacity: 0.75;
	cursor: pointer;
}

.c-heroImageGrid .container .column:nth-of-type(2) .row:nth-of-type(3):before {
	position: absolute;
	top: 7.5vw;
	left: 25vw;
	width: 33vw;
	height: 27vw;
	background-repeat: no-repeat;
	background-size: cover;
	transform: rotateZ(-45deg);
	content: "";
	background-image: url(https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80);
}

`;
