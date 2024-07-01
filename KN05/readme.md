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

![IMG](./bin/successfullLoginandRead.png)

Screenshot für das Schreiben von Daten ohne Fehler.

![IMG](./bin/adminaddingcartruevlaid.png)


### B: Backup und Restore (40%)

#### Backup Variante 1: 


![IMG](./bin/kn05bfirstpic.png)

![IMG](./bin/snapshotkn05b.png)

![IMG](./bin/deletedcolllection.png)

![IMG](./bin/variante1recovered.png)


#### Backup Variante 2:


```
sudo mongodump --uri="mongodb://user2:1234@107.23.89.109:27017/?authSource=admin&readPreferen
ce=primary&ssl=false&directConnection=true" --db=carRental --out "/home/ubuntu/dump"
```

![IMG](./bin/variante2erstebild.png)

![IMG](./bin/droppeddatabase.png)

![IMG](./bin/recoveredthedumpkn05B.png)

![IMG](./bin/.png)




### C: Skalierung (20%)