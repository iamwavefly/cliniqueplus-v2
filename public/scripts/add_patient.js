const nxtBtn = document.querySelector("#nxt_btn")
const city = document.querySelector("#city")
const state = document.querySelector("#state")

let count = 1

nxtBtn.addEventListener("click", function(e) {
    const slide = document.querySelector(`#form-${count}`)
    slide.style.zIndex = `${count}`
    count++
})

function cityByState(){
    fetch("./assets/cityByState.json")
        .then(res => res.json())
        .then(data => {
            state.addEventListener("change", handleState = (e) => {
                let cityOption = ""
                for(cityId in data[e.target.value]){
                    cityOption += "<option>" + data[e.target.value][cityId] + "</option>"
                }
                city.innerHTML = cityOption
            })
        })
}

cityByState()
