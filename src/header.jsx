import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';

const HeaderStyled = styled.div`
	background: var(--white);
	margin-bottom: 1em;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .06);
	.content {
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	h1 {
		font-size: 14px;
	}
	a {
		text-decoration: none;
		color: var(--dark);
	}
	.dark-mode {
		cursor: pointer;
		.moon {
			transform: rotate(-25deg);
			display: inline-flex;
			margin-right: 10px;
		}
		p {
			font-size: 12px;
			font-weight: 600;
		}
	}
	@media screen and (min-width: 768px) {
		margin-bottom: 3em;
		h1 {
			font-size: 24px;
		}
		p {
			font-size: 1rem;
		}
	}
`;

function Header() {
	function handleClick() {}

	return (
		<HeaderStyled>
			<Wrapper>
				<div className="content">
					<h1>Where in the world?</h1>

					<div className="dark-mode">
						<p onClick={handleClick}>
							<span className="moon">
								<i className="far fa-moon" />
							</span>
							Dark Mode
						</p>
					</div>
				</div>
			</Wrapper>
		</HeaderStyled>
	);
}

export default Header;
