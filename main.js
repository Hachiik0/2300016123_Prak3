let isDarkMode = false; // Status mode gelap
let currentFontSize = 16; // Ukuran font saat ini

function addTask() {
    const taskInput = document.getElementById("newTask"); // Mengambil nilai dari input
    const taskList = document.getElementById("taskList"); // Mengambil elemen <ul> untuk menampilkan task

    // Mengecek apakah input tidak kosong
    if (taskInput.value.trim() !== "") {
        const listItem = document.createElement("li"); // Membuat elemen <li> baru
        listItem.textContent = taskInput.value; // Menambahkan teks dari input ke <li>

        // Membuat tombol "Delete" untuk setiap task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "hapus";
        deleteButton.classList.add("close");
        deleteButton.onclick = function() {
            deleteTask(listItem); // Panggil fungsi deleteTask saat tombol "Delete" diklik
        };

        // Menambahkan tombol "Delete" ke elemen <li>
        listItem.appendChild(deleteButton);

        // Menambahkan <li> ke dalam <ul>
        taskList.appendChild(listItem);

        // Mengosongkan input setelah task ditambahkan
        taskInput.value = "";
    } else {
        alert("Masukin Tugas lu dulu woii"); // Alert jika input kosong
    }
}

// Fungsi untuk menghapus task
function deleteTask(taskItem) {
    taskItem.remove(); // Menghapus elemen <li> dari task list
}

function changeBackgroundColor() {
    const colorSelector = document.getElementById('colorSelector');
    const selectedColor = colorSelector.value;
    document.body.style.backgroundColor = selectedColor;
}

function increaseFontSize() {
    currentFontSize += 2; // Meningkatkan ukuran font sebesar 2px
    document.body.style.fontSize = currentFontSize + 'px';
}

function decreaseFontSize() {
    currentFontSize = Math.max(10, currentFontSize - 2); // Mengurangi ukuran font dengan batas minimum 10px
    document.body.style.fontSize = currentFontSize + 'px';
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode; // Mengubah status mode gelap
    document.body.classList.toggle('dark-mode', isDarkMode); // Menggunakan class CSS untuk mengubah mode

    // Mengubah teks tombol berdasarkan status mode
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.textContent = isDarkMode ? "Toggle Normal Mode" : "Toggle Dark Mode";
}

function changeFontStyle() {
    const fontSelect = document.getElementById('fontchange'); // Mengambil elemen dropdown
    const selectedFont = fontSelect.value; // Mendapatkan nilai yang dipilih

    // Mengubah font untuk seluruh body
    document.body.style.fontFamily = selectedFont; // Menerapkan gaya font ke seluruh halaman

    // Menerapkan font yang dipilih ke elemen dropdown
    fontSelect.style.fontFamily = selectedFont; // Mengubah font untuk elemen select

    // Mengubah font untuk semua tombol
    const buttons = document.querySelectorAll('.tombol-tampilan button'); // Mengambil semua tombol
    buttons.forEach(button => {
        button.style.fontFamily = selectedFont; // Menerapkan gaya font ke setiap tombol
    });
}





