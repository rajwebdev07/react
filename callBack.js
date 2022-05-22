function showLoadingScreen(){
  console.log('1- loading screen appeared');
}


function hideLoaidngScreen(){
  console.log('4- Hiding screen appeared');
}

function getApiData(hideLoaidngScreen){
  console.log('2-start pulling data')
  
  setTimeout(()=>{
    
    console.log('3-finish pulling data') 
hideLoaidngScreen();
      
  },2000);
 
}

showLoadingScreen();
getApiData(hideLoaidngScreen);
