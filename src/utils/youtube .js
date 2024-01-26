const google = require("googleapis");

const apikey = "AIzaSyCKhlYyN9WpAwUArbsM0fbVgdbSnsfIjfM";

const playlistId = "PLavw5C92dz9Ef4E";

const youtube = google.youtube_v3({
  id: playlistId,
});

const fetchPlaylistDetails = async () => {
  const res = await youtube.playlists.list({
    part: "snippet,contentDetails",
    id: playlistId,
  });
  console.log(res);
};

fetchPlaylistDetails();
