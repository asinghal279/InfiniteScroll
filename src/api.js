import axios from "axios";

const url = "https://randomuser.me/api/?";

export const getProfiles = (gender, nationality) => {
  axios
    .get("https://randomuser.me/api/?results=10&nat=us,dk,fr,gb")
    .then((response) => response)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
