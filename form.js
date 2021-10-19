const scriptURL = 'https://script.google.com/macros/s/AKfycbw_BhD5IVuhF1T6z5AggHApGGsgmflboblViszpBVJpfj5qW5jOujVNtyFTdiPCdoRTGw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("You have successfully submitted."))
    .catch(error => console.error('Error!', error.message))
})