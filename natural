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
