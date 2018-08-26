let letters = document.querySelectorAll('.nom-complet'),
    areOver=0
for (letter of letters) {  
  letter.addEventListener('mouseover',function (e) {
    areOver=0;
    document.getElementsByClassName('nom')[0].className="nom-show"
  })
  letter.addEventListener('mouseout',function (e) {
    document.getElementsByClassName('nom-show')[0].className="nom"
  })

}