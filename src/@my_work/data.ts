import { NavigationName } from "./types";

interface Data {
    id: number;
    name: String;
    route: NavigationName
}
const data: Data[] = [
    { id: 1, name: "Instragram Stories", route: "Stories" },
    { id: 2, name: "Tinder Swipe", route: "Tinder" }
]


export { data }