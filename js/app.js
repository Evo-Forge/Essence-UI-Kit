import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import MateriableHeader from './components/header';
import MateriableHome from './components/home';
import MateriableBlog from './components/blog';
import MateriableSinglePost from './components/singlepost';
import MateriablePortfolio from './components/portfolio';
import MateriableOther from './components/other';
import MateriableAbout from './components/about';
import MateriableContact from './components/contact';
import MateriableError from './components/error';
import MateriableSoon from './components/soon';
import MateriableFooter from './components/footer';


class Materiable extends React.Component {
	render() {
        return(
        	<Block>
        		<MateriableHeader />
        		<MateriableHome />
            <MateriableBlog />
						<MateriableSinglePost />
            <MateriablePortfolio />
            <MateriableOther />
						<MateriableAbout />
						<MateriableContact />
						<MateriableError />
						<MateriableSoon />
            <MateriableFooter />
        	</Block>
        );
    }
}

ReactDOM.render(
	<Block>
		<Materiable />
	</Block>
	,
	document.querySelector('.app')
);
