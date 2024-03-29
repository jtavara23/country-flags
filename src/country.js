import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import slugify from 'slugify';

const CountryStyled = styled.div`
	text-align: left;
	border-radius: 5px;

	/*	overflow: hidden;*/
	box-shadow: 0 0 7px 2px rgba(0, 0, 0, .03);
	&:hover .details {
		border-radius: 0 0 5px 5px;
		border: 1px solid var(--black);
		border-top: none;
	}
	img {
		width: 100%;
		height: 160px;
		object-fit: cover;
		vertical-align: top;
		border-radius: 5px 5px 0 0;
	}
	.details {
		padding: 1.5em;
		border: 1px solid transparent;
		border-top: none;
		transition: .3s border;
		background: var(--white);
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
	flag,
	name,
	population,
	region,
	capital,
	alpha2Code
}) {
	const history = useHistory();

	function handleClick() {
		history.push(`/country/${slugify(alpha2Code)}`);
	}

	return (
		<CountryStyled onClick={handleClick}>
			<img loading="lazy" src={flag} alt="" />
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
					<strong>Capital: </strong>
					{capital}
				</p>
			</div>
		</CountryStyled>
	);
}

export default Country;
