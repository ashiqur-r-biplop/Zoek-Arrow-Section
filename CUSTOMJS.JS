document
  .getElementById("button-IoaiCEj_gM_btn")
  .addEventListener("click", function () {
    const webContainer = document.getElementById("row-AOE3ETy5py");
    const ECommerceContainer = document.getElementById("row-KZxga_DHGJ");
    webContainer.style.display = "block";
    ECommerceContainer.style.display = "none";
    const btn1 = document.getElementById("button-IoaiCEj_gM_btn");
    const btn2 = document.getElementById("button-HMTGpArsQy_btn");
    btn1.classList.add("button-active");
    btn2.classList.remove("button-inactive");
  });
document
  .getElementById("button-HMTGpArsQy_btn")
  .addEventListener("click", function () {
    const webContainer = document.getElementById("row-AOE3ETy5py");
    const ECommerceContainer = document.getElementById("row-KZxga_DHGJ");
    webContainer.style.display = "none";
    ECommerceContainer.style.display = "block";
    const btn1 = document.getElementById("button-IoaiCEj_gM_btn");
    const btn2 = document.getElementById("button-HMTGpArsQy_btn");
    btn2.classList.add("button-active");
    btn1.classList.remove("button-inactive");
  });
function onload() {
  const webContainer = document.getElementById("row-AOE3ETy5py");
  const ECommerceContainer = document.getElementById("row-KZxga_DHGJ");
  webContainer.style.display = "block";
  ECommerceContainer.style.display = "none";
  const btn1 = document.getElementById("button-IoaiCEj_gM_btn");
  const btn2 = document.getElementById("button-HMTGpArsQy_btn");
  btn1.classList.add("button-active");
  btn2.classList.remove("button-inactive");
}
onload();
