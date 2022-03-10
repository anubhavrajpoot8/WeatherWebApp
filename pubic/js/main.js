const cityName = document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_Name=document.getElementById('city_Name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');


const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_Name.innerText = `plz write the name before search`;
    }
    else{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=26557874a2b9842f4b1a9a8ea1e69cf9`;
            const responce = await fetch(url);
            const data = await responce.json();
            const arrData = [data];
            city_Name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            
            let tempMood = arrData[0].weather[0].main;
            if(tempMood === "Clear"){
                temp_status.innerHTML=
        
                '<i class="fas fa-sun" style="color:#eccc68;"></i>';
            }
            else if(tempMood ==="Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else if(tempMood ==="Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else {
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
    }
}
submitBtn.addEventListener('click',getInfo);
