export function deleteRaw() {
    const table = document.querySelector(".tableRow")
    const redButton = document.querySelector(".deleteButton")
  
    redButton.addEventListener("click" , () => {
      table.remove();
    })

}

