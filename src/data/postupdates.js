module.exports = [
  {
    title: "Updates: March 10, 2020",
    content: [
      "I added the disclaimer in 'Explore'."
    ],
    tags: ["updates"]
  },
  {
    title: "Updates: January 7, 2020",
    content: [
      "I added a footer.  Loading spinners were also added earlier in the month."
    ],
    tags: ["updates"]
  },
  {
    title: "Updates: November 12, 2019",
    content: [
      "Removed the 'Dots' on the 'line' graphs in the charts.  This is done by setting {pointRadius: 0} in the 'data.dataset' key.",
      "Changed colours for the average line on the charts.",
      "Added the 'responsive: true' field to 'options' as well.",
      "Failed to add pagination to the 'Blog' page.  Couldn't quite get it to work."
    ],
    tags: ["updates", "chartjs"]
  },
  {
    title: "Updates: October 30, 2019",
    content: [
      "Added some dummy data to 'About'.  Accurate data may or may not be added later.  The blocks the data go in are also responsive.",
      "Added average lines to each of 'Graphs' in 'Graphs' using 'Mixed Graphs'.",
      "Use {fill: false} to remove the fill from 'line' type graphs."
    ],
    tags: ["updates", "chartjs"]
  },
  {
    title: "Updates: October 13, 2019",
    content: [
      "Another Chart has been added (Total Pushups performed per Month).",
      "Axes Labels have been added for all graphs.",
      " Number of Sessions per Month graph has had its y-axis zero-indexed instead of starting at two."
    ],
    tags: []
  },
  {
    title: "October 7, 2019",
    content: [
      " A Chart has been added. Number of pushup sessions per month has been graphed."
    ],
    tags: []
  },
  {
    title: "October 4, 2019",
    content: [
      " A Chart has been added. Number of days between pushup sessions has been graphed."
    ],
    tags: []
  },
  {
    title: "More Charts: September 16, 2019",
    content: ["More charts may soon be added."],
    tags: []
  },
  {
    title: "Charts: August 28, 2019",
    content: [
      "A Chart may or may not have been added. Feature flags may or may not be attempted."
    ],
    tags: []
  },
  {
    title: "Added a 404: August 28, 2019",
    content: [
      " It turns out I neglected to add a 'Not Found' or '404' page. That has been remedied."
    ],
    tags: []
  },
  {
    title: "Added Sentry Logging: August 10, 2019",
    content: [
      " I added Sentry logging to the root of the application as well as the RootErrorBoundary. I am, however, not entirely sure if it works.",
      "Some things to add in the future are react-spring for the loading animations. Cleaning up the css grid and removing some of the media queries are also a concern. ChartJS for the data visualization is also something that is in the cards."
    ],
    tags: []
  },
  {
    title: "Typescript and Code Splitting: July 12, 2019",
    content: [
      " I updated the code base to use Typescript. I had to use type 'any' for some of the variables though. I also started using React.Suspense for some of the components so that the initial download by users that don't click on all of the routes is minimized."
    ],
    tags: []
  },
  {
    title: "Other Links: June 21, 2019",
    content: [
      " Added the 'Other Links' Side column portion to actually have links that hit a service that I made. Sadly, the data duplicates itself because that's all there is in the data store."
    ],
    tags: []
  },
  {
    title: "Styling Updates: June 6, 2019",
    content: [
      " Refactored some of the UI Components since I didn't realize I would stick with this site/app. The 'Explore' component looked like a mess; it still does. However, it looks a smidgen more tidier now.",
      "I'm mainly working on this now because the router needs to be 'power cycled' and I can't be bothered to get up. As such, I can only work on stuff that's offline."
    ],
    tags: []
  },
  {
    title: "Counting things",
    content: [
      " Hi, I'm Robert and I am just doing some data entry and aggregation of some data. There's no goal. It's just some busy work to see if something more interesting can come as a result."
    ],
    tags: []
  }
];
