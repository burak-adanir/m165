// Verwenden Sie mindestens einmal den Befehl updateOne() und die _id als Filterung.


db.car.updateOne(
    { _id: ObjectId("666e31de55bd385660588896") },
    { $set: { hourly_rate: 55.0 } }
);

// Verwenden Sie mindestens einmal den Befehl updateMany() , aber ohne die _id zu
verwenden. Die Filterung sollte eine ODER-Verknüpfung verwenden und auch tatsächlich
mehr als einen Datensatz verändern.

db.customer.updateMany(
    {
        $or: [
            { nationality: "Swiss" },
            { rent_duration_hours: { $gt: 50 } }
        ]
    },
    { $set: { nationality: "German" } }
);

// Verwenden Sie mindestens einmal den Befehl replaceOne() , um ein Dokument einer
Collection zu verändern. 


db.fuel_info.replaceOne(
    { fuel_type: "Elektro" },
    {
        consumption_in: "kWh/100km",
        fuel_type: "Electro",
        fuel_price: 0.32
    }
);