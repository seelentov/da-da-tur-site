import { BeatLoader } from "react-spinners";

interface ILoadingProps {
    min?: boolean
    color?: string
}

export function Loading({ min, color = "#E33C8C" }: ILoadingProps) {
    return <BeatLoader size={min ? 15 : 60} color={color} />
}