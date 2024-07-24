// import React from 'react';
//TODO: Properly handle user tabbing

import React, {
    useLayoutEffect,
    useCallback,
    useEffect,
    useState,
    useMemo,
    useRef
} from "react";

//   import {
//     useMediaQuery,
//     useTheme,
//     Progress,
//     VStack,
//     Button,
//     Flex,
//     Box
//   } from "@chakra-ui/react";

//   import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import useMediaQuery from "../../Hooks/useMediaQuery";
import styled, { useTheme } from 'styled-components';
import useBoundingRect from "../../Hooks/useBoundingRect";
import { Button, Progress } from "reactstrap";
import percentage from "../../utils/percentage";
import Item from "./Item";
import { Box, Flex, VStack } from "./Elements";
import Slider from "./Slider";
import Track from "./Track";
//   import { useBoundingRect } from "./hooks";
//   import { percentage } from "./utils";










export type IChakraCarouselProps = {
    children: JSX.Element[]
    gap: number
}

const ChakraCarousel: React.FC<IChakraCarouselProps> = (props) => {
    const [trackIsActive, setTrackIsActive] = useState(false);
    const [multiplier, setMultiplier] = useState(0.35);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [activeItem, setActiveItem] = useState(0);
    const [constraint, setConstraint] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);

    const initSliderWidth = useCallback((width) => setSliderWidth(width), []);

    const positions = useMemo(
        () => props.children.map((_, index) => -Math.abs((itemWidth + props.gap) * index)),
        [props.children, itemWidth, props.gap]
    );

    const { breakpoints } = useTheme();

    // const [isBetweenBaseAndMd] = useMediaQuery<number>(
    //     `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`
    // );

    // const [isBetweenMdAndXl] = useMediaQuery(
    //     `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`
    // );

    // const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

    // useEffect(() => {
    //     if (isBetweenBaseAndMd) {
    //         setItemWidth(sliderWidth - gap);
    //         setMultiplier(0.65);
    //         setConstraint(1);
    //     }
    //     if (isBetweenMdAndXl) {
    //         setItemWidth(sliderWidth / 2 - gap);
    //         setMultiplier(0.5);
    //         setConstraint(2);
    //     }
    //     if (isGreaterThanXL) {
    //         setItemWidth(sliderWidth / 3 - gap);
    //         setMultiplier(0.35);
    //         setConstraint(3);
    //     }
    // }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap]);

    const sliderProps = {
        setTrackIsActive,
        initSliderWidth,
        setActiveItem,
        activeItem,
        constraint,
        itemWidth,
        positions,
        gap: props.gap
    };

    const trackProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        sliderWidth,
        activeItem,
        constraint,
        multiplier,
        itemWidth,
        positions,
        gap: props.gap
    };

    const itemProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        activeItem,
        constraint,
        itemWidth,
        positions,
        gap: props.gap
    };

    return (
        <Slider {...sliderProps}>
            <Track {...trackProps}>
                {props.children.map((child, index) => (
                    <Item {...itemProps} index={index} key={index}>
                        {child}
                    </Item>
                ))}
            </Track>
        </Slider>
    );
};




export default ChakraCarousel