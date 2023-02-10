import React from 'react';
import { Lottie } from '@crello/react-lottie'

export type IGreetingLottieProps = {
    animationPath?: any
}

const GreetingLottie: React.FC<IGreetingLottieProps> = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        path: props?.animationPath,
    };

    return (
        <div onClick={() => null}>
            <Lottie config={{
                path: props?.animationPath,
                loop: true,
                autoplay: true,
                animationData: props?.animationPath,
            }} />
        </div>
    );
}

export default GreetingLottie