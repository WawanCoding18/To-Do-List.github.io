
// hari
const hariBiasa = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Ahad"]

const hari = new Date()
const hariSekarang = hari.getDay()
const hariIni = hariBiasa[hariSekarang]

var Day = document.getElementById("Day")
Day.innerHTML = hariIni+",";

//bulan
const bulanBiasa = ["Januari", "Februari", "Maret", 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

 const bulan = new Date()
 const bulanSekarang = bulan.getMonth()
 const bulanIni = bulanBiasa[bulanSekarang]

var Month = document.getElementById("Month")
Month.innerHTML = bulanIni;
//Tanggal
const Tanggal = new Date ()
const TanggalSekarang = Tanggal.getDate()

var TGL = document.getElementById("TGL")
TGL.innerHTML = TanggalSekarang+',';

//Tahun 
const Tahun = new Date()
const TahunSekarng = Tahun.getFullYear()

var Tahun1  = document.getElementById("Tahun")
Tahun1.innerHTML = TahunSekarng;


//menyimpan var yang dari html ke js
const ListTodo = document.getElementById("ListTodo")
const inputBox = document.getElementById("input-box")
const musicTodo = document.getElementById("sound")
const todo = document.getElementById("todo")

//Fungsi AddTask
function AddTask(){
  if(inputBox.value.trim() === ''){
    alert('Harus tulis !')
  }
  else{
    //untuk menambah element <li></li> saat add dipencet
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    ListTodo.appendChild(li)
    saveData()
         

    //untuk menambah element edit saat add dipencet
    let edit = document.createElement("span")
    edit.innerHTML = 'Edit'
    edit.className = 'edit-button'//buat membuat kelas edit
    li.appendChild(edit)
    
    
     
    //untuk menambah element exit saat add dipencet
    let exit = document.createElement("exit")
    exit.innerHTML = "\u00d7";
    exit.className = "exit-button"
    li.appendChild(exit)
    saveData();
  }
  inputBox.value=''
  saveData();
}

ListTodo.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
     if(e.target.classList.toggle("checked")){
        e.target.classList.add("checked")

        //keluar music ketika dipencet<li></li>
      musicTodo.currentTime = 0
      musicTodo.play()
     }
     else{
      //Jika pencet dari tanda ceklis ke semula ga akan ada efect suaranya
      e.target.classList.remove("checked")
     }
       saveData()
       
    
    }
    //Jika pencet logo exit maka akan menghapus element<li></li>
    else if (e.target.tagName === "EXIT"){
        e.target.parentElement.remove()
        saveData();

    }
    //untuk mengecek apakah ini class nya sesuai css
    else if(e.target.classList.contains("edit-button")){
      //untuk edit mengarah ke <li></li> sehingg saat dipencet editnya <li></li> bereaksi
      let gantiText = e.target.parentElement.firstChild;
      //untuk menampilkan prompt saat edit di klik
      let Textbaru = prompt("Silahkan di edit!", gantiText.textContent)
      //jika selesai di edit terus pencet ok maka akan menghasilkan name yang sesuai editan
      if(Textbaru !== null){
        gantiText.textContent = Textbaru;
        saveData()
      }
    }
    
}, false)

//buat jika enter di klik maka akan mengirim text juga
inputBox.addEventListener("keydown", function(enter){
  if(enter.key === "Enter"){
    enter.preventDefault()
    AddTask()
  }
})


//Untuk menyimpan data di browser, sehingga saat di reload tetep
function saveData(){
    localStorage.setItem("data", ListTodo.innerHTML)
}

function showTask(){
    ListTodo.innerHTML = localStorage.getItem("data")
}

showTask()

  //Variable: tempat untuk menyimpan data

        //var = data dapat diperbaharui dan dideklarasikan ulang.
        //let = data dapat diperbaharui namun tidak dapat dideklarasikan.
        //cosnt = data tidak dapat diperbaharui dan tidak dapat dideklarasikan.