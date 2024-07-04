# KN05: Administration von MongoDB

### A: Rechte und Rollen (40%)

#### Screenshot des Fehlers bei einer Verbindung mit der falschen Authentifizierungsquelle

![IMG](./bin/kn05a1.png)

#### Skript, welches die beiden Benutzer erstellt. 

```
use carRental

db.createUser({
    user: 'user1',
    pwd: '1234',
    roles: [
        {role: "read", db: "carRental"}
    ]
})
```

```
use admin

db.createUser({
    user: 'user2',
    pwd: '1234',
    roles: [
        {role: 'readWrite', db: 'carRental'}
    ]
})
```

#### Screenshots, die zeigen, dass die Rechte für Benutzer 1 funktionieren, im Speziellen:

Screenshot für das Einloggen (Verbindungstext sichtbar)

![IMG](./bin/loginvalidkn05a3.png)

Screenshot für das Lesen von Daten ohne Fehler

![IMG](./bin/loginvalidkn05a3.png)

Screenshot für das Schreiben von Daten mit Fehler.

![IMG](./bin/user1falieddatawrite.png)


#### Screenshots, die zeigen, dass die Rechte für Benutzer 2 funktionieren, im Speziellen:

Screenshot für das Einloggen (Verbindungstext sichtbar)
Screenshot für das Lesen von Daten ohne Fehler

```
mongosh "mongodb://user1:1234@107.23.89.109:27017/?authSource=carRental&readPreference=primary&ssl=false"
```

![IMG](./bin/successfullLoginandRead.png)

Screenshot für das Schreiben von Daten ohne Fehler.

![IMG](./bin/adminaddingcartruevlaid.png)


### B: Backup und Restore (40%)

#### Backup Variante 1: 


![IMG](./bin/kn05bfirstpic.png)

![IMG](./bin/snapshotkn05b.png)

![IMG](./bin/deletedcolllection.png)

![IMG](./bin/variante1recovered.png)

![IMG](./bin/recoveredthedumpkn05B.png)



#### Backup Variante 2:


```
sudo mongodump --uri="mongodb://user2:1234@107.23.89.109:27017/?authSource=admin&readPreferen
ce=primary&ssl=false&directConnection=true" --db=carRental --out "/home/ubuntu/dump"
```

![IMG](./bin/variante2erstebild.png)

![IMG](./bin/recoveredthedumpkn05B.png)

![IMG](./bin/droppeddatabase.png)

![IMG](./bin/recoveredthedumpkn05B.png)

```
sudo mongorestore --uri="mongodb://user2:1234@107.23.89.109:27017/?authSource=admin&readPrefe
rence=primary&ssl=false&directConnection=true" "./dump"
```

![IMG](./bin/afterrecoverzevytignhere.png)


![IMG](./bin/proofkn05bfinal.png)


### C: Skalierung (20%)

#### Replikation:

Daten werden auf mehrere Servern dupliziert, bzw repliziert mit Replica-Sätzen, um hohe Verfügbarkeit und Datenredundanz sicherzustellen. So kann ein Server wenn es ausfällt von anderen Servern die Daten beziehen um auf dem neusten Stand zu sein.


![Image of Database Scaling](https://static-assets.codecademy.com/Courses/Backend-Backfill/ART-1491-Database-Scaling-3.svg)

[Source: Codecademy](https://static-assets.codecademy.com/Courses/Backend-Backfill/ART-1491-Database-Scaling-3.svg)

#### Partitionierung (Sharding):

Prozess bei dem grosse Datenmengen auf aufgeteilt auf mehrern Servern, sogenannte Shards gespeichert werden. Damit wird auch die Last und der Speicherbedarf zwischen den Servern aufgeteilt.


![Image of Database Backup](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*tOAcT4T5Rdg6Fx5z.png)

[Source: Medium](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*tOAcT4T5Rdg6Fx5z.png)

#### Empfehlung an Firma (Bank):


Situation:
Die Bank benutzt MongoDB für eine Applikation, die Kundendaten, Kontostände und Transaktionshistorien speichert und verarbeitet für die Kunden. Im Moment ist diese Applikation auf einem einzelnen MongoDB-Server, was zu Performance-Engpässen führt und bei Ausfall des Servers zu einem Datenverlust oder Unterbrechung in der App führen kann.

Empfehlung:
Ich würde einer Bank die Replication als Skalierungsmethode empfehlen. Somit kann auch bei Ausfall von Servern/Applikationen sichergestellt werden, dass z.B. Kundendaten, Kontostände und Transaktionen verfügbar und konsistent sind. So kann im Falle eines Ausfalls keine Daten verloren gehen und der Betrieb der Dienste der Bank ohne Unterbrechung weiterlaufen.


