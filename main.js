var phrase = prompt("Please enter a phrase");
getAcronym(phrase);

function getAcronym() {
  var acc = phrase[0];
  for (i=1; i < phrase.length; i++) {
    if(phrase[i] === ' ')
      acc += phrase[i + 1];
  };
  console.log("Acronymn: " + acc.toUpperCase());
};
