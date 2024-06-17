var customer1 = new ObjectId();
var customer2 = new ObjectId();
var customer3 = new ObjectId();

var car1 = new ObjectId();
var car2 = new ObjectId();
var car3 = new ObjectId();
var car4 = new ObjectId();

var fuelInfo1 = new ObjectId();
var fuelInfo2 = new ObjectId();
var fuelInfo3 = new ObjectId();

db.fuel_info.insertMany([
    { _id: fuelInfo1, consumption_in: "l/100km", fuel_type: "Benzin", fuel_price: 1.88 },
    { _id: fuelInfo2, consumption_in: "l/100km", fuel_type: "Diesel", fuel_price: 1.91 },
    { _id: fuelInfo3, consumption_in: "kWh/100km", fuel_type: "Elektro", fuel_price: 0.32 }
]);

db.car.insertMany([
    {
        _id: car1,
        brand: "BMW",
        model: "M3",
        model_year: 2022,
        consumption: 9.5,
        fuel_info: fuelInfo1,
        hourly_rate: 50.0
    },
    {
        _id: car2,
        brand: "Volkswagen",
        model: "Golf",
        model_year: 2019,
        consumption: 5.0,
        fuel_info: fuelInfo2,
        hourly_rate: 20.0
    },
    {
        _id: car3,
        brand: "Tesla",
        model: "Model 3",
        model_year: 2019,
        consumption: 15.0,
        fuel_info: fuelInfo3,
        hourly_rate: 20.0
    },
    {
        _id: car4,
        brand: "BMW",
        model: "m2",
        model_year: 2022,
        consumption: 9.5,
        fuel_info: fuelInfo1,
        hourly_rate: 50.0
    }
]);

db.customer.insertMany([
    {
        _id: customer1,
        name: "Michael Jordan",
        birth_date: new Date("2000-12-12"),
        nationality: "Swiss",
        rent_duration_hours: 48,
        payments: [
            { amount: 150.00, due_date: new Date("2024-06-20"), car: [car1] },
            { amount: 50.00, due_date: new Date("2024-06-23"), car: [car4] }
        ]
    },
    {
        _id: customer2,
        name: "Stephen Currz",
        birth_date: new Date("2000-12-12"),
        nationality: "Swiss",
        rent_duration_hours: 72,
        payments: [
            { amount: 150.00, due_date: new Date("2024-06-21"), car: [car2] },
            { amount: 50.00, due_date: new Date("2024-06-24"), car: [car1, car3] }
        ]
    }
]);

db.customer.insertOne({
    _id: customer3,
    name: "Lebron James",
    birth_date: new Date("2000-12-12"),
    nationality: "Swiss",
    rent_duration_hours: 24,
    payments: [
        { amount: 100.00, due_date: new Date("2024-06-21"), car: [car3] }
    ]
});