import { Feather } from '@expo/vector-icons';
import React from 'react';

type TIcon =
{
    name: string | any;
    size?: number;
}

export function Icon({name, size}: TIcon)
{
    return (
        <Feather name={name} size={size} color="black"/>
    );
}