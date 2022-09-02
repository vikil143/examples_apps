/* eslint-disable global-require */
import React from "react";

import Channels from "./components/Channels";
// import Channels from "./mytech/Channels";
import LoadAssets from "./components/LoadAssets";
import { Channel } from "./components/Model";

const channels: Channel[] = [
    {
        id: "killing-eve",
        title: "Killing Eve",
        subtitle: "Sorry baby, xoxo",
        type: "Drama",
        cover: require("./assets/covers/killing-eve.jpg")
    },
    {
        id: "atlanta",
        title: "Atlanta",
        subtitle: "Can Earn work his way to success?",
        type: "Comedy",
        cover: require("./assets/covers/two.jpg")
    },
    {
        id: "years-and-years",
        title: "Years and years",
        subtitle: "Can a family survive the future?",
        type: "Drama",
        cover: require("./assets/covers/three.jpg")
    },
    {
        id: "gentleman-jack",
        title: "Gentleman Jack",
        subtitle: "The true story of a remarkable woman in search of a wife",
        type: "Period Drama",
        cover: require("./assets/covers/four.jpg")
    },
    {
        id: "london-kills",
        title: "London Kills",
        subtitle: "A Met Police murder squad face intense cases",
        type: "Crime Drama",
        cover: require("./assets/covers/five.jpg")
    },
    {
        id: "minding-the-gap",
        title: "Minding the Gap: An American Stakeboarding Story",
        subtitle: "A coming-of-age saga",
        type: "Film",
        cover: require("./assets/covers/six.jpg")
    },
    {
        id: "top-gear",
        title: "Top Gear",
        subtitle: "New team, new cars, new adventures",
        type: "Entertainment",
        cover: require("./assets/covers/seven.jpg")
    },
    {
        id: "athlete-dispute",
        title: "The Trans Women Athlete Dispute",
        subtitle: "with Martina Navratilova",
        type: "Documentary",
        cover: require("./assets/covers/eight.jpg")
    },
    {
        id: "hot-property",
        title: "Hot Property",
        subtitle: "Can meeting mates ensure a dream date?",
        type: "Entertainment",
        cover: require("./assets/covers/nine.jpg")
    },
    {
        id: "pose",
        title: "Pose",
        subtitle: "A glam, groundbreaking trip to 80s New York",
        type: "Drama",
        cover: require("./assets/covers/ten.jpg")
    },
    {
        id: "the-planets",
        title: "The Planets",
        subtitle: "The incredible story of our solar system",
        type: "Science & Nature",
        cover: require("./assets/covers/eleven.jpg")
    },
    {
        id: "hometown",
        title: "Hometown",
        subtitle: "Mobeen Azhar faces some ugly truths",
        type: "Documentary",
        cover: require("./assets/covers/twovele.jpg")
    },
    {
        id: "luther",
        title: "Luther",
        subtitle: "The detective who can't let go of his past",
        type: "Crime Drama",
        cover: require("./assets/covers/thirteen.jpg")
    },
    {
        id: "line-of-duty",
        title: "Line of Duty",
        subtitle: "Crime needs an inside man",
        type: "Crime Drama",
        cover: require("./assets/covers/fourteen.jpg")
    },
    {
        id: "fleabag",
        title: "Fleabag",
        subtitle: "She's smutty, angry, and talking to you",
        type: "Comedy",
        cover: require("./assets/covers/sixteen.jpg")
    },
    {
        id: "death-in-paradise",
        title: "Death in Paradise",
        subtitle: "DI Mooney takes on his first case in Saint Marie",
        type: "Crime Drama",
        cover: require("./assets/covers/killing-eve.jpg")
    },
    {
        id: "worldcup",
        title: "FIFA Women's World Cup",
        subtitle: "2019 Highlights: day 18",
        type: "Sport",
        cover: require("./assets/covers/seventeen.jpg")
    },
    {
        id: "legends",
        title: "Legends",
        subtitle: "Serena Williams",
        type: "Sport",
        cover: require("./assets/covers/eightteen.jpg")
    }
];

export default () => (
    <LoadAssets assets={channels.map(channel => channel.cover)}>
        <Channels {...{ channels }} />
    </LoadAssets>
);
