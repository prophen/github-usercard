/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
fetchUser("https://api.github.com/users/prophen");
fetchFollowers("https://api.github.com/users/prophen/followers");

function fetchUser(endpoint) {
  const fetchProfile = axios.get(endpoint);

  fetchProfile
    .then(user => {
      document.querySelector(".cards").appendChild(createCard(user));
    })
    .catch(error => {
      // Handles failure:
      console.log("Error", error);
    });
}

function createCard(props) {
  const {
    followers,
    avatar_url,
    location,
    following,
    html_url,
    name,
    login,
    bio
  } = props.data;

  // create DOM elements
  const card = document.createElement("div");
  const image = document.createElement("img");
  const infoDiv = document.createElement("div");
  const nameHeader = document.createElement("h3");
  const usernameP = document.createElement("p");
  const locationP = document.createElement("p");
  const profileP = document.createElement("p");
  const githubLink = document.createElement("a");
  const followersP = document.createElement("p");
  const followingP = document.createElement("p");
  const bioP = document.createElement("p");

  // set styles
  card.classList.add("card");
  infoDiv.classList.add("card-info");
  nameHeader.classList.add("name");
  usernameP.classList.add("username");

  // set content
  image.src = avatar_url;
  nameHeader.textContent = name;
  usernameP.textContent = login;
  locationP.textContent = location ? `Location: ${location}` : "";
  profileP.textContent = "Profile: ";
  githubLink.href = html_url;
  githubLink.textContent = githubLink.href;
  followersP.textContent = `Followers: ${followers}`;
  followingP.textContent = `Following: ${following}`;
  bioP.textContent = bio ? `Bio: ${bio}` : "Bio: This is where a bio goes.";

  // put elements together
  card.append(image, infoDiv);
  infoDiv.append(
    nameHeader,
    usernameP,
    locationP,
    profileP,
    followersP,
    followingP,
    bioP
  );
  profileP.append(githubLink);
  return card;
}

function fetchFollowers(endpoint) {
  axios
    .get(endpoint)
    .then(followersData => {
      const followersArray = followersData.data;
      followersArray.forEach(follower => {
        fetchUser(`https://api.github.com/users/${follower.login}`);
      });
    })
    .catch(error => {
      // Handles failure:
      console.log("Error", error);
    });
}

/* 
div.card
  img
  div.card-info
    h3.name
    p.username
    p {location}
    p Profile
      a {github page}
    p {followers count}
    p {following count}
    p {bio}

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
