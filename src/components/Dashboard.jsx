import { useState } from "react";
import AddLead from "./AddLead";
import LeadList from "./LeadList";
import Header from "./Header";
import '../styles/dashboard.css'
export default function Dashboard(){
    const [formData,setFormData]=useState({
        name:"",email:"",phone:"",status:""
    })
        const [leads, setLeads] = useState([]);
function handleAddLead() {
  setLeads((prev) => [...prev, formData]);
  setFormData({ name: "", email: "", phone: "", status: "" });
}
    return (
        <>
         <Header/>
        <main className="dashboard-container">
       
        <AddLead formData={formData} setFormData={setFormData}  onAddLead={handleAddLead}/>
        <LeadList leads={leads}/>
        </main>
        </>
    )
}