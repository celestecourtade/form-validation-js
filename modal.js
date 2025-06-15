
  const modal = document.getElementById("gameModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const confirmBtn = document.getElementById("confirmBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  openBtn.onclick = () => {
    modal.style.display = "block";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  cancelBtn.onclick = () => {
    alert("Has cancelado el desafío.");
    modal.style.display = "none";
  };

  confirmBtn.onclick = () => {
    alert("¡Vamos al siguiente nivel!");
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if(event.target === modal) {
      modal.style.display = "none";
    }
  };
