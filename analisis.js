// Program Konversi Nilai Angka ke Huruf

// Minta input dari user
let nilai = prompt("Masukkan nilai (0 - 100):");
nilai = parseInt(nilai);

// Konversi nilai ke huruf
let grade;

if (nilai >= 85 && nilai <= 100) {
    grade = "A";
} else if (nilai >= 70 && nilai <= 84) {
    grade = "B";
} else if (nilai >= 55 && nilai <= 69) {
    grade = "C";
} else if (nilai >= 40 && nilai <= 54) {
    grade = "D";
} else if (nilai >= 0 && nilai < 40) {
    grade = "E";
} else {
    grade = "Nilai tidak valid!";
}

// Tampilkan hasil
alert("Nilai Anda: " + grade);
console.log("Nilai Anda: " + grade);
