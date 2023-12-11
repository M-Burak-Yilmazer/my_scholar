import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData } from "../helper/data"
import { useState } from "react"

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData)

  console.log(appointments)
  return (
    <main className="text-center mt-2">
      <h1 style={{fontFamily: "serif"}} className="display-5 mt-3 text-white">MY SCHOLAR STUDY CLUB</h1>
      <Doctors apps={appointments} setApps={setAppointments} />
      <AppointmentList apps={appointments} setApps={setAppointments} />
    </main>
  )
}

export default Home