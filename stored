//"stored functions"
//returns all the numberof patients in standard rooms.
var countPatientsInStandardRooms = function() {
    return db.patient.aggregate([
        { $lookup: {
            from: "room",
            localField: "room_id",
            foreignField: "_id",
            as: "roomDetails"
        }},
        { $match: { "roomDetails.is_vip": false }},
        { $count: "patientCount" }
    ]).toArray();
};

var result = countPatientsInStandardRooms();
print(result);

//get all patients
var getAllPatients = function() {
    return db.patient.find({}).toArray();
};

print(getAllPatients());

//Get Treatment Detail for a Patient
var getTreatment = function(patientId) {
    return db.prescription.aggregate([
        { $match: { patient_id: ObjectId(patientId) } }, // Match prescriptions for the patient
        { $lookup: {
            from: "treatment",
            localField: "prescription_id", // Match by prescription_id instead of _id
            foreignField: "prescription_id",
            as: "treatmentDetails"
        }},
        { $unwind: "$treatmentDetails" }, // Unwind the treatment details
        { $project: {
            prescription_id: "$_id",
            nurse_id: "$treatmentDetails.nurse_id",
            treatment_description: "$treatmentDetails.treatment_description"
        }}
    ]).toArray();
};

print(getTreatment(ObjectId("659eefb84cd1657147b21c1f"))); //ObjectId of patient

//sort patient by room
var sortPatientsByRoom = function() {
    return db.patient.find({}).sort({ room_id: 1 }).toArray();
};

print(sortPatientsByRoom());


//get doctors with the requierd fields, id,first name, last name.
var getDoctors = function() {
    return db.doctor.find({}, { doctor_id: 1, first_name: 1, last_name: 1 }).toArray();
};

print(getDoctors());
