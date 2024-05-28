const token = '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';

const fetchData = async () => {
    const username = document.getElementById('username').value;
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.textContent = ''; 

    if (!username) {
        userInfoDiv.textContent = 'Please enter a username';
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        if (!response.ok) {
            throw new Error('User not found');
        }

        const data = await response.json();
        displayInfo(data);
    } catch (error) {
        userInfoDiv.textContent = `Error: ${error.message}`;
    }
};

const displayInfo = (data) => {
    const userInfoDiv = document.getElementById('user-info');


    //display user image (profile picture)
    const avatar = document.createElement('img');
    avatar.src = data.avatar_url;
    avatar.alt = `${data.login}'s avatar`;
    avatar.width = 100;
    userInfoDiv.appendChild(avatar);


    const username = document.createElement('p');
    username.textContent = `Username: ${data.login}`;
    userInfoDiv.appendChild(username);

    const name = document.createElement('p');
    name.textContent = `Name: ${data.name}`;
    userInfoDiv.appendChild(name);

    const bio = document.createElement('p');
    bio.textContent = `Bio: ${data.bio}`;
    userInfoDiv.appendChild(bio);

    const location = document.createElement('p');
    location.textContent = `Location: ${data.location}`;
    userInfoDiv.appendChild(location);

    const publicRepos = document.createElement('p');
    publicRepos.textContent = `Public Repos: ${data.public_repos}`;
    userInfoDiv.appendChild(publicRepos);

    const followers = document.createElement('p');
    followers.textContent = `Followers: ${data.followers}`;
    userInfoDiv.appendChild(followers);

    const following = document.createElement('p');
    following.textContent = `Following: ${data.following}`;
    userInfoDiv.appendChild(following);

};

document.getElementById('username').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchData();
    }
});
