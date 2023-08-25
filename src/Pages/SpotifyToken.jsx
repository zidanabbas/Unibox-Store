import React, { useState, useEffect } from "react";
import axios from "axios";

function SpotifyToken() {
  const [token, setToken] = useState("");
  const CLIENT_ID = "492b44c7d050409a8a9f0371a70070ab";
  const CLIENT_SECRET = "b2d166b8f66d4aa89c647649685c711c";

  useEffect(() => {
    axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: "grant_type=client_credentials",
    })
      .then((response) => {
        setToken(response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CLIENT_ID, CLIENT_SECRET]);

  return (
    <div>
      <p>Spotify API Token: {token}</p>
    </div>
  );
}

export default SpotifyToken;
