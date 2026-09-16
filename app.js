let hesaplar = JSON.parse(localStorage.getItem('hesaplar')) || {};

function kayitOl() {
    let ad = document.getElementById("kullanici-adi").value;
    let sif = document.getElementById("sifre").value;

    if (ad === "" || sif === "") {
        document.getElementById("mesaj").innerText = "Lütfen ad ve şifre girin!";
        return;
    }
    if (hesaplar[ad]) {
        document.getElementById("mesaj").innerText = "Bu kullanıcı adı alınmış!";
    } else {
        hesaplar[ad] = { sifre: sif, xp: 0, level: 1 };
        localStorage.setItem('hesaplar', JSON.stringify(hesaplar));
        document.getElementById("mesaj").innerText = "Kayıt başarılı! Giriş yapabilirsin.";
    }
}

function girisYap() {
    let ad = document.getElementById("kullanici-adi").value;
    let sif = document.getElementById("sifre").value;

    if (hesaplar[ad] && hesaplar[ad].sifre === sif) {
        document.getElementById("giris-ekrani").style.display = "none";
        document.getElementById("sohbet-ekrani").style.display = "block";
        document.getElementById("hosgeldin-yazisi").innerText = "Hoş Geldin, " + ad + "!";
        document.getElementById("xp-gosterge").innerText = hesaplar[ad].xp;
        document.getElementById("seviye-gosterge").innerText = hesaplar[ad].level;
    } else {
        document.getElementById("mesaj").innerText = "Hatalı kullanıcı adı veya şifre!";
    }
}

function cikisYap() {
    document.getElementById("giris-ekrani").style.display = "block";
    document.getElementById("sohbet-ekrani").style.display = "none";
    document.getElementById("kullanici-adi").value = "";
    document.getElementById("sifre").value = "";
    document.getElementById("mesaj").innerText = "";
}
