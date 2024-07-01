import removeContent from "./removeContent";

function homePage() 
{
const contentDiv = document.querySelector('div#content');
removeContent(contentDiv);
const headerText = document.createElement('h1');
headerText.textContent = 'Home';
contentDiv.appendChild(headerText);
const bodyText = document.createElement('p');
bodyText.textContent = 'Steve\'s is a celebration of quality.  Our commitment to sourcing the finest ingredients, from meticulously raised livestock and sustainably caught seafood to seasonal produce at its peak, is the foundation of our culinary philosophy.  Experience the difference in every dish, where freshness and flavor take center stage.';
contentDiv.appendChild(bodyText);
}

export default homePage;
