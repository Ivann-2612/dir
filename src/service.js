import axios from "axios";


export const getAllAds = () => {
  return axios.get(`http://localhost:8055/items/Ads`);
};
export const getSingleAd = (id) => {
    return axios.get(`http://localhost:8055/items/Ads/${id}`);
  };

// export const getAllContactsByID = (id) => {
//   console.log(id);
//   return axios.get(`http://localhost:8055/items/Contact_Form/${id}`);
// };
// //Navigation pages content
// export const getAllNavigationContents = () => {
//   return axios.get(`http://localhost:8055/items/Navigation?fields=*.*`);
// };
// //Navigation single pages content
// export const getAllSingleNavigationContents = (id) => {
//   return axios.get(`http://localhost:8055/items/Navigation/${id}`);
// };


