import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
import { useSelector } from 'react-redux';
import CountrySelected from './country_selected';
const CountryPageStyled = styled.div`
	.back {
		background: var(--white);
		box-shadow: 0 0 5px rgba(0, 0, 0, .3);
		padding: .7em 2.2em;
		border-radius: 5px;
		border: none;
		cursor: pointer;
		margin-top: 1em;
		color: var(--black);
		i {
			margin-right: 5px;
		}
	}
	@media screen and (min-width: 1024px) {
		.back {
			margin-top: 3em;
		}
	}
`;

function CountryPage({ match, history }) {
	const selectedCountry = useSelector((state) =>
		state.countryList.find((item) => item.alpha2Code === match.params.id)
	);

	console.log('>>>', selectedCountry);
	//hook
	const [ country, setCountry ] = useState(selectedCountry);
	useEffect(
		() => {
			if (!country) {
				fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id.toLowerCase()}`)
					.then((response) => {
						return response.json();
					})
					.then((data) => {
						setCountry(data);
					})
					.catch(() => {
						console.log('Error fetching data for selected country');
					});
			}
		},
		[ country, match.params.id ]
	);

	function handleClick() {
		history.goBack();
	}

	return (
		<CountryPageStyled>
			<Wrapper>
				<button className="back" onClick={handleClick}>
					<i className="fas fa-long-arrow-alt-left" /> Back
				</button>
				<CountrySelected {...country} />
			</Wrapper>{' '}
		</CountryPageStyled>
	);
}

export default CountryPage;
