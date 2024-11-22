import Entypo from '@expo/vector-icons/Entypo';

type TIcon =
{
    name: string | any;
    size?: number;
}

export function Icon({name, size}: TIcon)
{
    return (
        <Entypo name={name} size={size} color="black"/>
    );
}