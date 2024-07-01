function aboutPage() 
{
const contentDiv = document.querySelector('div#content');
contentDiv.setAttribute('id', 'about');
const headerText = document.createElement('h1');
headerText.textContent = 'About';
contentDiv.appendChild(headerText);
const bodyText = document.createElement('p');
bodyText.textContent = 'Steeped in French cuisine, Steve\'s honors the heritage of fine dining while embracing contemporary innovation.  Our chefs, passionate about their craft, create dishes that are both familiar and surprising, a testament to the enduring power of culinary artistry.';
contentDiv.appendChild(bodyText);
}

export default aboutPage;
