import React from 'react'
import {Link,Route} from 'react-router-dom'
import AboutSeo from './AboutSEO'




export default class About extends React.Component {
	
	

		render() {


		return (
		
		<div>About page<br/>
			<Link to={this.props.match.url + '/aboutSeo'} >About Seo</Link><br/>
		<Route path={this.props.match.url + '/aboutSeo'} component={AboutSeo}/>

		</div>
		);

	}


}
