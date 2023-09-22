document.addEventListener("DOMContentLoaded", () => {
    const sidebarBtn = document.querySelector("#button-sidebar");
    const sidebar = document.querySelector(".sidebar");
    const headerSection = document.querySelector(".navbar");
  
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("show");
      headerSection.classList.toggle("show");
      document.body.classList.toggle('no-scroll');
      console.log("clicked");
    });
  });