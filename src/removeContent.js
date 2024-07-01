function removeContent (div){
    while (div.firstChild) {
        div.removeChild(div.lastChild);
      }


}
export default removeContent;