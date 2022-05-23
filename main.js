

async function getApiData(){
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  var data = await response.json()
  createBreedList(data.message)
}

getApiData();

function createBreedList(data){
     console.log('from my function', data)
     document.getElementById('breed').innerHTML = `
        <select onChange="myFunction(this.value)">
          <option>Choose a dog breed</option>
          ${Object.keys(data).map((dog)=>{
              return `<option>${dog}</option>`
          })}
        </select>
     `;

}

function myFunction(test){
    alert('i am changed '+ test);
}
