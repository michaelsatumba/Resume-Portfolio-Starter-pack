import React from 'react';

const Resume = ({ data }) => {
	const [showDescription, setShowDescription] = React.useState({});
	const [showDescription2, setShowDescription2] = React.useState(false);

	const toggleDescription = (id) => {
		setShowDescription((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}));
		console.log(showDescription);
	};

	const handleClick = () => {
		setShowDescription2(!showDescription2);
	};

	if (data) {
		var skillmessage = data.skillmessage;
		var education = data.education.map(function (education) {
			return (
				<div key={education.school}>
					<h3>{education.school}</h3>
					{showDescription2 ? (
						<div>
							<p className="info">
								{education.degree} <span>&bull;</span>
								<em className="date">{education.graduated}</em>
							</p>
							<p className="info">
								{education.degree2} <span>&bull;</span>
								<em className="date">{education.graduated}</em>
							</p>
							<p className="info">
								{education.degree3} <span>&bull;</span>
								<em className="date">{education.graduated2}</em>
							</p>
							<p className="info">{education.description}<span>&bull;</span><em className="date">{education.graduated2}</em></p>
							<p className="info">{education.description1}<span>&bull;</span><em className="date">Spring 2019</em></p>
							<p className="info">{education.description2}<span>&bull;</span><em className="date">Fall 2018</em></p>
							<img src="/images/gradCert.png" alt="graduateCert" loading="lazy"/>
							<img src="/images/masters.png" alt="masters" loading="lazy"/>
							<br />
							<button onClick={handleClick}>Explore Further</button>
						</div>
					) : (
						<button onClick={handleClick}>Explore Further</button>
					)}
				</div>
			);
		});
		var work = data.work.map(function (work) {
			return (
				<div key={work.id}>
					<h3>{work.company}</h3>
					<p className="info">
						{work.title}
						<span>&bull;</span> <em className="date">{work.years}</em>
					</p>
					{showDescription[work.id] ? <p>{work.description}</p> : null}
					<button onClick={() => toggleDescription(work.id)}>
					Explore Further
					</button>
				</div>
			);
		});
		var skills = data.skills.map(function (skills) {
			var className = 'bar-expand ' + skills.name.toLowerCase();
			return (
				<li key={skills.name}>
					<span style={{ width: skills.level }} className={className}></span>
					<em>{skills.name}</em>
				</li>
			);
		});
	}

	return (
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div
					className="nine columns main-col"
					// style={{
					// 	backgroundColor: 'green',
					// }}
				>
					<div
						className="row item"
						// style={{
						// 	backgroundColor: 'red',
						// }}
					>
						<div className="twelve columns">{education}</div>
					</div>
				</div>
			</div>

			<div className="row work">
				<div className="three columns header-col">
					<h1>
						<span>Work</span>
					</h1>
				</div>

				<div className="nine columns main-col">{work}</div>
			</div>

			<div className="row skill">
				<div className="three columns header-col">
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<p>{skillmessage}</p>

					<div className="bars">
						<ul className="skills">{skills}</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
