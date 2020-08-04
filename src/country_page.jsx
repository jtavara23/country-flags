import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
import { useSelector } from 'react-redux';
import CountrySelected from './country_selected';
const CountryPageStyled = styled.div``;

function CountryPage({ match }) {
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

	console.log(country);
	return (
		<CountryPageStyled>
			<Wrapper>
				<CountrySelected {...country} />
			</Wrapper>{' '}
		</CountryPageStyled>
	);
}

export default CountryPage;
