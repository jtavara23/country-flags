import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const CountryStyled = styled.div`
	width: 264px;
	text-align: left;
	border-radius: 5px;

	overflow: hidden;
	box-shadow: 0 0 7px 2px rgba(0, 0, 0, .03);
	img {
		width: 100%;
		height: 160px;
		object-fit: cover;
	}
	.details {
		padding: 1.5em;
	}
	h2 {
		margin: 0;
		margin-bottom: 1rem;
		font-size: 18px;
	}
	p {
		font-size: .9em;
		margin-bottom: .5rem;
	}
`;

function Country({
	//propiedades
	img,
	name,
	population,
	region,
	capital
}) {
	const history = useHistory();

	function handleClick() {
		history.push(`/country/${name}`);
	}

	return (
		<CountryStyled onClick={handleClick}>
			<img loading="lazy" src={img} alt="" />
			<div className="details">
				<h2>{name}</h2>
				<p>
					<strong>Population: </strong>
					{population}
				</p>
				<p>
					<strong>Region: </strong>
					{region}
				</p>
				<p>
					<strong>Capital:</strong>
					{capital}
				</p>
			</div>
		</CountryStyled>
	);
}

export default Country;
