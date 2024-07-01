function menuPage() 
{
const contentDiv = document.querySelector('div#content');
const headerText = document.createElement('h1');
headerText.textContent = 'Menu';
contentDiv.appendChild(headerText);
const bodyText = document.createElement('p');
bodyText.textContent = `Hors d'Oeuvres (Appetizers)

Escargots à la Bourguignonne: Tender Burgundy snails bathed in garlic butter and herbs.
Foie Gras Torchon: Delicately spiced duck liver torchon with toasted brioche and fig compote.
Soupe à l'Oignon Gratinée: Classic French onion soup with a rich beef broth, caramelized onions, and a Gruyère cheese crust.
Plats Principaux (Main Courses)

Boeuf Bourguignon: Slow-braised beef in a robust red wine sauce with vegetables and pearl onions.
Filet Mignon au Poivre Vert: Pan-seared filet mignon with a cracked green peppercorn sauce and cognac cream.
Poulet Roti aux Herbes de Provence: Roasted free-range chicken with aromatic herbs from Provence.
Bar en Papillote: Fresh sea bass steamed in parchment paper with white wine, herbs, and seasonal vegetables.
Desserts

Crêpe Suzette: Flambéed crepes with orange liqueur and a Grand Marnier sauce.
Soufflé au Chocolat: Light and airy chocolate soufflé.
Tarte Tatin: Classic upside-down apple tart with a caramelized sugar crust.`

contentDiv.appendChild(bodyText);
}

export default menuPage;
