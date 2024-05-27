# KN01: Installation und Verwaltung von MongoDB

### A - Installation (40%)

![Image](./bin/kn01a1.png)

`authSource=admin&readPreference=primary&ssl=false&directConnection=true`

[cloud init](./bin/)

<b>Connection String, Erklären Sie was die Option authSource=admin
macht und wieso dieser Parameter so korrekt ist:</b>


<b>Was bewirkt `sed` im cloud-init</b>

![Image](./bin/kn01a2bindipsecuritz.png)

### B - Erste Schritte GUI (40%)

![Image](./bin/kn01b1insertdocument.png)

![Image](./bin/Screenshot0153.png)

[Doku]()

- `_id`: ObjectId
- `name`: String
- `plz`: Number (Integer)
- `birth-date`: Date (ISO format)

### C - Erste Schritte Shell (20%)

![Image](./bin/kn01c1mongodbstuff.png)

`sudo mongosh -u "admin" -p "12345678"`

![Image](./bin/kn01c2mongodbcmd.png)

1. `show dbs;`:
2. `show databases;`:
3. `use collection-name;`:
4. `show collections;`:
5. `show tables;`: