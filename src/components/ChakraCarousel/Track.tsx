import React from 'react';
import { Flex, VStack } from './Elements';
import { motion, useAnimation, useMotionValue } from "framer-motion";

const MotionFlex = motion(Flex);
const transitionProps = {
    stiffness: 400,
    type: "spring",
    damping: 60,
    mass: 3
};

export type ITrackProps = {
    
}

const Track = ({
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    multiplier,
    itemWidth,
    positions,
    children
}) => {
    const [dragStartPosition, setDragStartPosition] = React.useState(0);
    const controls = useAnimation();
    const x = useMotionValue(0);
    const node = React.useRef(null);

    const handleDragStart = () => setDragStartPosition(positions[activeItem]);

    const handleDragEnd = (_, info) => {
        console.log(info);
        const distance = info.offset.x;
        const velocity = info.velocity.x * multiplier;
        const direction = velocity < 0 || distance < 0 ? 1 : -1;

        const extrapolatedPosition =
            dragStartPosition +
            (direction === 1
                ? Math.min(velocity, distance)
                : Math.max(velocity, distance));

        const closestPosition = positions.reduce((prev, curr) => {
            return Math.abs(curr - extrapolatedPosition) <
                Math.abs(prev - extrapolatedPosition)
                ? curr
                : prev;
        }, 0);

        if (!(closestPosition < positions[positions.length - constraint])) {
            setActiveItem(positions.indexOf(closestPosition));
            controls.start({
                x: closestPosition,
                transition: {
                    velocity: info.velocity.x,
                    ...transitionProps
                }
            });
        } else {
            setActiveItem(positions.length - constraint);
            controls.start({
                x: positions[positions.length - constraint],
                transition: {
                    velocity: info.velocity.x,
                    ...transitionProps
                }
            });
        }
    };

    const handleResize = React.useCallback(
        (positions) =>
            controls.start({
                x: positions[activeItem],
                transition: {
                    ...transitionProps
                }
            }),
        [activeItem, controls, positions]
    );

    const handleClick = React.useCallback(
        (event) => {
            if (node?.current) {
                // @ts-ignore
                node?.current?.contains(event.target)
                    ? setTrackIsActive(true)
                    : setTrackIsActive(false)
            }
        }
        ,
        [setTrackIsActive]
    );

    const handleKeyDown = React.useCallback(
        (event) => {
            if (trackIsActive) {
                if (activeItem < positions.length - constraint) {
                    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                        event.preventDefault();
                        setActiveItem((prev) => prev + 1);
                    }
                }
                if (activeItem > positions.length - positions.length) {
                    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                        event.preventDefault();
                        setActiveItem((prev) => prev - 1);
                    }
                }
            }
        },
        [trackIsActive, setActiveItem, activeItem, constraint, positions.length]
    );

    React.useEffect(() => {
        handleResize(positions);

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClick);
        };
    }, [handleClick, handleResize, handleKeyDown, positions]);

    return (
        <>
            {itemWidth && (
                <VStack ref={node} spacing={5} alignItems="stretch">
                    <MotionFlex
                        dragConstraints={node}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        animate={controls}
                        style={{ x }}
                        drag="x"
                        // @ts-ignore
                        _active={{ cursor: "grabbing" }}
                        minWidth="min-content"
                        flexWrap="nowrap"
                        cursor="grab"
                    >
                        {children}
                    </MotionFlex>
                </VStack>
            )}
        </>
    );
};


export default Track