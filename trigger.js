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
