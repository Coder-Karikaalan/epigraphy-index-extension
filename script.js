import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getFirestore, doc, getDoc,setDoc , updateDoc} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =  {
apiKey: "AIzaSyA7qnDe3WDplehd_zpwLLOvE8d0Awq5VP0",
authDomain: "epigraphy-index.firebaseapp.com",
projectId: "epigraphy-index",
storageBucket: "epigraphy-index.appspot.com",
messagingSenderId: "869887718659",
appId: "1:869887718659:web:832ed88d4cbc1a81b4e536"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);
const db =  getFirestore();

var search =  document.getElementById("search");

async function GetADocument(){
var epigraphyTamil = document.getElementById("epiTamil").value;


var ref = doc(db,"epigraphy-index",epigraphyTamil);
const docSnap = await getDoc(ref);

if(docSnap.exists()){
document.getElementById("epigraphyTamil").innerHTML =  docSnap.data().epigraphyTamil;
document.getElementById("epigraphy").innerHTML = docSnap.data().epigraphy;
document.getElementById("taluk").innerHTML = docSnap.data().taluk;
document.getElementById("district").innerHTML = docSnap.data().district;
document.getElementById("oldDistrict").innerHTML = docSnap.data().oldDistrict;
document.getElementById("state").innerHTML = docSnap.data().state;
document.getElementById("AREVol").innerHTML = docSnap.data().AREVol;
document.getElementById("AREPart").innerHTML = docSnap.data().AREPart;
document.getElementById("AREYear").innerHTML = docSnap.data().AREYear;
document.getElementById("AREInsNo").innerHTML = docSnap.data().AREInsNo;
document.getElementById("EIVol").innerHTML = docSnap.data().EIVol;
document.getElementById("EIPart").innerHTML = docSnap.data().EIPart;
document.getElementById("EIYear").innerHTML = docSnap.data().EIYear;
document.getElementById("EIInsNo").innerHTML = docSnap.data().EIInsNo;
document.getElementById("SIIVol").innerHTML = docSnap.data().SIIVol;
document.getElementById("SIIPart").innerHTML = docSnap.data().SIIPart;
document.getElementById("SIIYear").innerHTML = docSnap.data().SIIYear;
document.getElementById("SIIInsNo").innerHTML = docSnap.data().SIIInsNo;
document.getElementById("PKIVol").innerHTML = docSnap.data().PKIVol;
document.getElementById("PKIPart").innerHTML = docSnap.data().PKIPart;
document.getElementById("PKIYear").innerHTML = docSnap.data().PKIYear;
document.getElementById("PKIInsNo").innerHTML = docSnap.data().PKIInsNo;
document.getElementById("CIIVol").innerHTML = docSnap.data().CIIVol;
document.getElementById("CIIPart").innerHTML = docSnap.data().CIIPart;
document.getElementById("CIIYear").innerHTML = docSnap.data().CIIYear;
document.getElementById("CIIInsNo").innerHTML = docSnap.data().CIIInsNo;
document.getElementById("AVNVol").innerHTML = docSnap.data().AVNVol;
document.getElementById("AVNPart").innerHTML = docSnap.data().AVNPart;
document.getElementById("AVNYear").innerHTML = docSnap.data().AVNYear;
document.getElementById("AVNInsNo").innerHTML = docSnap.data().AVNInsNo;
document.getElementById("TNVol").innerHTML = docSnap.data().TNVol;
document.getElementById("TNPart").innerHTML = docSnap.data().TNPart;
document.getElementById("TNYear").innerHTML = docSnap.data().TNYear;
document.getElementById("TNInsNo").innerHTML = docSnap.data().TNInsNo;

document.getElementById("epiTable").style.display =  "block";
}
else{
alert("தரவு இல்லை");
}

}
search.addEventListener("click", GetADocument);