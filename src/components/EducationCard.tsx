import React from 'react';
import { Card, CardBody, Badge } from "reactstrap";
import Reveal from "react-awesome-reveal";
import { useTheme } from 'styled-components';
export type IEducationCardProps = {
    education: any
}

const EducationCard: React.FC<IEducationCardProps> = ({ education }) => {
    const theme = useTheme()
    return (
        <Reveal triggerOnce duration={2000} >
            <Card className="card-lift--hover shadow  mt-4"
                style={{
                    zIndex:10,
                    backgroundColor: theme?.cardBackground,
                    borderColor: theme?.cardBorderColor,
                }}>
                <CardBody>
                    <div className="d-flex px-3">
                        <div className="pl-4">
                            <h5 className="text-info">
                                {education.schoolName}
                            </h5>
                            <h6 style={{ color: theme?.color }}>{education.subHeader}</h6>
                            <Badge color="info" className="mr-1">
                                {education.duration}
                            </Badge>
                            {education.grade && (
                                <Badge color="primary" className="mr-1">
                                    {education.grade}
                                </Badge>
                            )}
                            <p className="description mt-3" >{education.desc}</p>
                            <ul>
                                {education.descBullets
                                    // @ts-ignore
                                    ? education?.descBullets.map((desc) => {
                                        return <li key={desc}>{desc}</li>;
                                    })
                                    : null}
                            </ul>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Reveal>
    );
}

export default EducationCard