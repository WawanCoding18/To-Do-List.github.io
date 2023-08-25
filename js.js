ListTodo.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      if (!e.target.classList.contains("checked")) {
        e.target.classList.add("checked");
        // Memainkan efek suara
        clickSound.currentTime = 0;
        clickSound.play();
      } else {
        e.target.classList.remove("checked");
      }
      saveData();
    } else if (e.target.tagName === "EXIT") {
      e.target.parentElement.remove();
      saveData();
    }
  }, false);
  function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      ListTodo.innerHTML = savedData;
      const liElements = ListTodo.querySelectorAll("li");
      liElements.forEach((li) => {
        if (li.classList.contains("checked")) {
          li.classList.remove("checked");
        }
      });
    }
  }
    


  //buat ngecek apakah yang di edit sesuai class yang di css
  else if(e.target.classList.contains("edit-button")){
    //buat mengarah ke <Li></Li> tertentu ketika edit di pencet
    let taskText = e.target.parentElement.firstChild;

    //buat menampilkan prompt setelah edit di pencet 

    let newText = prompt("Silahkan edit!", taskText.textContext)

    //membuat conditional jika edit dipencet ok maka hasilnya akan keluar yang telah di edit

    if(newText!== null){
      taskText.textContext = newText
      saveData()
    }


