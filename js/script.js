    let inputBox = document.getElementById("input-box");
    let url = document.querySelector(".urlform");
    let title = document.querySelector("#title");
    let description = document.querySelector("#description");
    let image = document.querySelector("#image");
    let weblink = document.querySelector("#weblink");

    
    url.addEventListener("submit", (event) => {
      event.preventDefault();
      let website = inputBox.value;

      let response = fetch(`https://api.linkpreview.net/?key=2de5a75d6cb4b9c3347edaf2f786b3e5&q=${website}`)
      .then((response) => response.json())
      .then((data) => {

          title.innerHTML = data.title;

          description.innerHTML = data.description;

          if(data.image == ""){
            image.alt = "Image is not available";
          }
          else{
            image.src = data.image;
          }

          weblink.href = data.url;
      });

    });
