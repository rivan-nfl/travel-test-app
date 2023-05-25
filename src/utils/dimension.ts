import { Dimensions } from "react-native"

const getWidthPercentage = (percentage: number): number => {
    return (Dimensions.get("screen").width / 100) * percentage;
}

export {
    getWidthPercentage as wp,
}