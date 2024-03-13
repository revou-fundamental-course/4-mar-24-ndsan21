// script.js
function calculateBMI() {
    var gender = document.getElementById('gender').value;
    var age = parseInt(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
  
    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
  
    if (gender === 'pria' && age >= 18) {
      bmi = parseFloat(bmi) + 1;
    } else if (gender === 'wanita' && age >= 18) {
      bmi = parseFloat(bmi) - 1;
    }
  
    var category = '';
    if (bmi < 18.5) {
      category = 'kurang';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = 'berlebih';
    } else {
      category = 'Kegemukan';
    }
  

    // Tampilkan hasil pada tampilan kedua
    document.getElementById('result').innerHTML = '<p>Hasil<p>'+ bmi + '<br>Anda memiliki Berat badan  ' + category;
    // Sembunyikan formulir
    document.getElementById('inputForm').style.display = 'none';
    // Tampilkan tampilan kedua
    document.getElementById('resultContainer').style.display = 'block';
  }
  
  function resetForm() {
    // Bersihkan nilai input
    document.getElementById('gender').value = 'pria';
    document.getElementById('age').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    // Sembunyikan tampilan kedua
    document.getElementById('resultContainer').style.display = 'none';
    // Tampilkan formulir
    document.getElementById('inputForm').style.display = 'block';
  }
  