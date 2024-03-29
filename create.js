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
