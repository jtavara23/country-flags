import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const filterByRegionAction = (regionSelected) => {
	return {
		type: 'FILTER_BY_REGION',
		payload: { regionSelected }
	};
};

const RegionStyled = styled.div`
	padding: 1.3em;
	border: none;
	border-radius: 5px;
	outline: 0;
	box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .05);
	background: var(--white);
	color: var(--black);
`;

export const Region = () => {
	const dispatch = useDispatch();
	const filterByRegion = useSelector((state) => state.filterByRegion);

	/**
     * Disptach filterByRegion action
     * 
     * @param {React.SyntheticEvent} selectEvent
     */
	const onRegionChange = (selectEvent) => {
		const value = selectEvent.target.value;

		dispatch(filterByRegionAction(value));
	};

	return (
		<RegionStyled>
			<select onChange={onRegionChange} value={filterByRegion}>
				<option value="">Filter by region</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</RegionStyled>
	);
};
