const users = [
  {
    id: 1,
    name: "John",
    location: "New York",
    friends: [2, 3, 4],
    posts: [
      {
        content: "Great day at Central Park!",
        timestamp: "2024-05-10T12:00:00",
        likes: 15,
      },
      {
        content: "Loving the vibes in NYC!",
        timestamp: "2024-05-15T08:30:00",
        likes: 8,
      },
      {
        content: "Visited the Statue of Liberty today!",
        timestamp: "2024-05-05T17:45:00",
        likes: 20,
      },
    ],
  },
  {
    id: 2,
    name: "Alice",
    location: "San Francisco",
    friends: [1, 3],
    posts: [
      {
        content: "Hiking in the Bay Area!",
        timestamp: "2024-05-12T14:20:00",
        likes: 12,
      },
      {
        content: "Enjoying the sunny weather!",
        timestamp: "2024-05-14T11:10:00",
        likes: 6,
      },
    ],
  },
  {
    id: 3,
    name: "Emily",
    location: "Los Angeles",
    friends: [1, 2, 4],
    posts: [
      {
        content: "Beach day in LA!",
        timestamp: "2024-05-08T09:45:00",
        likes: 25,
      },
      {
        content: "Exploring Hollywood!",
        timestamp: "2024-05-16T16:55:00",
        likes: 5,
      },
    ],
  },
  {
    id: 4,
    name: "David",
    location: "Chicago",
    friends: [2],
    posts: [
      {
        content: "Deep dish pizza is the best!",
        timestamp: "2024-05-11T10:30:00",
        likes: 18,
      },
      {
        content: "Trying out a new jazz club tonight!",
        timestamp: "2024-05-13T20:00:00",
        likes: 3,
      },
    ],
  },
  {
    id: 5,
    name: "Sarah",
    location: "Seattle",
    friends: [3, 1],
    posts: [
      {
        content: "Coffee time in the Pacific Northwest!",
        timestamp: "2024-05-09T15:15:00",
        likes: 9,
      },
      {
        content: "Exploring the Olympic National Park!",
        timestamp: "2024-05-14T07:00:00",
        likes: 11,
      },
    ],
  },
];

//a funtion to analyze the data from the users array

function analyzeData(users) {
  const currentDate = new Date();
  const pastWeekDate = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  ); //This calculates the number of milliseconds in one week (7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds).
  //this will help to calculates the timestamp that was exactly one week ago from the current timestamp

  // Filter active users who have posted in the past week
  const activeUsers = users.filter((user) =>
    user.posts.some((post) => new Date(post.timestamp) > pastWeekDate)
  );

  // now let`s extract Popular Posts from Active Users
  const popularPosts = activeUsers.flatMap((user) =>
    user.posts.filter((post) => post.likes >= 10)
  );

  // next we calculate Average Likes per User
  const totalLikes = popularPosts.reduce((acc, post) => acc + post.likes, 0);
  const averageLikesPerUser = totalLikes / activeUsers.length;

  // for the Bonus, lets prepare Additional Data
  const result = {
    activeUsersCount: activeUsers.length,
    popularPostsCount: popularPosts.length,
    averageLikesPerUser: averageLikesPerUser.toFixed(2), // Limit to 2 decimal places
  };

  return result;
}

const analysisResult = analyzeData(users); //calling the funtion after initializing it to new variable

console.log(`activeUsersCount: ${analysisResult.activeUsersCount}`);
console.log(`popularPostsCount: ${analysisResult.popularPostsCount}`);
console.log(`averageLikesPerUser: ${analysisResult.averageLikesPerUser}`);
