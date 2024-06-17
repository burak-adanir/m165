// Verwenden Sie mindestens einmal eine Filterung auf ein DateTime Feld

db.posts.find({
    created_on: {
        $gte: new Date(2000, 11, 30), 
        $lt: new Date(2000, 12, 30)
    }
})

// Verwenden Sie mindestens einmal eine ODER-Verknüpfung in der Filterung

db.car.find({
    $or: [
        { brand: "BMW" },
        { "fuel_info.fuel_type": "Benzin" }
    ]
});

// Verwenden Sie mindestens einmal eine UND-Verknüpfung in der Filterung, aber nicht auf der
gleichen Collection wie die ODER-Verknüpfung

db.fuel_info.find({
    fuel_price: { $gt: 1.9 },
    consumption_in: "l/100km"
});

// Verwenden Sie mindestens einmal eine Regex um einen Teilstring zu finden.

db.car.find({
    model: { $regex: "M", $options: "i" }
});

// Verwenden Sie mindestens einmal eine Projektion, bei der die _id auch ausgegeben wird

db.car.find({}, {
    _id: 1,
    brand: 1,
    model: 1,
	fuel_info:1,
    hourly_rate: 1
});


// Verwenden Sie mindestens einmal eine Projektion, bei der die _id nicht ausgegeben wird

db.car.find({}, {
    _id: 0,
    brand: 1,
    model: 1,
    hourly_rate: 1
});

