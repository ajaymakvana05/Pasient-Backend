const { Router } = require("express")
const { Auth, AuthPatientOrDoctor, DoctorAuth } = require("../Middlewares/auth")
const { AllAppointment, AddAppointment, DeleteAppointment, UpdateAppointment, getPatientAppointmentHistory, getDoctorAppointmentHistory, AllDoctorWithHospitals } = require("../Controllers/Appointment.Controller")
const { AllDoctor } = require("../Controllers/Admin.Controller")
const AppointmentRoute = Router()

AppointmentRoute.get("/AllAppointment", Auth, AllAppointment)
AppointmentRoute.post("/AddAppointment", Auth, AddAppointment)
AppointmentRoute.patch("/UpdateAppointment/:id", Auth, UpdateAppointment)
AppointmentRoute.delete("/DeleteAppointment/:id", Auth, DeleteAppointment)
AppointmentRoute.get("/alldoctor", Auth, AllDoctor)


// Fetch appointment history for a patient
AppointmentRoute.get("/PaAppointmentHistory/:PatientID", Auth, getPatientAppointmentHistory)

// Fetch appointment history for a doctor
AppointmentRoute.get("/AppointmentHistory/:DoctorID", DoctorAuth, getDoctorAppointmentHistory)

module.exports = AppointmentRoute