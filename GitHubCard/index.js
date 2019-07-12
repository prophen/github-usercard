/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

  const promise = axios.get("https://api.github.com/users/prophen");

  promise
    .then(data => {
      // Handles Success: here's where we get the results from server
      console.log("response", data);
      console.log('followers', data.data.followers)
      
      document.querySelector('.cards').appendChild(createCard(data))
      
    })
    .catch(error => {
      // Handles failure:
      console.log("Error", error);
    });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

          
*/
function createCard(props) {
  
  console.log(props)
  const { followers, avatar_url, location, following, html_url, name, login, bio } = props.data

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

  image.src = avatar_url
  nameHeader.textContent = name;
  usernameP.textContent = login;
  locationP.textContent = `Location: ${location}`;
  profileP.textContent = "Profile: ";
  githubLink.href = html_url
  githubLink.textContent = githubLink.href;
  followersP.textContent = `Followers: ${followers}`;
  followingP.textContent = `Following: ${following}`;
  bioP.textContent = `Bio: ${bio}` && "Bio: This is where a bio goes.";

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
