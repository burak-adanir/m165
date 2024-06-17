db.customer.deleteOne({ "_id": ObjectId("666e31de55bd385660588894") });

db.car.deleteMany({ 
    $or: [
        { _id: ObjectId("666e31de55bd385660588897") }, 
        { _id: ObjectId("666e31de55bd385660588895") }
    ] 
});