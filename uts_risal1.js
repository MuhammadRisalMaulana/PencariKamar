      function tampilkanJenisKelas() {
        var tarif = parseFloat(document.getElementById("tarif").value);
        var jenisKelas;
        
        if (tarif >= 175000 && tarif <= 300000) {
          jenisKelas = "Basic";
        } else if (tarif > 300000 && tarif <= 500000) {
          jenisKelas = "Deluxe";
        } else if (tarif > 500000 && tarif <= 1100000) {
          jenisKelas = "Superior";
        } else if (tarif > 1100000 && tarif <= 5000000) {
          jenisKelas = "President";
        } else {
          jenisKelas = "Error: Tarif diluar rentang yang ditentukan.";
        }
        
        document.getElementById("hasil").innerHTML = "Jenis kelas hotel: " + jenisKelas;
      }
