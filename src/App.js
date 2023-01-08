import React, { useEffect, useState } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

import './App.css';

import ReactGA from 'react-ga';

const trackingId = 'UA-253459914-1'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const App = () => {
	const [resumeData, setResumeData] = useState({});

	useEffect(() => {
		fetch('/resumeData.json')
			.then((res) => res.json())
			.then((data) => {
				setResumeData(data);
			});
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div className="App">
			<Header data={resumeData.main} />
			<About data={resumeData.main} />
			<Resume data={resumeData.resume} />
			<Portfolio data={resumeData.portfolio} />
			<Testimonials data={resumeData.testimonials} />
			<Contact data={resumeData.main} />
			<Footer data={resumeData.main} />
		</div>
	);
};

export default App;
