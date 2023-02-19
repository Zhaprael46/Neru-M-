// // Ambil elemen dengan id "count"
// const countElem = document.getElementById('count');

// // Ambil elemen tombol "Add To Cart" pada modal dengan index 0 dan 1
// const modalButtons = document.querySelectorAll('#staticBackdrop .modal-body button');

// // Inisialisasi variabel count dengan nilai awal 0
// let count = 0;

// // Tambahkan event listener pada setiap tombol "Add To Cart" di modal
// modalButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     if (count >= 2) {
//       alert('Maaf, jumlah item maksimal yang dapat ditambahkan ke keranjang adalah 2.');
//       return;
//     }

//     count += index + 1; // Tambahkan jumlah sesuai dengan index tombol
//     countElem.innerText = count; // Ubah nilai pada elemen "count"
//   });
// });

// Ambil elemen dengan id "count"
const countElem = document.getElementById('count');

// Ambil elemen tombol "Add To Cart" pada modal dengan index 0 dan 1
const modalButtons = document.querySelectorAll('#staticBackdrop .modal-body button');

// Inisialisasi variabel count dengan nilai awal 0
let count = 0;
let isButton1Clicked = false;

// Tambahkan event listener pada setiap tombol "Add To Cart" di modal
modalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (count >= 2) {
      alert('Maaf, jumlah item maksimal yang dapat ditambahkan ke keranjang adalah 2.');
      return;
    }

    if (index == 1 && isButton1Clicked) {
      alert('Maaf, jumlah item maksimal yang dapat ditambahkan ke keranjang adalah 2.');
      return;
    }

    count += index + 1; // Tambahkan jumlah sesuai dengan index tombol
    countElem.innerText = count; // Ubah nilai pada elemen "count"

    if (index === 0) {
      isButton1Clicked = true;
    }
  });
});
