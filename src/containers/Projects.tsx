import React from 'react';
import { Button, Card, CardBody, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import ProjectsCard from '../components/ProjectsCard';
import { projects } from '../constants/portfolio';
import { useHorizontalScroll } from '../Hooks/useHorizontalScroll';
import useHorizontalScroll2 from '../Hooks/useHorizontalScroll2';
import _ from 'lodash'
import styled, { useTheme } from 'styled-components';
import { ProjectT } from '../types/ProjectT';
import images from '../constants/images';
import { Icon } from "@iconify/react";

export type IProjectsProps = {

}

const Projects: React.FC<IProjectsProps> = ({ }) => {
	const theme = useTheme()

	const [activeIndex, setActiveIndex] = React.useState(0);
	const [animating, setAnimating] = React.useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const renderCover = (item: ProjectT) => {
		if (_.isArray(item?.images) && item?.images.length > 0)
			return (
				<img src={item?.images[0]?.link} style={{ width: "100%", height: 250 }} className=" " />
			)

		return <img src={images.defaultImage} style={{ width: "100%", height: 250 }} className=" " />;
	}
	const slides = projects.map((item, index) => {
		return (
			<CarouselItem
				className="custom-tag"
				tag="div"
				key={index}
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				style={{
					maxWidth: "100%",
					width: "100%",
					height: 500,
					backgroundColor: "black"
				}}
			>
				{renderCover(item)}
				{/* <CarouselCaption
					className="text-danger"
					captionText={item.name}
					captionHeader={item.name}
				/> */}
			</CarouselItem>
		);
	});


	return projects && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape  shadow rounded-circle text-info"
							style={{
								borderWidth: 1,
								borderStyle: "solid",
								borderColor: theme?.cardBorderColor,
								backgroundColor: theme?.cardBackground
							}}
						>
							<i className="ni ni-laptop text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">Projects</h4>
					</div>
				</div>
			</Container>
			<Container  >
				<Card className='p-2'
					style={{

						backgroundColor: theme?.cardBackground,
						borderColor: theme?.cardBorderColor,
					}}>
					<CardBody >
						<Row >
							<Col lg={6} xs={12}>
								<Carousel
									activeIndex={activeIndex}
									next={next}
									previous={previous}>

									{slides}
									<CarouselControl
										style={{
											backgroundColor: "black"
										}}
										direction="prev"
										directionText="Previous"
										onClickHandler={previous}
									/>
									<CarouselControl
										direction="next"
										directionText="Next"
										onClickHandler={next}
									/>
								</Carousel>
								<CarouselIndicators
									style={{ color: "#eee" }}
									items={projects}
									activeIndex={activeIndex}
									onClickHandler={goToIndex}
								/>
							</Col>
							<Col lg={6} xs={12} className='d-flex flex-column'>
								<div className='d-flex justify-content-between'>
									<div className='d-flex'>
										<h3 style={{ color: theme?.color }}>{projects[activeIndex]?.name}</h3>
									</div>

								</div>
								<div className='d-flex'>
									{projects[activeIndex]?.link ? (
										<Button
											size='sm'
											className="btn-icon"

											color="sucsecondarycess"
											outline
											href={projects[activeIndex]?.link}
											target="_blank"
											rel="noopener" aria-label="view site"
										>
											<span className="btn-inner--icon" >
												<i className="fa fa-eye " style={{ fontSize: 20, color: theme?.color }} />
											</span>
											{/* <span className="nav-link-inner--text ml-1">
												View Site
											</span> */}
										</Button>
									) : null}
									{projects[activeIndex]?.github ? (
										<Button
											size='sm'
											className="btn-icon"
											color="secondary"
											outline
											href={projects[activeIndex].github}
											target="_blank"
											rel="noopener"
											aria-label="Github"
										>
											<span className="btn-inner--icon">
												<i className="fa fa-github" style={{ fontSize: 20, color: theme?.color }} />
											</span>
										</Button>
									) : null}
								</div>
								{/* <a href={projects[activeIndex]?.link}>{projects[activeIndex]?.link}</a> */}
								<span style={{ color: theme?.color }}>{projects[activeIndex]?.desc}</span>
								<h4 className='mt-2' style={{ color: theme?.color }}>Technologies:</h4>
								<div className='d-flex flex-wrap'>
									{_.isArray(projects[activeIndex].technologies) && projects[activeIndex].technologies?.map((item, index) => {
										return (
											<div key={index}>
												<Button
													size='sm'
													className="btn-icon"
													color="secondary     m-1"
													outline
													id={item.name.replace(/\s/g, '')}
													href={projects[activeIndex].github}
													target="_blank"
													rel="noopener"
													aria-label={item.name}
													style={{
														borderColor: theme?.timelineLineColor,
														backgroundColor: theme?.cardBackground
													}}
												>
													<Icon icon={item.fontAwesomeClassname} data-inline="false" style={{ fontSize: 20, color: theme?.color }} />
													<UncontrolledTooltip
														delay={0}
														placement="bottom"
														target={item.name.replace(/\s/g, '')}>
														{item.name}
													</UncontrolledTooltip>
												</Button>
											</div>
										)
									})}
								</div>
								{/* <h4 className='mt-2'>Links:</h4> */}
								{/* <div>
									{projects[activeIndex]?.link ? (
										<Button
											className="btn-icon"
											color="success"
											href={projects[activeIndex]?.link}
											target="_blank"
											rel="noopener" aria-label="Twitter"
										>
											<span className="btn-inner--icon">
												<i className="fa fa-arrow-right mr-2" />
											</span>
											<span className="nav-link-inner--text ml-1">
												View Site
											</span>
										</Button>
									) : null}
									{projects[activeIndex]?.github ? (
										<Button
											className="btn-icon"
											color="github"
											href={projects[activeIndex].github}
											target="_blank"
											rel="noopener"
											aria-label="Github"
										>
											<span className="btn-inner--icon">
												<i className="fa fa-github" />
											</span>
										</Button>
									) : null}
								</div> */}
							</Col>
						</Row>
					</CardBody>
				</Card>

			</Container>
			{/* <Container >
				<div style={{ overflowX: "scroll" }} className="row align-items-center">
					{projects.map((data, i) => {
						return <ProjectsCard key={i} data={data} />;
					})}
				</div>
			</Container> */}
		</section>
	);
}

export default Projects