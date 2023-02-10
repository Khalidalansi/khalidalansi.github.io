import React from 'react';

export type IScrollHorizontalProps = {
    children: React.ReactNode
}

const ScrollHorizontal: React.FC<IScrollHorizontalProps> = (props) => {
  
  
    return (
        <div>
            {props.children}
        </div>
    );
}

export default ScrollHorizontal