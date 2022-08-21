import axios from "axios";

// getMusician fetches 25 artists and makes an object containing {name, id, score, country} and returns it

export const getMusician = async (searchText) => {
  var opt;
  await axios
    .get(`https://musicbrainz.org/ws/2/artist/?query=${searchText}&fmt=json`, {
      headers: { "User-Agent": "UniProject/1.0 (benjamin.karimaei@gmail.com)" },
    })
    .then((res) => {
      opt = res.data;
    })
    .catch(function (e) {
      console.log(e);
    });
  opt = opt.artists.map((artist) => ({
    id: artist.id,
    name: artist.name,
    score: artist.score,
    country: artist?.area?.name,
  }));
  return opt;
};

// getOnesAlbums fetches at first all the albums of an artists and iterate the list and fetches the album covers and add it to an object
// containing {id, title, img, primaryType, releaseDate} and returns it

export const getOnesAlbums = async (id) => {
  var opt;
  await axios
    .get(
      `https://musicbrainz.org/ws/2/artist/${id}?inc=release-groups&fmt=json`,
      {
        headers: {
          "User-Agent": "UniProject/1.0 (benjamin.karimaei@gmail.com)",
        },
      }
    )
    .then((res) => {
      opt = res.data;
    })
    .catch(function (e) {
      console.log(e);
    });

  opt = opt["release-groups"].map(async (album) => {
    var fetchedImg = "";
    await axios
      .get(`https://coverartarchive.org/release-group/${album.id}`, {
        headers: {
          "User-Agent": "UniProject/1.0 (benjamin.karimaei@gmail.com)",
        },
      })
      .then((res) => {
        return (fetchedImg = res.data.images[0].thumbnails.small);
      })
      .catch(function (e) {
        console.log(e);
      });
    return {
      id: album.id,
      title: album.title,
      img: fetchedImg,
      primaryType: album["primary-type"],
      releaseDate: album["first-release-date"],
    };
  });

  var results = await Promise.all(opt);
  return results;
};
