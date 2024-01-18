const hideCard = function () {
  let editButton = document.getElementsByClassName("btn-sm")[1];

  editButton.addEventListener("click", () => {
    let thisCard = document.getElementsByClassName("col-md-4")[0];
    if (thisCard) {
      let parentElement = thisCard.parentElement;
      parentElement.removeChild(thisCard);
    }
  });
};
const getLibrary = function () {
  const myUrl = "https://api.pexels.com/v1/search?query=pets";
  const mySecondUrl = "https://api.pexels.com/v1/search?query=flowers";

  fetch(myUrl, {
    headers: {
      Authorization: "7YgLGOKsUYRTxTZsKOhQdVXqtnbWJHfPoumm3UmChWV1dsDDwERYiWHL",
    },
  })
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nella chiamata");
      }
    })

    //   SPAZIO DI LAVORO
    .then((data) => {
      console.log("DATA", data);
      const loadPhotos = function () {
        let loadButton = document.getElementById("first-button");
        loadButton.addEventListener("click", () => {
          let img = document.getElementsByTagName("img");
          let i = 0;
          data.photos.forEach((element) => {
            img[i].src = element.src.medium;
            i++;
            console.log(element.src.medium);
          });
        });
      };
      loadPhotos(data);
      hideCard();
    })

    .catch((err) => {
      console.log(err);
    });

  fetch(mySecondUrl, {
    headers: {
      Authorization: "7YgLGOKsUYRTxTZsKOhQdVXqtnbWJHfPoumm3UmChWV1dsDDwERYiWHL",
    },
  })
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nella chiamata");
      }
    })
    //  SPAZIO DI LAVORO

    .then((secondData) => {
      console.log("seconddata", secondData);
      const loadPhotos = function () {
        let loadButton = document.getElementById("second-button");
        loadButton.addEventListener("click", () => {
          let img = document.getElementsByTagName("img");
          let i = 0;
          secondData.photos.forEach((element) => {
            img[i].src = element.src.medium;
            i++;
            console.log(element.src.medium);
          });
        });
      };
      loadPhotos(secondData);
      hideCard();
    })
    .catch((err) => {
      console.log(err);
    });
};

getLibrary();
