import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../../public/utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      
      "MY CADILLAC REWARDS® MASTERCARD®",
      "DRIVE HOME REAL REWARDS ",
    ],
    video: highlightFirstVideo,
    videoDuration: 15,
  },
  {
    id: 2,
    textLists: ["MOVE UP SALES EVENT"],
    video: highlightSecondVideo,
    videoDuration: 15,
  },
  {
    id: 3,
    textLists: [
      "NEWLY REFRESHED",
      "2025 CT5",
    ],
    video: highlightThirdVideo,
    videoDuration: 14,
  },
  {
    id: 4,
    textLists: ["CADILLAC FINISHES ON PODIUM IN MOBIL 1 TWELVE HOURS OF SEBRING"],
    video: highlightFourthVideo,
    videoDuration: 36,
  },
];

export const models = [
  {
    id: 1,
    title: "2024 Cadillac Escalade in Black Raven",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "2024 Cadillac Escalade in Crystal White Tricoat",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "2024 Cadillac Escalade in Argent Silver Metallic",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "2024 Cadillac Escalade in Radiant Red Tintcoat",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: 'LUXURY', value: "small" },
  { label: 'V-SERIES', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];