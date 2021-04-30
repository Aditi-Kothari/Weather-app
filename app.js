const btn=document.getElementById("btn");
const loc=document.getElementById("location");
const tempIcon=document.getElementById("temp-icon");
const tempValue=document.getElementById("temp-value");
const climate=document.getElementById("climate");
const tempUnit=document.getElementById("temp-unit");
const input=document.getElementById("cityname");
let displaydate=document.getElementById("displaydate");
let iconFile;
btn.addEventListener("click", () => {
            const api=`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a81ce048c844d6e1176f8da8824bf565`;
            fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const {name} = data;
                const {feels_like} = data.main;
                const {id, main} = data.weather[0];
                loc.textContent= name;
                climate.textContent= main;
                tempValue.textContent= Math.round(feels_like-273);
                if (id<250){
                    tempIcon.src = 'storm.svg' ;
                  }
                  else if (id<350){
                    tempIcon.src = 'drizzle.svg' ;
                  }
                  else if (id<550){
                    tempIcon.src = 'rain.svg' ;
                  }
                  else if (id<650){
                    tempIcon.src = 'snow.svg' ;
                  }
                  else if (id<800){
                    tempIcon.src = 'atmosphere.svg' ;
                  }
                  else if (id===800){
                    tempIcon.src = 'sun.svg' ;
                  }
                  else if(id>800){
                    tempIcon.src = 'clouds.svg' ;
                  }
            })
       })


let d=new Date();
let dd=d.toDateString();
displaydate.innerHTML=dd;


