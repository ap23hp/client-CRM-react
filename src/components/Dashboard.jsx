import { useState,useEffect } from "react";
import AddLead from "./AddLead";
import LeadList from "./LeadList";
import Header from "./Header";
import '../styles/dashboard.css'
export default function Dashboard(){


    const [formData,setFormData]=useState({
        name:"",email:"",phone:"",status:""
    })
  const [leads, setLeads] = useState(() => {
  const savedLeads = localStorage.getItem("client-crm-leads");
  return savedLeads ? JSON.parse(savedLeads) : [];
});

// Save leads to localStorage (whenever leads change)
  useEffect(() => {
    localStorage.setItem("client-crm-leads", JSON.stringify(leads));
  }, [leads]);

function handleAddLead() {
    if(formData.name==="" || formData.email===""){
        return
    }else{
 setLeads((prev) => [...prev, formData]);
  setFormData({ name: "", email: "", phone: "", status: "" });
    }
 console.log("Submitting formData:", formData);
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