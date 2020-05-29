import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Header } from 'Components/Header/Header'
import { Sample } from 'Components/Sample/Sample'
import { Footer } from 'Components/Footer/Footer'
import { TestLink } from 'Components/TestLink/TestLink'

export const AppRouter = () => (
	<Router>
		<div>
			<Header />
			<Switch>
				<Route path="/test">
					<TestLink text="test Page" />
				</Route>
				<Route path="/" component={Sample} />
			</Switch>
			<Footer />
		</div>
	</Router>
)
