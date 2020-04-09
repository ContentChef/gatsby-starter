import React from 'react';
import { getImageUrl } from '../helpers';

const containerStyle = {
    display: 'flex',
    boxShadow: '10px 7px 9px 4px #ccc',
    marginBottom: 30,
    height: '200px'
}

const rightContainerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
};

const rightContainerChildStyle = {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const imgStyle = {
    height: '100%'
}

export function Card(props) {

    const imageUrl = getImageUrl(props.image);
    return (
        <div style={containerStyle}>
            <div>
                <img style={imgStyle} src={imageUrl} alt="" />
            </div>
            <div style={rightContainerStyle}>
                <h2 style={rightContainerChildStyle}>
                    {props.title}
                </h2>
                <p style={rightContainerChildStyle}><a href={props.url}>{props.url}</a></p>
                <p style={rightContainerChildStyle}>{props.description}</p>
            </div>
        </div>
    )
}