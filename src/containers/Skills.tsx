import React, { Fragment } from 'react';
import { skillsSection } from '../constants/portfolio';
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
// import { Reveal } from "react-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Icon } from "@iconify/react";
import GreetingLottie from '../components/GreetingLottie';
import styled, { useTheme } from 'styled-components';
export type ISkillsProps = {

}

const Skills: React.FC<ISkillsProps> = ({ }) => {
	const theme = useTheme()
	return skillsSection && (
		<Container className="text-center my-5 section section-lg">
			<h1 className="h1" style={{ color: theme?.color }}>{skillsSection.title}</h1>
			<p className="lead">{skillsSection.subTitle}</p>
			{skillsSection.data.map((section, index) => {
				return (
					<Row className="my-5" key={index}>
						<Col lg="6" className="order-2 order-lg-1">
							<Reveal triggerOnce duration={2000}>
								<GreetingLottie
									animationPath={section.lottieAnimationFile}
								/>
							</Reveal>
						</Col>
						<Col lg="6" className="order-1 order-lg-2">
							<Reveal triggerOnce duration={2000}>
								<h3 className="h3 mb-2" style={{ color: theme?.color }}>{section.title}</h3>
								<div className="d-flex justify-content-center flex-wrap mb-2">
									{section.softwareSkills.map((skill, i) => {
										return (
											<Fragment key={i}>
												<div
													className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
													id={skill.skillName.replace(/\s/g, '')}
													style={{
														borderWidth: 1,
														borderStyle: "solid",
														borderColor: theme?.cardBorderColor,
														backgroundColor: theme?.cardBackground
													}}
												>
													<Icon
														icon={
															skill.fontAwesomeClassname
														}
														data-inline="false"
													></Icon>
												</div>
												<UncontrolledTooltip
													delay={0}
													placement="bottom"
													target={skill.skillName.replace(/\s/g, '')}
												>
													{skill.skillName}
												</UncontrolledTooltip>
											</Fragment>
										);
									})}
								</div>
								<div>
									{section.skills.map((skill, i) => {
										return <p key={i}>{skill}</p>;
									})}
								</div>
							</Reveal>
						</Col>
					</Row>
				);
			})}
		</Container>
	);
}

export default Skills