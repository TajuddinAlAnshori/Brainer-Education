// Tambahkan kode JavaScript kalian di file ini
'use strict';

/**
 * navbar variables
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});

function handleGetFormData() {
  const nameInput = document.getElementById('name');
  const cityInput = document.getElementById('city');
  const emailInput = document.getElementById('email');
  const zipCodeInput = document.getElementById('zip-code');
  const statusInput = document.getElementById('status');

  const formData = {
    name: nameInput.value,
    city: cityInput.value,
    email: emailInput.value,
    zipCode: zipCodeInput.value,
    status: statusInput.checked,
  };

  return formData;
}

function isNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked() {
  const checkbox = document.getElementById("status");
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}
function validateFormData(formData) {
  if (!formData) {
    return false;
  }
  
  if (isNaN(formData.zipCode)) {
    return false;
  }
  
  if (!checkboxIsChecked()) {
    return false;
  }
  
  return true;
}
function submit(event) {
  event.preventDefault(); 
  if (validateFormData(getFormData())) {
    document.getElementById("warning").textContent = ""; 
  } else {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi"; 
}

// Menghubungkan function submit dengan form pada file HTML
document.getElementById("form").addEventListener("submit", submit);
}
function submit(e) {
    // e.preventDefault(); // Mencegah form untuk melakukan refresh halaman
    const formData = handleGetFormData();
    if (validateFormData(formData)) {

        document.getElementById('warning').innerHTML = '';

        console.log('data berhasil ditambah');
    } else {

        document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi';
    }
}

document.getElementById('form').addEventListener('submit', submit);



