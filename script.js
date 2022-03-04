//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes,allEpisodes.length);
}
// This function format season and episode numbers
const formatTitleNumbers = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
}

//This function creates  container and append images and paragraphs to the container
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

//Live search input, case sensitive, displays summary or episode that contains the search term

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
const episodeLists = getAllEpisodes();
const filterEpisodeList = episodeLists.filter((episode) => {
return episode.name.toLowerCase().includes(e.target.value.toLowerCase()) || episode.summary.toLowerCase().includes(e.target.value.toLowerCase());
});


makePageForEpisodes(filterEpisodeList,episodeLists.length);

})

const selectEpisode = document.getElementById("selectEpisode");




//Adding episode selector
/* const selectEpisode = document.getElementById("selectEpisode");
selectEpisode.addEventListener("select", (e) => {
const theListOfEpisodes = getAllEpisodes();
const filterTheEpisodeList = theListOfEpisodes.filter((episode) => {
  return episode.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    episode.summary.toLowerCase().includes(e.target.value.toLowerCase())
});
  makePageForEpisodes(filterTheEpisodeList);
})
 */

//adding episode selector
//const selectEpisode = document.getElementById("selectEpisode");








function makePageForEpisodes(episodeList, displayEpisodes) {
  console.log(displayEpisodes);
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  rootElem.innerHTML= "";
const displayingEpisodes = document.createElement("p");
displayingEpisodes.innerText = `displaying ${episodeList.length} / ${displayEpisodes} `
rootElem.appendChild(displayingEpisodes);

episodeList.forEach((episode) => {
const episodeContainer = createEpisodeContainer(episode);
rootElem.appendChild(episodeContainer);
  })

}

window.onload = setup;
