import React, { Fragment } from "react";

export default function Image(props) {
    const {className, src, alt } = props
    return (
        <Fragment>
            <img 
            src={src}
            className={className}
            alt={alt}
            />
        </Fragment>
    );
}