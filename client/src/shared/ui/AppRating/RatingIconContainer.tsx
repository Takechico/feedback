import React from "react";
import {IconContainerProps} from "@mui/material";

const customIcons: {
    [index: string]: {
        icon: React.ReactElement<unknown>;
        label: string;
    };
} = {
    1: {
        icon: <span style={{ fontSize: '1.5rem' }}>😢</span>,
        label: 'Very Sad',
    },
    2: {
        icon: <span style={{ fontSize: '1.5rem' }}>🙁</span>,
        label: 'Sad',
    },
    3: {
        icon: <span style={{ fontSize: '1.5rem' }}>😐</span>,
        label: 'Neutral',
    },
    4: {
        icon: <span style={{ fontSize: '1.5rem' }}>🙂</span>,
        label: 'Happy',
    },
    5: {
        icon: <span style={{ fontSize: '1.5rem' }}>😂</span>,
        label: 'Very Happy',
    },
};

export function RatingIconContainer(props: IconContainerProps) {

    const {value, ...other} = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}