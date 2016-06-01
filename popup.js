// random number b/w 0-100

var randIdx = Math.floor(Math.random() * 100);

//array with all id's
var vocabID = items.map(function(el,idx,arr){
  return el.id;
})

//array with all jpn vocab
var vocabJPN = items.map(function(el,idx,arr){
  return el.cue.content.text;
})

document.getElementById('vocabJPN').innerHTML = vocabJPN[randIdx];

//array with all eng vocab
var vocabENG = items.map(function(el,idx,arr){
  return el.response.content.text;
})

document.getElementById('vocabENG').innerHTML = vocabENG[randIdx];

//array with all pictures
var vocabPic = items.map(function(el,idx,arr){
  return el.cue.related.sentences[0].image
})

document.getElementById('vocabPic').innerHTML = `<img src="${vocabPic[randIdx]}"/>`;

//array with all readings
