var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    
    } 
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-content");
    }
     event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");

    

    
    
    
    
    



}
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwMpGT_j7C4PPMuEDaEQG77i3Ds9r43j8yBF6lay03jKEbTBAIlw5Qpv54Odyl_pFce/exec'
  const form = document.forms['submit-to-google-sheet']
  const mesg = document.getElementById("mesg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        mesg.innerHTML = "The message sent sucessfully"
        setTimeout(function () {
            mesg.innerHTML = ""
            
        },5000)
        form.reset()
      })
      
      .catch(error => console.error('Error!', error.message))
  })





