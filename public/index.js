

function loadimage(){
  fetch ("https://picsum.photos/400/300")
  .then ((response)=>{
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    console.log("Image fetched: ", response.url);
    document.getElementById("image").src = response.url;
  })
  .catch((error)=>{
    console.error("There was a problem with the fetch operation:", error);
  });
}

 loadimage()
 