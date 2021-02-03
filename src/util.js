//Media resize

export const smallImage = (imagePath, size) => {
  let image;
  if (imagePath) {
    image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games", `/media/resize/${size}/-/games`);
  } else {
    image = imagePath;
  }

  return image;
};

//if the path is 'a' replace it with patch 'b' which contains resize attributes
//works both for screenshots and games covers
