
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
