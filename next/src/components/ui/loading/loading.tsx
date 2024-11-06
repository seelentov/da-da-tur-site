import { BeatLoader } from "react-spinners";

interface ILoadingProps {
    min?: boolean
}

export function Loading({ min }: ILoadingProps) {
    return <BeatLoader size={min ? 15 : 30} color="#E33C8C" />
}