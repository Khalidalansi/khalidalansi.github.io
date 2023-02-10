import React from 'react';
import { Card, CardBody, Col, Button } from "reactstrap";
import Reveal from "react-awesome-reveal";
import styled, { useTheme } from 'styled-components';
import { ProjectT } from '../types/ProjectT';
import _ from 'lodash'
import images from '../constants/images';

const Box = styled.div({
    // background: 'palevioletred',
    // height: '100px',
    // width: '100%',
    "&:before": {
        backgroundColor: "#eee"
    }
});
export type IProjectsCardProps = {
    data: ProjectT
}

const ProjectsCard: React.FC<IProjectsCardProps> = ({ data }) => {
    const theme = useTheme()

    const renderCover = () => {
        if (_.isArray(data?.images) && data?.images.length > 0)
            return (
                <img src={data?.images[0]?.link} style={{ width: "100%", height: 200 }} className=" " />
            )

        return <img src={images.defaultImage} style={{ width: "100%", height: 200 }} className=" " />;
    }
    return (
        <Col md={"6"} lg="4" className='mb-4'>
            <Reveal triggerOnce duration={2000} >
                <Box style={{}}>
                    <Card className="shadow-lg--hover shadow mt-4"
                        style={{
                            // minHeight: 250,

                            flex: 1,
                            backgroundColor: theme?.cardBackground,
                            borderColor: theme?.cardBorderColor,
                        }}>
                        <CardBody>

                            {renderCover()}

                            <div className="d-flex px-3">
                                <div className="pl-4">
                                    <h3>{data.name}</h3>
                                    <p className="description mt-3">{data.desc}</p>
                                    {data.github ? (
                                        <Button
                                            className="btn-icon"
                                            color="github"
                                            href={data.github}
                                            target="_blank"
                                            rel="noopener"
                                            aria-label="Github"
                                        >
                                            <span className="btn-inner--icon">
                                                <i className="fa fa-github" />
                                            </span>
                                        </Button>
                                    ) : null}
                                    {data.link ? (
                                        <Button
                                            className="btn-icon"
                                            color="success"
                                            href={data.link}
                                            target="_blank"
                                            rel="noopener" aria-label="Twitter"
                                        >
                                            <span className="btn-inner--icon">
                                                <i className="fa fa-arrow-right mr-2" />
                                            </span>
                                            <span className="nav-link-inner--text ml-1">
                                                Demo
                                            </span>
                                        </Button>
                                    ) : null}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Box>

            </Reveal>
        </Col>
    );
}
export default ProjectsCard 