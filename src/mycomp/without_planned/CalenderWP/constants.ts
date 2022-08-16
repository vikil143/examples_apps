import { Dimensions } from "react-native"

const { width } = Dimensions.get("window")

const WEEKS: string[] = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

const MONTHS: string[] = [];

const DATES = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


// This is for all side little bit padding to not touch border
const PADDING = 10 
// Size of date box
const SIZE = (width - (2 * PADDING)) / WEEKS.length

export { MONTHS, WEEKS, PADDING, SIZE, DATES }