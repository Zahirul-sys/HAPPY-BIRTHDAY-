const msg = `Yay dah naik 18 tahun! Mesti seronok kan dah jadi dewasa. Tak payah nak pergi sekolah dah. Boleh kerja dapat duit. Apa-apa pun moga panjang umur dan rezeki makin luas and enjoy ur birthday!

Actually aku happy ditakdirkan jumpa kau — banyak support aku and accept aku seadanya. Aku tak pernah terfikir pun aku akan ada partner study from another school. Lagi-lagi time SPM. Kau banyak giler tolong aku!

Honestly, aku bersyukur kau sudi luang masa ajar aku subjek yang aku lemah sebelum SPM. Thank you! Congratulations on ur SPM results! Kalau ada rezeki boleh straight A.

Thank you juga sebab support aku dari dulu sampai sekarang, banyak achievement aku dapat capai disebabkan sokongan kau. Sorry kalau aku tak boleh jadi kawan yang baik untuk kau dan banyak buat kau marah. Sorry sangat².

Btw, aku ada je selalu kalau kau nak luah apa-apa ke, nak cerita apa-apa ke aku akan dengar je. Kalau aku boleh bantu aku akan support kau. Thank you lagi sekali sebab accept aku as one of your friends.

Last but not least, aku harap kau tak putus asa dalam hidup kau dan terus capai impian kau sampai berjaya!

HAPPY BIRTHDAY!! GO CELEBRATE!!

Sincerely,
Zahirul`;

let i = 0;
function typeWriter() {
  if (i < msg.length) {
    document.getElementById("typewriter").innerHTML += msg.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = function() {
  typeWriter();
};
