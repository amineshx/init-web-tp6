//horloge 

function affiche(){ 	
	var csHeure = "";
	var dtJour = new Date();
	var nHeures = dtJour.getHours() , nMinutes = dtJour.getMinutes(), nSecondes = dtJour.getSeconds();

	if (nHeures < 10) csHeure += "0";
	csHeure += nHeures + ":";
	if (nMinutes < 10) csHeure += "0";
	csHeure += nMinutes + ":";
	if (nSecondes < 10) csHeure += "0";
	csHeure += nSecondes;

	document.getElementById('heure').innerHTML=csHeure;
	window.setTimeout(affiche,1000);
}
let i = 0;
function data(){
    var x= document.getElementById("Designation");
    Designation = x.value;
    x= document.getElementById("Expiration");
    Expiration = x.value;
    x = document.getElementById("Priorite");
	Priorite= x.value ;
    var tachNbr = document.getElementById("tach-nbr");


    var table = document.getElementById("small-table2");
    var nouvelleLigne = table.insertRow(-1);
    var celluleDesignation = nouvelleLigne.insertCell(0);
    var celluleHeure = nouvelleLigne.insertCell(1);
    var cellulePriorite = nouvelleLigne.insertCell(2);
    var celluleExpiration = nouvelleLigne.insertCell(3);
    celluleDesignation.innerHTML = Designation;
    i++;


    var maintenant = new Date();
    var heure = maintenant.getHours();
    var minutes = maintenant.getMinutes();
    var secondes = maintenant.getSeconds();
    var heureAjout = heure + ":" + minutes + ":" + secondes;

    celluleHeure.innerHTML = heureAjout;
    cellulePriorite.innerHTML = Priorite;
    celluleExpiration.innerHTML = Expiration;

    document.cookie = "tache_" + Designation + "=" + Expiration + "; path=/";


    function supprimerTache() {
        table.deleteRow(nouvelleLigne.rowIndex);
        document.cookie =
        "tache_" +
        Designation +
        "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        
        i--;
        tachNbr.innerHTML = `nombre de tache ${i}`;
        }
        
        tachNbr.innerHTML = `nombre de tache ${i}`;
        
        setTimeout(supprimerTache, Expiration * 1000);
}
