const paddy=["Nursery","Tillering","Panicle Initiation to Booting","Flowering","Maturity & Harversting"]
const wheat=["Germination", "Tillering", "Jointing & Stem Elongation" , "Flowering ", "Harvesting"]
const Maize=["Germination", "Vegetative", "Tasseling & Polination" , "Gain Filling ", "Harvesting"]
const Goundnut=["Seed Germination", "Vegetative Growth", "Flowering & Pegging" , "Pod Formation ", "Harvesting"]
const Sugarcane=["Germination", "Tillering", "Grand Growth" , "Maturity ", "Harvesting"]


const random =Math.floor(Math.random()*99);
const random2 =Math.floor(Math.random()*5);

const moist = document.getElementById('moist');
const stage = document.getElementById('stage');
const plant = document.getElementById('Plant');


const ai1 =document.getElementById('ai1')
const ai2 =document.getElementById('ai2')
const cal=document.getElementById('CalculateYourSelf')
const rec=document.getElementById('Rec');

cal.addEventListener('click', () => {
    ai1.style.display="flex";
    ai2.style.display="none";
})
rec.addEventListener( 'click', () =>{
    ai1.style.display="none";
    ai2.style.display="flex";
})







const rangeInput = document.getElementById("rangeInput");
        const rangeValue = document.getElementById("rangeValue");
        rangeInput.addEventListener("input", function () {
            rangeValue.textContent = rangeInput.value;
});