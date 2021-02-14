<h1>PFleaker</h1>
<p>
PFleaer ist eine Fantasy Hockey PWA App. Das Frontend wird mit Angular/TypeScript umgesetzt <br>
Als IDEA wird IntelliJ empfohlen.
</p>
<h2>Installationen</h2>
<h3>Git</h3>
<p>
Installiere Git https://git-scm.com/downloads
</p>

<h3>NodeJS</h3>
<p>
Installiere NodeJS https://nodejs.org/en/
</p>


<h3>Angular</h3>
<p>
Installiere Angular mit folgendem Befehlt: "npm install -g @angular/cli",
weitere Informationen: https://angular.io/guide/setup-local
</p>

<h2>Einrichtung Projekt</h2>
<ol>
<li>Neuer Ordner erstellen: C:\Development\PFleaker-frontend</li>
<li>Git Bash öffnen (Windows Suche)</li>
<li>In Bash in den neu erstellten Ordner navigieren: "cd C:\Development\PFleaker-frontend"</li>
<li>Git initialisieren: "git init"</li>
<li>Insofern auf dem Repository berechtigt, Remote-Branch hinzufügen: "git remote add origin https://github.com/NiciAlmighty/Pfleaker-frontned.git"</li>
<li>Aktuelles Projekt herunterladen: "git pull origin master"</li>
<li>Anchliessend Dependencies herunterladen: "npm install"</li>
<li>"ng serve" ausführen</li>
<li>Im Browser localhost:4200 öffnen</li>
</ol>

<h2>Als PWA starten</h2>
<ol>
<li>ng build --prod --source-map</li>
<li>http-server-spa dist/PFleaker-frontend/ index.html 4300</li>
<li>"ipconfig" ausführen</li>
<li>Auf dem Smartphone (muss sich im gleichen Netzwerk befinden) auf 
die angegebene IP-Adresse auf Port 4300 verbinden bspw. 192.168.8.110:4300</li>
</ol>
<p>Initial muss auf dem Laptop/PC auf welchem entwickelt wird möglicherweise 
noch der Port 4300 geöffnet werden: https://wiki.mcneel.com/de/zoo/window7firewall</p>


<h2>Einrichtung InteliJ</h2>
<ol>
<li>IntelliJ starten und C:\Development\PFleaker-frontend als Projekt öffnen</li>
<li>Bitte ergänzen, da keine Erinnerungen vorhanden sind :D</li>
</ol>

