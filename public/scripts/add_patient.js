const nxtBtn = document.querySelector("#nxt_btn")
const prevBtn = document.querySelector("#prev_btn")
const formSlider = document.querySelector("#form_slider")
const sliders = document.querySelectorAll(".patient__form")
const city = document.querySelector("#city")
const state = document.querySelector("#state")
const uploadArea = document.querySelector("#upload_area")
const uploadText = document.querySelector("#upload_text")
const patientImg = document.querySelector("#patient_img_upload")
const imgUploadBtn = document.querySelector("#img_upload_btn")
const headerTitle = document.querySelector("#header_title")
const btnContainer = document.querySelector("#btn_container")

let count = 0
let slider = 0
let moveSlide = 100 / sliders.length; 
let maxSlide = sliders.length + 1
let filled = true
let file
let submitForm = false
let fields = true



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

const formText = ["Patient Identity Information","Patient Location Information","Patient Registration Types ","Patient Personal Information","Patient Guardian","Upload Patient Photo"]

const formTitle = () => {
    headerTitle.innerHTML = formText[slider]
    // if (count <= moveSlide) {
    //     headerTitle.innerHTML = "Patient Identity Information"
    // }
    console.log("slider", slider);
}


const nextSlide = (e) =>{
    if(submitForm == false){
        e.preventDefault()  
    } 
    const slide = document.querySelector(`#form-${slider + 1}`)
    const requiredFields = slide.querySelectorAll(".required")

    requiredFields.forEach(inp => {
        if (!inp.value) {
            fields = false
            inp.classList.toggle("invalid")
        } else {
            fields = true
        }
    })
    
    if (fields == true) {
        if(count <= maxSlide * 10) {
            slider++
            formTitle()
            count = count + moveSlide
            formSlider.style.transform = `translateY(-${count}%)` 
        } 
        if (count >= moveSlide) {
            prevBtn.classList.add("btn_show")
        }
    }
}

const prevSlide = (e) =>{
    e.preventDefault()
    if(count >= 0) {
        count = count - moveSlide
        slider--
        formTitle()
    } 
    count <= 0 ? prevBtn.classList.remove("btn_show") : ""
    if (count < moveSlide) {
        formSlider.style.transform = `translateY(0%)` 
    }
    formSlider.style.transform = `translateY(-${count}%)`
}

nxtBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)

//---------- UPLOAD FILE FUNC -------------
//-----------------------------------------
imgUploadBtn.addEventListener("click", function(e) {
    e.preventDefault()
    patientImg.click()
})
const uploadScope = () => {
    let fileType = file.type //get file type from upload file
    let validFile = ["image/jpeg","image/jpg","image/png"] //accepted file type 

    if(validFile.includes(fileType)) {
        let fileReader = new FileReader()
        fileReader.onload = () => {
            let fileUrl = fileReader.result
            let uploadedImg = `<img src=${fileUrl} alt="Upload file"/>`
            uploadArea.innerHTML = uploadedImg

            console.log(fileUrl);
        }
        fileReader.readAsDataURL(file)
    } else {
        uploadText.innerHTML = "<h2>Not an image, only image are allowed</h2>"
    }
} 
patientImg.addEventListener("change", function() {
    file = this.files[0]
    uploadScope()
})
uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    uploadArea.classList.add("upload_active")
    uploadText.innerHTML = "<h2>Release File to Upload</h2>"
})
uploadArea.addEventListener("dragleave", (e) => {
    e.preventDefault()
    uploadArea.classList.remove("upload_active")
    uploadText.innerHTML = "<h2>Drag & Drop File Here to Upload</h2>"
})
uploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    file = e.dataTransfer.files[0] //select file from upload
    uploadScope()
})
