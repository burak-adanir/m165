# KN01: Installation und Verwaltung von MongoDB

### A - Installation (40%)

![Image](./bin/kn01a1.png)

`mongodb://admin:12345678@107.23.89.109:27017/?authSource=admin&readPreference=primary&ssl=false`

[cloud init](./bin/cloud-init.yam)

<b>Connection String, Erklären Sie was die Option authSource=admin
macht und wieso dieser Parameter so korrekt ist:</b>

In MongoDB bedeutet `authSource=admin`, dass die Authentifizierung in der Datenbank admin durchgeführt wird, was korrekt ist, weil die Benutzerinformationen in der admin-Datenbank gespeichert sind.


<b>Was bewirkt `sed` im cloud-init</b>

`sudo sed -i 's/#security:/security:\n authorization: enabled/g' /etc/mongod.conf`:

1. Entfernt das Kommentarzeichen `#` vor `security`: und fügt darunter die Zeile `authorization: enabled` ein, um Authentifizierung in MongoDB zu aktivieren.

2. Ersetzt die IP-Adresse `127.0.0.1` mit 0.0.0.0, um MongoDB so zu konfigurieren, dass es auf dem kompletten Netzwerk/alle Ports erreichbar ist.




![Image](./bin/kn01a2bindipsecuritz.png)

### B - Erste Schritte GUI (40%)

![Image](./bin/kn01b1insertdocument.png)

![Image](./bin/Screenshot0153.png)


- `_id`: objectId
- `Name`: string
- `Adresse`: string
- `PLZ`: integer
- `Geburtsdatum`: date (ISO format)

Export-Datei und Erklärung zu dem Datentyp mit möglichen Implikationen auf andere
Datentypen:

Beim Export von Daten aus MongoDB im JSON-Format kann man zwei Datentypen für Datumswerte haben:

Datum als String:

Wenn das Datum im UI oder der Anwendung nicht als Datumsobjekt gespeichert wird, wird es als String dargestellt.
Beispiel: {"birthdate": "2005-07-23T00:00:00.000Z"}


Datum als Objekt mit dem Schlüssel $date:

Um sicherzustellen, dass MongoDB das Datum als Datumsobjekt erkennt, wird es mit dem speziellen Schlüssel $date angegeben.
Beispiel: {"birthdate": {"$date": "2005-07-23T00:00:00.000Z"}}
Hier als korrektes Datumsobjekt.

Probleme können sein wenn man z.B. nach Datumsobjekten in einer collection sucht, allerdings nichts bekommt da alle als Strings gespeichert sind.

### C - Erste Schritte Shell (20%)

![Image](./bin/kn01c1mongodbstuff.png)

`sudo mongosh -u "admin" -p "12345678"`

![Image](./bin/kn01c2mongodbcmd.png)

1. `show dbs;`: Listet alle Datenbanken auf dem MongoDB-Server auf.
2. `show databases;`: Alternativbefehl zu show dbs, listet auch alle Datenbanken auf.
3. `use collection-name;`: Wechselt zur genannten Datenbank.
4. `show collections;`: Listet alle Collections in der aktuellen Datenbank auf.
5. `show tables;`: Listet alle Tabellen in der aktuellen Datenbank auf.

`show collections;` sind aliasse `show tables;`