import axios from "axios";

// getMusician fetches 25 artists and makes an object containing {name, id, score, country} and returns it

export const getMusician = async (searchText) => {
  var opt;
  await axios
    .get(
      `  https://music-backend-theta.herokuapp.com/api/get_artists?name=${searchText}`
    )
    .then((res) => {
      opt = res.data;
    })
    .catch(function (e) {
      console.log(e);
    });

  return opt;
};

// getOnesAlbums fetches at first all the albums of an artists and iterate the list and fetches the album covers and add it to an object
// containing {id, title, img, primaryType, releaseDate} and returns it

export const getOnesAlbums = async (id) => {
  var opt;
  await axios
    .get(`  https://music-backend-theta.herokuapp.com/api/get_albums?id=${id}`)
    .then((res) => {
      opt = res.data;
    })
    .catch(function (e) {
      console.log(e);
    });

  return opt;
};
