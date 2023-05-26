import { btoa } from "abab";

const getContactHref = (name: string, contact: string) => {
  const hrefs: { [key: string]: string } = {
    email: btoa(contact) || "",

    medium: `https://medium.com/${contact}`,
    github: `https://github.com/${contact}`,

    twitter: `https://www.twitter.com/${contact}`,

    linkedin: `https://www.linkedin.com/in/${contact}`,
    youtube: `https://www.youtube.com/channel/${contact}`,
 
  };

  return hrefs[name] ?? contact;
};

export default getContactHref;
