import React from 'react';
import { SkillBars } from '../constants/portfolio';
import { Container, Row, Progress, Col } from "reactstrap";
import Reveal from "react-awesome-reveal";
import GreetingLottie from '../components/GreetingLottie';
import styled, { useTheme } from 'styled-components';
export type IProficiencyProps = {
    
}

const Proficiency: React.FC<IProficiencyProps> = ({ }) => {
	const theme = useTheme()
    return SkillBars && (
		<Container className="section section-lg">
			<Reveal triggerOnce  duration={2000} >
				<Row>
					<Col lg="6">
						<h1 className="h1" style={{ color: theme?.color }}>Proficiency</h1>
						{SkillBars.map((skill) => {
							return (
								<div
									className="progress-info"
									key={skill.Stack}
								>
									<div className="progress-label">
										<h6 style={{ color: theme?.color }}>{skill.Stack}</h6>
									</div>
									<div className="progress-percentage">
										<span>{skill.progressPercentage}%</span>
									</div>
									<Progress
										max="100"
										value={skill.progressPercentage}
										color="info"
										role="progressbar"
										aria-label={skill.Stack}
									/>
								</div>
							);
						})}
					</Col>
					<Col lg="6">
						<GreetingLottie animationPath={require("../assets/lottie/build.json")} />
					</Col>
				</Row>
			</Reveal>
		</Container>
	);
}

export default Proficiency