import React from 'react';
import ChakraCarousel from '../components/ChakraCarousel/ChakraCarousel';
import { Flex } from '../components/ChakraCarousel/Elements';
import { projects } from '../constants/portfolio';

export type IProjectsCarouselProps = {

}

const ProjectsCarousel: React.FC<IProjectsCarouselProps> = ({ }) => {
    return (
        <ChakraCarousel gap={32}>
            {projects.map((item, index) => {
                return (
                    <Flex key={index}
                        style={{
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                            justifyContent:"space-between",
                            flexDirection:"column",
                            overflow:"hidden",
                            color:"gray.300",
                            bg:"base.d100",
                            rounded:5,
                            flex:1,
                            p:5,
                        }}
                    >
                        {item?.name}
                    </Flex>
                )
            })}
        </ChakraCarousel>
    );
}

export default ProjectsCarousel