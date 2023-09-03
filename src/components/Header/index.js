import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import { Wrapper } from './styles';

const Header = () => (
	<Wrapper>
		<Link to={`/home`}>
			<img src={logo} alt="weedmaps logo" />
		</Link>
	</Wrapper>
);

export default Header;
