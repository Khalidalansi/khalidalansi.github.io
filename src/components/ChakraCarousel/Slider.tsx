import React from 'react';
import { Button, Progress } from 'reactstrap';
import percentage from '../../utils/percentage';
import { Box, Flex } from './Elements';
import useBoundingRect from "../../Hooks/useBoundingRect";
import { css } from 'glamor'

export const classes = {
    box: css({
        width: "100%",
        // marginLeft: gap / 2,
        position: "relative",
        overflow: "hidden",
        ":before": {
            bgGradient: "linear(to-r, base.d400, transparent)",
            position: "absolute",
            // w: `${gap / 2}px`,
            content: "''",
            zIndex: 1,
            height: "100%",
            left: 0,
            top: 0
        }
    }),



}
export type ISliderProps = {

}

const Slider = ({
    setTrackIsActive,
    initSliderWidth,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    children,
    gap
}) => {
    // @ts-ignore
    const [ref, { width }] = useBoundingRect();

    React.useLayoutEffect(() => initSliderWidth(Math.round(width)), [
        width,
        initSliderWidth
    ]);

    const handleFocus = () => setTrackIsActive(true);

    const handleDecrementClick = () => {
        setTrackIsActive(true);
        !(activeItem === positions.length - positions.length) &&
            setActiveItem((prev) => prev - 1);
    };

    const handleIncrementClick = () => {
        setTrackIsActive(true);
        !(activeItem === positions.length - constraint) &&
            setActiveItem((prev) => prev + 1);
    };

    return (
        <>

            <Box
                ref={ref}
                // className={`${classes.box}`}

                style={{
                    // width: "100%",
                    // marginLeft: gap / 2,
                    ":before": {
                        // marginLeft: gap / 2,
                    }
                    // width:{
                    //     base: "100%", md: `calc(100% + ${gap}px)`
                    // }
                }}
                w={`calc(100% + ${gap}px)`}
                // w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
                ml={`${gap / 2}px`}
                // ml={{ base: 0, md: `-${gap / 2}px` }}
                px={`${gap / 2}px`}
                position="relative"
                overflow="hidden"
                _before={{
                    bgGradient: "linear(to-r, base.d400, transparent)",
                    position: "absolute",
                    w: `${gap / 2}px`,
                    content: "''",
                    zIndex: 1,
                    h: "100%",
                    left: 0,
                    top: 0
                }}
                _after={{
                    bgGradient: "linear(to-l, base.d400, transparent)",
                    position: "absolute",
                    w: `${gap / 2}px`,
                    content: "''",
                    zIndex: 1,
                    h: "100%",
                    right: 0,
                    top: 0
                }}
            >
                {children}
            </Box>

            <Flex
                style={{
                    width: itemWidth,
                    mt: gap / 2,
                    mx: "auto",
                }}
            >
                <Button
                    onClick={handleDecrementClick}
                    onFocus={handleFocus}
                    mr={`${gap / 3}px`}
                    color="gray.200"
                    variant="link"
                    minW={0}
                >
                    <i className="fa fa-eye " style={{ fontSize: 20 }} />
                    {/* <ChevronLeftIcon boxSize={9} /> */}
                </Button>

                <Progress
                    value={percentage(activeItem, positions.length - constraint)}
                    style={{
                        alignSelf: "center",
                        borderRadius: "2px",
                        // bg:"base.d100",
                        flex: 1,
                        height: 3,
                    }}

                    sx={{
                        "> div": {
                            backgroundColor: "gray.400"
                        }
                    }}
                />

                <Button
                    onClick={handleIncrementClick}
                    onFocus={handleFocus}
                    ml={`${gap / 3}px`}
                    color="gray.200"
                    variant="link"
                    zIndex={2}
                    minW={0}
                >
                    <i className="fa fa-eye " style={{ fontSize: 20 }} />
                    {/* <ChevronRightIcon boxSize={9} /> */}
                </Button>
            </Flex>
        </>
    );
};


export default Slider