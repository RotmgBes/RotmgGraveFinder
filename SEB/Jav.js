 document.getElementById("myLink").onclick = function () {
     var x = document.getElementById("xx").value;
     var y = document.getElementById("xy").value;
     document.getElementById("abc").href = "https://realmofthemadgod.appspot.com/char/fame?accountId=" + y + "&charId=" + x;
     return false;
 };
