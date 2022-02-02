import React from "react";

import { Card } from "../card/Card1";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  image: "https://i.ytimg.com/vi/kpvevFexjH0/maxresdefault.jpg",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni",
  darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  image: "https://i.ytimg.com/vi/kpvevFexjH0/maxresdefault.jpg",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni",
  darkMode: true,
};

export const Large = Template.bind({});
Large.args = {
  image: "https://i.ytimg.com/vi/kpvevFexjH0/maxresdefault.jpg",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni",
  size: "large",
  darkMode: false,
};

export const Small = Template.bind({});
Small.args = {
  image: "https://i.ytimg.com/vi/kpvevFexjH0/maxresdefault.jpg",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni",
  size: "small",
  darkMode: false,
};