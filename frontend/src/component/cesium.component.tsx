import React from 'react'
import { Viewer } from 'resium';

interface propsTypes {
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
}

export default function Cesium({ children, className, ...props }: propsTypes) {

    return (
        <Viewer
        shouldAnimate={true}
            full
            className={`h-screen ${className}`}
            {...props}
        >
            {children}
        </Viewer>
    )
}
