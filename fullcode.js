db.department.insertMany([
  { "department_name": "Cardiology", "phone_num_extension": "1001" },
  { "department_name": "Neurology", "phone_num_extension": "1002" },
  { "department_name": "Oncology", "phone_num_extension": "1003" },
  { "department_name": "Pediatrics", "phone_num_extension": "1004" },
  { "department_name": "General Medicine", "phone_num_extension": "1234" },
  { "department_name": "Orthopedics", "phone_num_extension": "1005" }
]);
let cardiologyId = db.department.findOne({ department_name: "Cardiology" })._id;
let neurologyId = db.department.findOne({ department_name: "Neurology" })._id;
let oncologyId = db.department.findOne({ department_name: "Oncology" })._id;
let pediatricsId = db.department.findOne({ department_name: "Pediatrics" })._id;
let generalMedicineId = db.department.findOne({ department_name: "General Medicine" })._id;
let orthopedicsId = db.department.findOne({ department_name: "Orthopedics" })._id;


db.doctor.insertMany([
  {
    "doctor_id": 1,
    "department_id": cardiologyId,
    "first_name": "John",
    "last_name": "Doe",
    "specialization": "Cardiologist",
    "phone_num": "555-0101",
    "address": "123 Elm Street"
  },
  {
    "doctor_id": 2,
    "department_id": neurologyId,
    "first_name": "Jane",
    "last_name": "Smith",
    "specialization": "Neurologist",
    "phone_num": "555-0102",
    "address": "456 Oak Avenue"
  },
  {
    "doctor_id": 3,
    "department_id": oncologyId,
    "first_name": "Emily",
    "last_name": "Jones",
    "specialization": "Oncologist",
    "phone_num": "555-0103",
    "address": "789 Pine Boulevard"
  },
  {
    "doctor_id": 4,
    "department_id": pediatricsId,
    "first_name": "William",
    "last_name": "Brown",
    "specialization": "Pediatrician",
    "phone_num": "555-0104",
    "address": "321 Maple Drive"
  },
  {
    "doctor_id": 5,
    "department_id": generalMedicineId,
    "first_name": "Sarah",
    "last_name": "Davis",
    "specialization": "Orthopedist",
    "phone_num": "555-0105",
    "address": "654 Cedar Lane"
  }
]);

let doctor1Id = db.doctor.findOne({ doctor_id: 1 })._id;
let doctor2Id = db.doctor.findOne({ doctor_id: 2 })._id;
let doctor3Id = db.doctor.findOne({ doctor_id: 3 })._id;
let doctor4Id = db.doctor.findOne({ doctor_id: 4 })._id;
let doctor5Id = db.doctor.findOne({ doctor_id: 5 })._id;

db.dutyshift.insertMany([
  {
    "shift_id": 1,
    "doctor_id": doctor1Id,
    "department_id": cardiologyId,
    "start_time": "08:00",
    "end_time": "16:00"
  },
  {
    "shift_id": 2,
    "doctor_id": doctor2Id,
    "department_id": neurologyId,
    "start_time": "09:00",
    "end_time": "17:00"
  },
  {
    "shift_id": 3,
    "doctor_id": doctor3Id,
    "department_id": oncologyId,
    "start_time": "10:00",
    "end_time": "18:00"
  },
  {
    "shift_id": 4,
    "doctor_id": doctor4Id,
    "department_id": pediatricsId,
    "start_time": "11:00",
    "end_time": "19:00"
  },
  {
    "shift_id": 5,
    "doctor_id": doctor5Id,
    "department_id": generalMedicineId,
    "start_time": "12:00",
    "end_time": "20:00"
  }
]);


db.nurse.insertMany([
  {
    "nurse_id": 1,
    "first_name": "Alice",
    "last_name": "Headnurse",
    "is_chef": "Yes",
    "nurse_nurse_id": null
  },
  {
    "nurse_id": 2,
    "first_name": "Craig",
    "last_name": "Chiefnurse",
    "is_chef": "Yes",
    "nurse_nurse_id": null
  }
]);
let aliceId = db.nurse.findOne({ nurse_id: 1 })._id;
let craigId = db.nurse.findOne({ nurse_id: 2 })._id;

db.nurse.insertMany([
  {
    "nurse_id": 3,
    "first_name": "Bob",
    "last_name": "Undernurse",
    "is_chef": "No",
    "nurse_nurse_id": aliceId
  },
  {
    "nurse_id": 4,
    "first_name": "Charlie",
    "last_name": "Assistnurse",
    "is_chef": "No",
    "nurse_nurse_id": aliceId
  },
  {
    "nurse_id": 5,
    "first_name": "Diana",
    "last_name": "Helpnurse",
    "is_chef": "No",
    "nurse_nurse_id": craigId
  },
  {
    "nurse_id": 6,
    "first_name": "Eva",
    "last_name": "Aidnurse",
    "is_chef": "No",
    "nurse_nurse_id": craigId
  }
]);

db.room.insertMany([
  {
    "room_id": 1,
    "department_id": cardiologyId,
    "is_vip": false,
    "occupancy": 1
  },
  {
    "room_id": 2,
    "department_id": neurologyId,
    "is_vip": false,
    "occupancy": 2
  },
  {
    "room_id": 3,
    "department_id": neurologyId,
    "is_vip": true,
    "occupancy": 1
  },
  {
    "room_id": 4,
    "department_id": oncologyId,
    "is_vip": false,
    "occupancy": 2
  },
  {
    "room_id": 5,
    "department_id": pediatricsId,
    "is_vip": true,
    "occupancy": 1
  },
  {
    "room_id": 6,
    "department_id": generalMedicineId,
    "is_vip": true,
    "occupancy": 1
  }
]);


let room1Id = db.room.findOne({ room_id: 1 })._id;
let room2Id = db.room.findOne({ room_id: 2 })._id;
let room3Id = db.room.findOne({ room_id: 3 })._id;
let room4Id = db.room.findOne({ room_id: 4 })._id;
let room5Id = db.room.findOne({ room_id: 5 })._id;
let room6Id = db.room.findOne({ room_id: 6 })._id;

db.patient.insertMany([
  {
    "patient_id": 1,
    "room_id": room1Id,
    "first_name": "Gary",
    "last_name": "Wilson",
    "dob": "1985-07-12",
    "gender": "Male",
    "address": "123 Birch Street"
  },
  {
    "patient_id": 2,
    "room_id": room2Id,
    "first_name": "Hannah",
    "last_name": "Clark",
    "dob": "1990-05-16",
    "gender": "Female",
    "address": "234 Cedar Road"
  },
  {
    "patient_id": 3,
    "room_id": room3Id,
    "first_name": "Ian",
    "last_name": "Rodriguez",
    "dob": "1978-11-22",
    "gender": "Male",
    "address": "345 Elm Avenue"
  },
  {
    "patient_id": 4,
    "room_id": room4Id,
    "first_name": "Julia",
    "last_name": "Lopez",
    "dob": "2002-03-30",
    "gender": "Female",
    "address": "456 Pine Lane"
  },
  {
    "patient_id": 5,
    "room_id": room5Id,
    "first_name": "Kyle",
    "last_name": "Garcia",
    "dob": "1966-01-19",
    "gender": "Male",
    "address": "567 Maple Parkway"
  },
  {
    "patient_id": 6,
    "room_id": room6Id,
    "first_name": "Kylrre",
    "last_name": "Garhhcia",
    "dob": "1964-01-23",
    "gender": "Male",
    "address": "567 Maple Parkwdday"
  }
]);

let patient1Id = db.patient.findOne({ patient_id: 1 })._id;
let patient2Id = db.patient.findOne({ patient_id: 2 })._id;
let patient3Id = db.patient.findOne({ patient_id: 3 })._id;
let patient4Id = db.patient.findOne({ patient_id: 4 })._id;
let patient5Id = db.patient.findOne({ patient_id: 5 })._id;
let patient6Id = db.patient.findOne({ patient_id: 6 })._id;

let nurse1Id = db.nurse.findOne({ nurse_id: 1 })._id;
let nurse2Id = db.nurse.findOne({ nurse_id: 2 })._id;
let nurse3Id = db.nurse.findOne({ nurse_id: 3 })._id;
let nurse4Id = db.nurse.findOne({ nurse_id: 4 })._id;
let nurse5Id = db.nurse.findOne({ nurse_id: 5 })._id;
let nurse6Id = db.nurse.findOne({ nurse_id: 6 })._id;

db.prescription.insertMany([
  {
    "prescription_id": 1,
    "doctor_id": doctor1Id,
    "patient_id": patient1Id
  },
  {
    "prescription_id": 2,
    "doctor_id": doctor2Id,
    "patient_id": patient2Id
  },
  {
    "prescription_id": 3,
    "doctor_id": doctor3Id,
    "patient_id": patient3Id
  },
  {
    "prescription_id": 4,
    "doctor_id": doctor4Id,
    "patient_id": patient4Id
  },
  {
    "prescription_id": 5,
    "doctor_id": doctor5Id,
    "patient_id": patient5Id
  }
]);

db.treatment.insertMany([
  {
    "nurse_id": nurse1Id,
    "prescription_id": 1, // Assuming these are direct references to the prescription_id
    "treatment_description": "Blood Pressure Monitoring"
  },
  {
    "nurse_id": nurse2Id,
    "prescription_id": 2,
    "treatment_description": "Medication Administration"
  },
  {
    "nurse_id": nurse3Id,
    "prescription_id": 3,
    "treatment_description": "Chemotherapy"
  },
  {
    "nurse_id": nurse4Id,
    "prescription_id": 4,
    "treatment_description": "Routine Checkup"
  },
  {
    "nurse_id": nurse5Id,
    "prescription_id": 5,
    "treatment_description": "Orthopedic Surgery"
  }
]);


db.visitor.insertMany([
  {
    "visitor_id": 1,
    "patient_id": patient1Id,
    "first_name": "Laura",
    "last_name": "Moore",
    "relation": "Sister",
    "visit_date_and_time": "2023-07-01 10:00"
  },
  {
    "visitor_id": 2,
    "patient_id": patient2Id,
    "first_name": "Mark",
    "last_name": "White",
    "relation": "Brother",
    "visit_date_and_time": "2023-07-02 11:00"
  },
  {
    "visitor_id": 3,
    "patient_id": patient3Id,
    "first_name": "Nancy",
    "last_name": "Hall",
    "relation": "Mother",
    "visit_date_and_time": "2023-07-03 12:00"
  },
  {
    "visitor_id": 4,
    "patient_id": patient4Id,
    "first_name": "Oscar",
    "last_name": "Young",
    "relation": "Father",
    "visit_date_and_time": "2023-07-04 13:00"
  },
  {
    "visitor_id": 5,
    "patient_id": patient5Id,
    "first_name": "Patricia",
    "last_name": "King",
    "relation": "Daughter",
    "visit_date_and_time": "2023-07-05 14:00"
  }
]);

//summery: becasue mongodb generates the keys automaticky, one must adapt to it and declate everytime a new let so it could be passed to the create, as intended.
//making new varaiabls everytime, is time consuming requiers much more "future thinking" approach.
db.department.find({});
db.doctor.find({});
db.dutyshift.find({});
db.nurse.find({});
db.patient.find({});
db.prescription.find({});
db.room.find({});
db.treatment.find({});
db.visitor.find({});
//_______________________________________________________________________________

// Query 1: Join doctors with departments
db.doctor.aggregate([
  {
    $lookup: {
      from: "department",
      localField: "department_id", // ObjectId in the doctor collection
      foreignField: "_id",        // _id field in the department collection
      as: "departmentDetails"
    }
  }
]);


// Query 2: Join nurses with treatments
db.nurse.aggregate([
  {
    $lookup: {
      from: "treatment",
      localField: "_id",
      foreignField: "nurse_id",
      as: "treatmentDetails"
    }
  }
]);

// Query 3: Join patients with rooms using the ObjectId reference for room_id
db.patient.aggregate([
  {
    $lookup: {
      from: "room",
      localField: "room_id",
      foreignField: "_id",
      as: "roomDetails"
    }
  }
]);



// Query 4: Join doctors with dutyshifts
db.doctor.aggregate([
  {
    $lookup: {
      from: "dutyshift",
      localField: "_id",
      foreignField: "doctor_id",
      as: "dutyshiftDetails"
    }
  }
]);

// Query 5: Join prescriptions with patients
db.prescription.aggregate([
  {
    $lookup: {
      from: "patient",
      localField: "patient_id",
      foreignField: "_id",
      as: "patientDetails"
    }
  }

]);

// Query 6: Join prescriptions with doctors
db.prescription.aggregate([
  {
    $lookup: {
      from: "doctor",
      localField: "doctor_id",
      foreignField: "_id",
      as: "doctorDetails"
    }
  }
]);

// Query 7: Join visitors with patients
db.visitor.aggregate([
  {
    $lookup: {
      from: "patient",
      localField: "patient_id",
      foreignField: "_id",
      as: "patientDetails"
    }
  }
]);

// Query 8: Join treatments with prescriptions
db.treatment.aggregate([
  {
    $lookup: {
      from: "prescription",
      localField: "prescription_id",
      foreignField: "prescription_id",
      as: "prescriptionDetails"
    }
  }
]);


// Query 9: Join doctors with prescriptions and patients
db.doctor.aggregate([
  {
    $lookup: {
      from: "prescription",
      localField: "_id",
      foreignField: "doctor_id",
      as: "prescriptionDetails"
    }
  },
  {
    $unwind: "$prescriptionDetails"
  },
  {
    $lookup: {
      from: "patient",
      localField: "prescriptionDetails.patient_id",
      foreignField: "_id",
      as: "patientDetails"
    }
  }
]);

// Query 10: Join dutyshifts with departments and doctors
db.dutyshift.aggregate([
  {
    $lookup: {
      from: "department",
      localField: "department_id",
      foreignField: "_id",
      as: "departmentDetails"
    }
  },
  {
    $unwind: "$departmentDetails"
  },
  {
    $lookup: {
      from: "doctor",
      localField: "doctor_id",
      foreignField: "_id",
      as: "doctorDetails"
    }
  }
]);

// Query 11: Join nurses with rooms
db.nurse.aggregate([
  {
    $lookup: {
      from: "treatment",
      localField: "_id",
      foreignField: "nurse_id",
      as: "treatmentDetails"
    }
  },
  {
    $unwind: "$treatmentDetails"
  },
  {
    $lookup: {
      from: "room",
      localField: "treatmentDetails.room_id",
      foreignField: "_id",
      as: "roomDetails"
    }
  },
  {
    $unwind: {
      path: "$roomDetails",
      preserveNullAndEmptyArrays: true //keep nurses in the results even if they have no associated room.
    }
  }
]);

// Query 12: Join departments with rooms
db.department.aggregate([
  {
    $lookup: {
      from: "room",
      localField: "_id",
      foreignField: "department_id",
      as: "roomDetails"
    }
  }
]);

// Query 13: Join patients with prescriptions
db.patient.aggregate([
  {
    $lookup: {
      from: "prescription",
      localField: "_id",
      foreignField: "patient_id",
      as: "prescriptionDetails"
    }
  }
]);

// Query 14: Join visitors with doctors
db.visitor.aggregate([
  {
    $lookup: {
      from: "patient",
      localField: "patient_id",
      foreignField: "_id",
      as: "patientDetails"
    }
  },
  {
    $unwind: "$patientDetails"
  },
  {
    $lookup: {
      from: "doctor",
      localField: "patientDetails.doctor_id",
      foreignField: "doctor_id",
      as: "doctorDetails"
    }
  },
  {
    $unwind: {
      path: "$doctorDetails",
      preserveNullAndEmptyArrays: true //keep visitors without a matched doctor in the results
    }
  }
]);


// Query 15: Join nurses with patients
// Join nurses with treatments, and then join the resulting documents with patients
db.nurse.aggregate([
  {
    $lookup: {
      from: "treatment",
      localField: "_id",
      foreignField: "nurse_id",
      as: "treatmentDetails"
    }
  },
  {
    $unwind: {
      path: "$treatmentDetails",
      preserveNullAndEmptyArrays: true // To keep nurses without treatments in the result
    }
  },
  {
    $lookup: {
      from: "patient",
      localField: "treatmentDetails.patient_id",
      foreignField: "_id",
      as: "patientDetails"
    }
  },
  {
    $unwind: {
      path: "$patientDetails",
      preserveNullAndEmptyArrays: true // To keep nurses without patients in the result
    }
  }
]);


// Query 16: Join doctors with treatments
db.doctor.aggregate([
  {
    $lookup: {
      from: "prescription",
      localField: "_id",
      foreignField: "doctor_id",
      as: "prescriptionDetails"
    }
  },
  {
    $unwind: "$prescriptionDetails"
  },
  {
    $lookup: {
      from: "treatment",
      localField: "prescriptionDetails._id",
      foreignField: "prescription_id",
      as: "treatmentDetails"
    }
  },
  {
    $unwind: {
      path: "$treatmentDetails",
      preserveNullAndEmptyArrays: true
    }
  }
]);


// Query 17: Join rooms with treatments
//naturally, not supported

// Query 18: Join departments with treatments
//naturally, not supported

// Query 19: Join prescriptions with rooms
db.prescription.aggregate([
  {
    $lookup: {
      from: "patient",
      localField: "patient_id",
      foreignField: "_id",
      as: "patientDetails"
    }
  },
  { $unwind: "$patientDetails" },
  {
    $lookup: {
      from: "room",
      localField: "patientDetails.room_id",
      foreignField: "_id",
      as: "roomDetails"
    }
  }
]);


// Query 20: Join visitors with treatments
//naturally, not supported

// Query 21: Join nurses with visitors
//naturally, not supported

// Query 21: Join nurses with visitors via treatments
//naturally, not supported

// Query 22: Join departments with visitors
db.department.aggregate([
  {
    $lookup: {
      from: "room",
      localField: "_id",
      foreignField: "department_id",
      as: "roomDetails"
    }
  },
  { $unwind: "$roomDetails" },
  {
    $lookup: {
      from: "patient",
      localField: "roomDetails._id",
      foreignField: "room_id",
      as: "patientDetails"
    }
  },
  { $unwind: "$patientDetails" },
  {
    $lookup: {
      from: "visitor",
      localField: "patientDetails._id",
      foreignField: "patient_id",
      as: "visitorDetails"
    }
  }
]);

// Query 23: Join patients with treatments
//naturally, not supported

// Query 24: Join dutyshifts with patients
//naturally, not supported

// Query 25: Doctors with Visitors - Indirect relationship through patients and prescriptions
db.doctor.aggregate([
  {
    $lookup: {
      from: "prescription",
      localField: "_id",
      foreignField: "doctor_id",
      as: "prescriptionDetails"
    }
  },
  { $unwind: "$prescriptionDetails" },
  {
    $lookup: {
      from: "patient",
      localField: "prescriptionDetails.patient_id",
      foreignField: "_id",
      as: "patientDetails"
    }
  },
  { $unwind: "$patientDetails" },
  {
    $lookup: {
      from: "visitor",
      localField: "patientDetails._id",
      foreignField: "patient_id",
      as: "visitorDetails"
    }
  },
  { $unwind: { path: "$visitorDetails", preserveNullAndEmptyArrays: true } }
]);

//summery: converting natural simple postresql to mongodb, is hard, complex and not intuitive. the majority of quite simple natural joins, became long, multistage query.

//____________________________________________________

//A.Select Doctors and Their Department Names
db.doctor.aggregate([
  {
    $lookup: {
      from: "department",
      localField: "department_id",
      foreignField: "_id",
      as: "departmentDetails"
    }
  },
  {
    $project: {
      firstName: "$first_name",
      lastName: "$last_name",
      departmentName: "$departmentDetails.department_name"
    }
  }
]);

//B. Select Doctors Who Are Not Assigned to Any Duty Shift
db.doctor.aggregate([
  {
    $lookup: {
      from: "dutyshift",
      localField: "doctor_id",
      foreignField: "doctor_id",
      as: "dutyShiftDetails"
    }
  },
  {
    $match: {
      "dutyShiftDetails": { $size: 0 }
    }
  },
  {
    $project: {
      _id: 0,
      firstName: "$first_name",
      lastName: "$last_name"
    }
  }
]);


//C. Select Patients in VIP Rooms
db.patient.aggregate([
  {
    $lookup: {
      from: "room",
      localField: "room_id",
      foreignField: "_id",
      as: "roomDetails"
    }
  },
  {
    $match: {
      "roomDetails.is_vip": true
    }
  },
  {
    $project: {
      firstName: "$first_name",
      lastName: "$last_name"
    }
  }
]);

//D1ra. Insert a Cardiologist in the Cardiology Department
let cardiologyDepartmentId = db.department.findOne({ department_name: "Cardiology" })._id;

db.doctor.insertOne({
  department_id: cardiologyDepartmentId,
  first_name: "John",
  last_name: "Doe",
  specialization: "Cardiologist",
  phone_num: "555-0101",
  address: "123 Heart St"
});

//D1rb. Select Departments Where All Doctors Specialize in 'Cardiology'
//does not support this type of query. one will need to retrieve all departments and their doctors' then filter.

//F1. Join Patients with Their Assigned Rooms
db.patient.aggregate([
  {
    $lookup: {
      from: "room",
      localField: "room_id",
      foreignField: "_id",
      as: "roomDetails"
    }
  },
  {
    $project: {
      firstName: "$first_name",
      lastName: "$last_name",
      roomId: "$roomDetails.room_id"
    }
  }
]);

//F2. Natural Join Between Doctor and Prescription Using doctor_id
db.doctor.aggregate([
  {
    $lookup: {
      from: "prescription",
      localField: "_id",
      foreignField: "doctor_id",
      as: "prescriptionDetails"
    }
  },
  {
    $unwind: "$prescriptionDetails"
  }
]);

//F3. Cross Join Between Nurses and Doctors
//MongoDB does not support cross joins natively.

//F4. Find All Doctors and Their Possible Duty Shifts (Including Those Without a Shift)
db.doctor.aggregate([
  {
    $lookup: {
      from: "dutyshift",
      localField: "_id",
      foreignField: "doctor_id",
      as: "dutyShiftDetails"
    }
  },
  {
    $project: {
      firstName: "$first_name",
      lastName: "$last_name",
      shiftId: "$dutyShiftDetails.shift_id"
    }
  }
]);


//F5. Full Outer Join Between Nurses and Treatments
//MongoDB does not support full outer joins.

//G1. Select Doctors Who Have Prescribed More Than 5 Prescriptions
db.prescription.aggregate([
  {
    $group: {
      _id: "$doctor_id",
      prescriptionCount: { $sum: 1 }
    }
  },
  {
    $match: {
      prescriptionCount: { $gt: 5 }
    }
  },
  {
    $lookup: {
      from: "doctor",
      localField: "_id",
      foreignField: "doctor_id",
      as: "doctorDetails"
    }
  },
  {
    $unwind: "$doctorDetails"
  },
  {
    $project: {
      _id: 0,
      firstName: "$doctorDetails.first_name",
      lastName: "$doctorDetails.last_name",
      prescriptionCount: 1
    }
  }
]);


//G2. List of Departments With the Count of Their Doctors
db.doctor.aggregate([
  {
    $group: {
      _id: "$department_id",
      doctorCount: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "department",
      localField: "_id",
      foreignField: "_id",
      as: "departmentDetails"
    }
  },
  {
    $project: {
      departmentName: "$departmentDetails.department_name",
      doctorCount: 1
    }
  }
]);

//G3. Select Patient Names Along With the Count of Their Visits
db.patient.aggregate([
  {
    $lookup: {
      from: "visitor",
      localField: "_id",
      foreignField: "patient_id",
      as: "visitorDetails"
    }
  },
  {
    $project: {
      firstName: "$first_name",
      lastName: "$last_name",
      visitCount: { $size: "$visitorDetails" }
    }
  }
]);

//G4. Select Patients Who Have Not Been Visited
db.patient.aggregate([
  {
    $lookup: {
      from: "visitor",
      localField: "_id",
      foreignField: "patient_id",
      as: "visitorDetails"
    }
  },
  {
    $match: {
      "visitorDetails": { $eq: [] }
    }
  },
  {
    $project: {
      firstName: "$first_name",
      lastName: "$last_name"
    }
  }
]);

//H1. Combine Names of All Staff (Doctors and Nurses)
//must be ran by two separate queries and then combine.
// Fetch all doctors
let doctor = db.doctor.find({}, { first_name: 1, last_name: 1 }).toArray();

// Fetch all nurses
let nurse = db.nurse.find({}, { first_name: 1, last_name: 1 }).toArray();

// Combine the results
let allStaff = doctor.concat(nurse);
print(allStaff)

//H2. Select Doctors Who Have Never Prescribed Anything
db.doctor.aggregate([
  {
    $lookup: {
      from: "prescription",
      localField: "_id",
      foreignField: "doctor_id",
      as: "prescriptions"
    }
  },
  {
    $match: {
      "prescriptions": { $size: 0 }
    }
  },
  {
    $project: { first_name: 1, last_name: 1 }
  }
]);

//H3. Select Patients Who Are Both in a VIP Room and Have a Prescription
// Update all doctors where doctor_id is null or does not exist
db.doctor.updateMany(
  { doctor_id: null }, // This matches documents where doctor_id is null
  { $set: { doctor_id: 6 } } // This sets the doctor_id to 6
);
// Fetch VIP patients who also have a prescription
db.patient.aggregate([
  {
    $lookup: {
      from: "room",
      localField: "room_id",
      foreignField: "_id",
      as: "roomDetails"
    }
  },
  {
    $match: { "roomDetails.is_vip": true }
  },
  {
    $lookup: {
      from: "prescription",
      localField: "_id",
      foreignField: "patient_id",
      as: "prescriptions"
    }
  },
  {
    $match: { "prescriptions": { $ne: [] } }
  },
  {
    $project: {
      _id: 1, // Only project the _id field
      roomDetails: 1, // Include room details
      prescriptions: 1 // Include prescription details
    }
  }
]).forEach(function(doc) {
  // Replace printjson with print if you are using the MongoDB shell
  print(doc);
});


//I1. Count the Number of Patients in Each Department
db.patient.aggregate([
  {
    $lookup: {
      from: "room",
      localField: "room_id",
      foreignField: "_id",
      as: "roomDetails"
    }
  },
  { $unwind: "$roomDetails" },
  {
    $lookup: {
      from: "department",
      localField: "roomDetails.department_id",
      foreignField: "_id",
      as: "departmentDetails"
    }
  },
  { $unwind: "$departmentDetails" },
  {
    $group: {
      _id: "$departmentDetails.department_name",
      patientCount: { $sum: 1 }
    }
  }
]);

//I1. Find the Average Number of Patients in Each VIP and Non-VIP Room
db.room.aggregate([
  {
    $group: {
      _id: "$is_vip",
      averageOccupancy: { $avg: "$occupancy" }
    }
  }
]);


//I2. List Departments with More Than 10 Patients
//works with 1
db.room.aggregate([
  {
    $lookup: {
      from: "patient",
      localField: "_id",
      foreignField: "room_id",
      as: "patients"
    }
  },
  {
    $group: {
      _id: "$department_id",
      patientCount: { $sum: { $size: "$patients" } }
    }
  },
  {
    $lookup: {
      from: "department",
      localField: "_id",
      foreignField: "_id",
      as: "departmentDetails"
    }
  },
  { $unwind: "$departmentDetails" },
  {
    $match: {
      patientCount: { $gt: 10 }
    }
  },
  {
    $project: { departmentName: "$departmentDetails.department_name" }
  }
]);

//K. List Departments, Count of Doctors, and Their Average Number of Prescriptions
db.doctor.aggregate([
  {
    $lookup: {
      from: "prescription",
      localField: "_id",
      foreignField: "doctor_id",
      as: "prescriptions"
    }
  },
  {
    $group: {
      _id: "$department_id",
      doctorCount: { $sum: 1 },
      avgPrescriptions: { $avg: { $size: "$prescriptions" } }
    }
  },
  {
    $lookup: {
      from: "department",
      localField: "_id",
      foreignField: "_id",
      as: "departmentDetails"
    }
  },
  { $unwind: "$departmentDetails" },
  {
    $project: {
      departmentName: "$departmentDetails.department_name",
      doctorCount: 1,
      avgPrescriptions: 1
    }
  }
]);

//M. view_doctor_department
//MongoDB does not support SQL-style views.

//N. Insert into Prescription from a Subquery
//MongoDB does not support insertion from a subquery.

//O. Update Nurse's Chef Status Based on a Subquery
//Updates based on a subquery are not directly supported in MongoDB.

//O. Update Room Occupancy for All Non-VIP Rooms to Maximum Capacity
db.room.updateMany(
  { is_vip: false, occupancy: { $lt: 3 } },
  { $set: { occupancy: 6 } }
);

//P. Delete Patients Who Have Not Been Visited
//first find the patients who have not been visited and then delete them.
let visitedPatientsIds = db.visitor.distinct("patient_id");
db.patient.deleteMany({ _id: { $nin: visitedPatientsIds } });

//B(ra). Insert Doctors and Select Those Not Assigned to Any Duty Shift
//For inserting data based on condition, need to find the department ID first
// Find department ID for 'General Medicine'
let generalMedicineDepartmentId = db.department.findOne({ department_name: "General Medicine" })._id;

// Insert doctor
db.doctor.insertOne({
  department_id: generalMedicineDepartmentId,
  first_name: "Jane",
  last_name: "Smith",
  specialization: "General",
  phone_num: "555-0202",
  address: "456 Elm Street"
});

// Then to find doctors not assigned to any duty shift
db.doctor.aggregate([
  {
    $lookup: {
      from: "dutyshift",
      localField: "_id",
      foreignField: "doctor_id",
      as: "dutyShiftDetails"
    }
  },
  {
    $match: {
      "dutyShiftDetails": { $eq: [] }
    }
  },
  {
    $project: { first_name: 1, last_name: 1 }
  }
]);

//K. List Departments with Doctor Counts and Average Prescriptions
db.doctor.aggregate([
  {
    $lookup: {
      from: "prescription",
      localField: "_id",
      foreignField: "doctor_id",
      as: "prescriptions"
    }
  },
  {
    $group: {
      _id: "$department_id",
      doctorCount: { $sum: 1 },
      totalPrescriptions: { $sum: { $size: "$prescriptions" } }
    }
  },
  {
    $lookup: {
      from: "department",
      localField: "_id",
      foreignField: "_id",
      as: "departmentDetails"
    }
  },
  {
    $match: {
      doctorCount: { $gt: 2 }
    }
  },
  {
    $project: {
      departmentName: "$departmentDetails.department_name",
      numberOfDoctors: "$doctorCount",
      avgPrescriptions: { $divide: ["$totalPrescriptions", "$doctorCount"] }
    }
  },
  {
    $sort: { totalPrescriptions: -1 }
  }
]);

//summary: mongodb, is not directly supporting sql view style, updating based on subquery or insertion in subquery as well. everything is much less intuitive and long.


//_________________________________________________
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

//________________________________
//Check Patient In Standard Room - This function checks if the room already has 6 patients before inserting a new patient into a standard room.
var checkPatientInStandardRoom = function(roomId, patientData) {
    var room = db.room.findOne({ room_id: roomId });
    if (!room.is_vip) {
        var patientCount = db.patient.count({ room_id: roomId });
        if (patientCount >= 6) {
            print('Error in room: Max of 6 patients allowed in Standard Room.');
            return;
        }
    }
    db.patient.insertOne(patientData);
};

checkPatientInStandardRoom(4, {
    patient_id: 88,
    room_id: 4,
    first_name: "Alice",
    last_name: "Johnson",
    dob: "1980-04-23",
    gender: "Female",
    address: "456 Maple Street"
});

//Prevent Change to VIP Room - This function prevents changing a room to VIP if it already has occupants.
var preventChangeToVip = function(roomId, newVipStatus) {
    var patientCount = db.patient.count({ room_id: roomId });
    if (newVipStatus && patientCount > 0) {
        print('Error in room: Cannot change room to VIP; it already has occupants.');
        return;
    }
    db.room.updateOne({ room_id: roomId }, { $set: { is_vip: newVipStatus } });
};

preventChangeToVip(4, true);

//Check Patient In VIP Room - This function ensures that only one patient is allowed in a VIP room.
var checkPatientInVipRoom = function(roomId, patientData) {
    var room = db.room.findOne({ room_id: roomId });
    if (room.is_vip) {
        var patientCount = db.patient.count({ room_id: roomId });
        if (patientCount >= 1) {
            print('Error in room: Only one patient allowed in VIP Room.');
            return;
        }
    }
    db.patient.insertOne(patientData);
};

checkPatientInVipRoom(3, {
    patient_id: 91,
    room_id: 3,
    first_name: "Bob",
    last_name: "Smith",
    dob: "1992-11-15",
    gender: "Male",
    address: "789 Oak Lane"
});


//Ensure Doctor on Duty - This function checks for overlapping shifts before assigning a doctor to a duty shift.
var ensureDoctorOnDuty = function(shiftData) {
    var overlaps = db.dutyshift.findOne({
        department_id: shiftData.department_id,
        $or: [
            { start_time: { $lt: shiftData.end_time }, end_time: { $gt: shiftData.start_time } },
            { start_time: shiftData.start_time, end_time: shiftData.end_time }
        ]
    });

    if (overlaps) {
        print('Alert in dutyshift: Doctor assigned overlaps with another duty shift for the specified department.');
        return;
    }
    db.dutyshift.insertOne(shiftData);
};

ensureDoctorOnDuty({
    shift_id: 18,
    doctor_id: 1,
    department_id: 1,
    start_time: "09:00",
    end_time: "17:00"
});


