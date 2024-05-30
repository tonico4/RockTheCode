import data from '../../data/user';
import './UserCard.css';

const mediaIcons = data.socialmedia;

export const UserCard = () => {
  const usercard = document.createElement("div");
  usercard.className = "usercard";

  const avatar = createAvatar();
  usercard.append(avatar);

  const infobox = document.createElement("section");
  infobox.className = "infobox";
  usercard.append(infobox);

  const userInfo = createUserInfo();
  infobox.append(userInfo);

  const socialBox = createSocialMedia();
  infobox.append(socialBox);

  return usercard;
}

const createAvatar = () => {
  const img = document.createElement("img");
  img.src = data.avatar;
  img.className = "avatar";

  return img;
}

const createUserInfo = () => {
  const userInfo = document.createElement("div");
  userInfo.className = "userinfo";

  const username = document.createElement("p");
  username.textContent = data.name;
  userInfo.append(username);

  const userJob = document.createElement("p");
  userJob.textContent = data.job;
  userInfo.append(userJob);

  return userInfo;
}

const createSocialMedia = () => {
  const socialBox = document.createElement("ul");
  socialBox.className = "socialbox";

  mediaIcons.forEach(icon => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = icon.svg;
    a.href = icon.url;
    a.target = "_blank";
    li.append(a);
    
    socialBox.append(li);
  });

  return socialBox;
}