	function Kesehatan(){
		var Namastr   = (document.fForm.Nama.value);
		var TTLstr      = (document.fForm.TTL.value);
		var Goldarstr   = (document.fForm.Goldar.value);
		var Agamastr    = (document.fForm.Agama.value);
		var Komentarstr = (document.fForm.Komentar); 
		var Status1str  = " ";
		var Status2str  = " ";
		var Ket1 ;
		var Ket2 ;
		var Ket3 ;
		var Ket4 ;

			//M
			if(fForm.Kelamin.checked == true){
				Status1 = "Laki-Laki";
			}
			else{
				Status1 = "Perempuan";
			}
				Tampil1 = Status;
			
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
				Tampil2 = Ket1 + " , "+ ket2 + " , " + Ket3 + " , " + Ket4;
		
		    //Menampilkan Isi Form
		alert("Nama Anda  : " + Namastr + "\nTempat dan Tanggal Lahir : " + TTLstr + "\nJenis Kelamin : " + Tampil1 +
			 "\nGolongan Darah : " + Goldarstr +"\nAgama : "+ Agamastr + "\nAlamat : " + "\nKonsultasi Penyakit" + Tampil2 +
			 "\nRiwayat Penyakit : " + Komentarstr);
	}