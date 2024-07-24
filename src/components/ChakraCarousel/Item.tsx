import React from 'react';
import { Flex } from './Elements';

export type IItemProps = {
    setTrackIsActive(item): void
    setActiveItem(item): void
    activeItem: any,
    constraint: any,
    itemWidth: number,
    positions: any,
    children: React.ReactNode,
    index: number,
    gap: number

}

const Item: React.FC<IItemProps> = ({
    setTrackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    children,
    index,
    gap
}) => {
    const [userDidTab, setUserDidTab] = React.useState(false);

    const handleFocus = () => setTrackIsActive(true);

    const handleBlur = () => {
        userDidTab && index + 1 === positions.length && setTrackIsActive(false);
        setUserDidTab(false);
    };

    const handleKeyUp = (event) =>
        event.key === "Tab" &&
        !(activeItem === positions.length - constraint) &&
        setActiveItem(index);

    const handleKeyDown = (event) => event.key === "Tab" && setUserDidTab(true);

    return (
        <Flex
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            w={`${itemWidth}px`}
            _notLast={{
                mr: `${gap}px`
            }}
            py="4px"
        >
            {children}
        </Flex>
    );
}

export default Item