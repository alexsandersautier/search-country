document.getElementById('card').style.setProperty('display','none','important')

function search(){
    
    let ACountry = document.getElementById('country').value
    let AEndPoint= `https://restcountries.com/v3.1/name/${ACountry}?fullText=true`
    fetch(AEndPoint)
        .then(function(response){
            if (response.status === 200) {
                document.getElementById('card').style.setProperty('display','block','important')
                return response.json();
            } else {
                document.getElementById('card').style.setProperty('display','none','important')
                throw new Error('The request failed. Status:' + response.status)
            }
        })
        .then(function(data){
            let flag = document.getElementById('flag')
            let capital= document.getElementById('capital')
            let cont= document.getElementById('cont')
            let pop= document.getElementById('pop')
            let names = document.getElementById('name')

            flag.src = (data[0].flags.svg)
            names.innerText = ACountry
            capital.innerText = data[0].capital
            cont.innerText = data[0].continents[0]
            pop.innerText = data[0].population

        })
        .catch(function(error) {
           alert(error);
        });
    ACountry.innerText = ''    
}
let ACountry = document.getElementById('country')
ACountry.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        search();
    }
})