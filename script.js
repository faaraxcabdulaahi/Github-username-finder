const usernameFetch = document.querySelector("#myUsername");
const buttonFetch = document.querySelector("#mySearchBtn");
const profileDiv = document.querySelector("#myProfileDiv");

buttonFetch.addEventListener("click", () => {
  const username = usernameFetch.value.trim();
  if (!username) {
    alert("Please enter your github username");
  } else if (username) {
    fetchGithubUsername(username);
  }
});
const fetchGithubUsername = username => {
    fetch(`https://api.github.com/users/${username}`)
    .then(response=>{
        if (!response.ok) {
           throw new error("User has not been found"); 
        }else{
            return response.json()
        }
    })
    .then(data => displayProfileData(data))
    .catch(error=>{
        alert(error.message)
        profileDiv.style.display = "none"
    })
}

const displayProfileData = user => {
    profileDiv.innerHTML = `
    <img src="${user.avatar_url}" alt="Avatar logo" width="80" height="80" style="margin-top:20px;">
    <h2>${user.name}</h2>
    <p>Followers:${user.followers}</p>
    <p>Followers:${user.following}</p>
    <p>Public Repos:${user.public_repos}</p>
    <a href="${user.html_url}" target="_blank">View Profile</a>
    `
    profileDiv.style.display="block"
}