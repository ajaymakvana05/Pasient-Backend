const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  PatientID: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient'},
  DoctorID: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' ,required:true},
  HospitalID : {type : mongoose.Schema.Types.ObjectId, ref:'Hospital'},
  speciality:{type:String,required:true},
  city : {type : String, required : true},
  state : {type : String, required : true},
  country : {type : String, required : true},
  appointmentdate: { type: Date, required: true },
  appointmentTime : {type : String , required : true},
  type: { type: String, enum: ['online', 'teleconsultation'], required: true },
  patientIssue: {type : String , required : true},
  diease: String,

}, { timestamps: true });

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = AppointmentModel;