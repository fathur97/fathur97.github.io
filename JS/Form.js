function displayalert(form){ 
			var Namastr     = (document.fForm.Nama.value);
			var TTLstr      = (document.fForm.TTL.value);
			var Goldarstr   = (document.fForm.Goldar.value);
			var Alamatstr   = (document.fForm.Alamat.value);
			var Agamastr    = (document.fForm.Agama.value);
			var Komentarstr = (document.fForm.Komentar.value);
			var Status = ""; 
			var Namastr = "";
			var TTLstr = "";
			var Tampil1 = "";
			var Goldarstr = "";
			var Agamastr = "";
			var Komentarstr = "";
			var Ket1 = "";
			var Ket2 = "";
			var Ket3 = "";
			var Ket4 = "";
				 
		//Memilih Jenis Penyakit
			if(fForm.Jantung.checked == true){
				Ket1 = "Jantung Koroner";
			}			
			if(fForm.Kanker.checked == true){
				Ket2 = "Kanker";
			}
			if(fForm.Stroke.checked == true){
				Ket3 = "Stroke";
			}
			if(fForm.HIV.checked == true){
				Ket4 = "HIV";
			}

		//Memilih Jenis Kelamin
			if(fForm.Kelamin.checked == true){
				Status = "Laki-Laki";
			}
			else if(fForm.Kelamin.checked == true){
				Status = "Perempuan";
			}
				Tampil = Status;
				
		//Menampilkan Isi Form
		alert("Nama Anda  : " + Namastr + "\nTempat dan Tanggal Lahir : " + TTLstr + "\nJenis Kelamin : " + Tampil +
			 "\nGolongan Darah : " + Goldarstr +"\nAgama : "+ Agamastr + "\nAlamat : " + Alamatstr + "\nKonsultasi Penyakit : " + Ket1 + " " + Ket2 + " " + Ket3 + " "+ Ket4 +
			 "\nRiwayat Penyakit : " + "\n" + Komentarstr);
	}
