import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Col,
} from "reactstrap";
import Reveal from "react-awesome-reveal";
import { useTheme } from 'styled-components';
export type IExperienceCardProps = {
    data: any
}

const ExperienceCard: React.FC<IExperienceCardProps> = ({ data }) => {
    const theme = useTheme()
    return (
        <Col lg="6">
            <Reveal triggerOnce duration={2000}>
                <Card
                    className="shadow-lg--hover mb-3 shadow text-center rounded"
                    style={{
                        flex: 1,
                        borderWidth:1,
                        borderStyle:"solid",
                        backgroundColor: theme?.cardBackground,
                        borderColor: theme?.cardBorderColor,
                    }}>
                    <CardBody className="">
                        <img
                            src={data.companylogo}
                            style={{
                                objectFit: "cover",
                                left: 0,
                                right: 0,
                                top: "7rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "8rem",
                                height: "8rem",
                                borderRadius: "50%",
                                backgroundColor:"transparent",
                                padding:5
                            }}
                            className="shadow mb-3"
                            alt={data.companylogo}
                        />
                        <CardTitle  style={{ color: theme?.color }} tag="h4" className="mb-2">
                            {data.company}
                        </CardTitle>
                        <CardSubtitle  style={{ color: theme?.accentColor }} tag="h5" className="mb-2">
                            {data.role}
                        </CardSubtitle>
                        <CardSubtitle>{data.date}</CardSubtitle>
                        <CardText
                            tag="div"
                            className="description my-3 text-left"
                        >
                            {data.desc}
                            <ul>
                                {data.descBullets
                                    // @ts-ignore
                                    ? data.descBullets.map((desc) => {
                                        return <li key={desc}>{desc}</li>;
                                    })
                                    : null}
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            </Reveal>
        </Col>
    );
}

export default ExperienceCard