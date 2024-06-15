import React from 'react';

const Portfolio = ({ data }) => {
	if (data) {
		var threeProjects = data.threeProjects.map(function (threeProjects) {
			var threeProjectImage = 'images/portfolio/' + threeProjects.image;
			return (
				<div key={threeProjects.image} className="columns portfolio-item">
					<div className="item-wrap">
						<a href={threeProjects.url} title={threeProjects.title}>
							<img alt={threeProjects.title} src={threeProjectImage} loading="lazy"/>
							<div className="overlay">
								<div className="portfolio-item-meta">
									<h5>{threeProjects.title}</h5>
									<p>{threeProjects.category}</p>
								</div>
							</div>
							<div className="link-icon">
								<i className="fa fa-link"></i>
							</div>
						</a>
					</div>
				</div>
			);
		});
		var freelanceProjects = data.freelanceProjects.map(function (
			freelanceProjects
		) {
			var freelanceProjectImage = 'images/portfolio/' + freelanceProjects.image;
			return (
				<div key={freelanceProjects.image} className="columns portfolio-item">
					<div className="item-wrap">
						<a href={freelanceProjects.url} title={freelanceProjects.title}>
							<img alt={freelanceProjects.title} src={freelanceProjectImage} loading="lazy"/>
							<div className="overlay">
								<div className="portfolio-item-meta">
									<h5>{freelanceProjects.title}</h5>
									<p>{freelanceProjects.category}</p>
								</div>
							</div>
							<div className="link-icon">
								<i className="fa fa-link"></i>
							</div>
						</a>
					</div>
				</div>
			);
		});
		var projects = data.projects.map(function (projects) {
			var projectImage = 'images/portfolio/' + projects.image;
			return (
				<div key={projects.image} className="columns portfolio-item">
					<div className="item-wrap">
						<a href={projects.url} title={projects.title}>
							<img alt={projects.title} src={projectImage} loading="lazy"/>
							<div className="overlay">
								<div className="portfolio-item-meta">
									<h5>{projects.title}</h5>
									<p>{projects.category}</p>
								</div>
							</div>
							<div className="link-icon">
								<i className="fa fa-link"></i>
							</div>
						</a>
					</div>
				</div>
			);
		});
		var schoolProjects = data.schoolProjects.map(function (schoolProjects) {
			var projectImage = 'images/portfolio/' + schoolProjects.image;
			return (
				<div key={schoolProjects.image} className="columns portfolio-item">
					<div className="item-wrap">
						<a href={schoolProjects.url} title={schoolProjects.title}>
							<img alt={schoolProjects.title} src={projectImage} loading="lazy"/>
							<div className="overlay">
								<div className="portfolio-item-meta">
									<h5>{schoolProjects.title}</h5>
									<p>{schoolProjects.category}</p>
								</div>
							</div>
							<div className="link-icon">
								<i className="fa fa-link"></i>
							</div>
						</a>
					</div>
				</div>
			);
		});
	}

	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Top 2</h1>

					<div
						id="portfolio-wrapper"
						className="bgrid-quarters s-bgrid-thirds cf"
					>
						{threeProjects}
					</div>
				</div>
				<div className="twelve columns collapsed">
					<h1>Freelance Projects</h1>

					<div
						id="portfolio-wrapper"
						className="bgrid-quarters s-bgrid-thirds cf"
					>
						{freelanceProjects}
					</div>
				</div>
				<div className="twelve columns collapsed">
					<h1>Personal Projects</h1>

					<div
						id="portfolio-wrapper"
						className="bgrid-quarters s-bgrid-thirds cf"
					>
						{projects}
					</div>
				</div>
				<div className="twelve columns collapsed">
					<h1>School Projects</h1>

					<div
						id="portfolio-wrapper"
						className="bgrid-quarters s-bgrid-thirds cf"
					>
						{schoolProjects}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
