//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

const formatTitleNumbers = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
}
function createEpisodeContainer (episode){
  const episodesContainer = document.createElement("div");
  const movieTitle = document.createElement("p");
  movieTitle.innerText = `${episode.name} - S${formatTitleNumbers(
    episode.season
  )}E${formatTitleNumbers(episode.number)}`;
  const episodeIcons = document.createElement("img");
  episodeIcons.src = episode.image.medium;
  const episodeSummary = document.createElement("p");
  episodeSummary.innerHTML = episode.summary;

  episodesContainer.appendChild(movieTitle);
  episodesContainer.appendChild(episodeIcons);
  episodesContainer.appendChild(episodeSummary);

  return episodesContainer;
}


const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
const episodeLists = getAllEpisodes();
const filterEpisodeList = episodeLists.filter((episode) => {
return episode.name.toLowerCase().includes(e.target.value.toLowerCase()) || episode.summary.toLowerCase().includes(e.target.value.toLowerCase());
});

makePageForEpisodes(filterEpisodeList);
})



function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  rootElem.innerHTML= "";
  episodeList.forEach((episode) => {
  
const episodeContainer = createEpisodeContainer(episode);


  rootElem.appendChild(episodeContainer);
 
  })

  


  

}

window.onload = setup;
