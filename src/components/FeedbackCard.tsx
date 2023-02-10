import React from 'react';
import Reveal from "react-awesome-reveal";
import { Card, CardBody, Badge } from "reactstrap";
export type IFeedbackCardProps = {
    data: {
        name: string,
        feedback: string
    }
}

const FeedbackCard: React.FC<IFeedbackCardProps> = ({ data }) => {
    return (
        <Reveal triggerOnce duration={2000} >
            <Card className="card-lift--hover shadow mt-4">
                <CardBody>
                    <div className="d-flex px-3">
                        <div className="pl-4">
                            <h5 className="text-info">{data.name}</h5>
                            <p className="description mt-3">{data.feedback}</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Reveal>
    );
}

export default FeedbackCard