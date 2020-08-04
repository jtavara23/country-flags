import React, { useEffect } from 'react';
import styled from 'styled-components';
import Country from './country';
import { useSelector, useDispatch } from 'react-redux'; //hook
import Wrapper from './wrapper';
//grid
const CountryListStyled = styled.div`
	display: grid;
	grid-row-gap: 2.3em;
	grid-auto-flow: columns;
	grid-column-gap: 66px;
	grid-template-columns: repeat(auto-fill, 270px);
	background: var(--background);
	justify-content: center;
	padding: 3em 0;
`;

function CountryList() {
	const dispatch = useDispatch();

	const countryListByName = useSelector((state) => state.countryListByName);

	const countryList = useSelector((state) => {
		if (state.filterByRegion !== '') {
			// filterbyRegion gets changeed on reducer.jsx when got dispatched by actionFilterByRegion
			return state.countryListByRegion;
		}
		if (countryListByName.length > 0) {
			return countryListByName; //return value from search function
		}
		return state.countryList; //return everything
	});

	//hook
	useEffect(
		() => {
			fetch('https://restcountries.eu/rest/v2/all')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					dispatch({
						type: 'SET_COUNTRY_LIST',
						payload: data
					});
				})
				.catch(() => {
					console.log('Error fetching data country');
				});
		},
		[ dispatch ]
	);

	return (
		<Wrapper>
			<CountryListStyled>
				{countryList.map((country) => {
					return <Country {...country} />;
				})}
			</CountryListStyled>
		</Wrapper>
	);
}

export default CountryList;
