import React from 'react';
import { educationInfo } from '../constants/portfolio';
import { Container, Row, Col } from "reactstrap";
import EducationCard from '../components/EducationCard';
import { useDarkMode } from '../constants/Theme/useDarkMode';
import styled, { useTheme } from 'styled-components';
export type IEducationProps = {

}

const Education: React.FC<IEducationProps> = ({ }) => {
	const [isDarkMode] = useDarkMode()
	const theme = useTheme()
	return educationInfo && (
		<section className={`section pb-200 ${isDarkMode ? "bg-gradient-dark" : "bg-gradient-info"} my-5`}>
			<Container>
				<div className="d-flex px-3">
					<div>
						<div className="icon icon-lg icon-shape shadow rounded-circle text-info"
						style={{
							borderWidth: 1,
							borderStyle: "solid",
							borderColor: theme?.cardBorderColor,
							backgroundColor: theme?.cardBackground
						}}
						>
							<i className="ni ni-books text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-white">Education</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
					{educationInfo.map((info) => {
						return (
							<Col
								// style={{ zIndex: 10 }}
								className="order-lg-1"
								lg="6"
								key={info.schoolName}
							>
								<EducationCard education={info} />
							</Col>
						);
					})}
				</Row>
			</Container>
			<div className="separator separator-bottom separator-skew zindex-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						className={`${isDarkMode ? "fill-custom-dark" : "fill-white"}`}
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>
		</section>
	);
}

export default Education