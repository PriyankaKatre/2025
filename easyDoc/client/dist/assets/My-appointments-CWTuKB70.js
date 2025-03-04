import{j as e,G as r,H as d,I as i,B as a}from"./index-B8V2LFaY.js";import{C as n,a as c}from"./card-DLLc57Xf.js";const l="/assets/doctor10-DB9YqDSM.png",o="/assets/doctor6-Dlkl7H9_.png",m="/assets/doctor3-wQVCchtV.png",h="/assets/doctor8-BMeD1GYF.png",x="/assets/doctor7-BhpDSzXq.png",t=[{id:"1",doctor:{name:"Dr. Richa Jamre",title:"General physician",image:l},address:{street:"57th Cross, Richmond",area:"Church Road",city:"London"},dateTime:"20 Jan, 2025 | 6:30 PM",status:"pending"},{id:"2",doctor:{name:"Dr. Sarah Wilson",title:"Dermatologist",image:o},address:{street:"12th Avenue, Park Street",area:"Greenwood",city:"New York"},dateTime:"22 Jan, 2025 | 10:00 AM",status:"paid"},{id:"3",doctor:{name:"Dr. Emily Davis",title:"Pediatrician",image:m},address:{street:"43rd Street, Central Plaza",area:"Downtown",city:"Chicago"},dateTime:"25 Jan, 2025 | 3:30 PM",status:"pending"},{id:"4",doctor:{name:"Dr. Michael Brown",title:"Orthopedic Surgeon",image:h},address:{street:"67th Avenue, Hilltop",area:"Beacon Hill",city:"Seattle"},dateTime:"28 Jan, 2025 | 1:00 PM",status:"paid"},{id:"5",doctor:{name:"Dr. Sophia Martinez",title:"Cardiologist",image:x},address:{street:"5th Avenue, Healthcare Lane",area:"MedCity",city:"San Francisco"},dateTime:"30 Jan, 2025 | 11:00 AM",status:"cancel"}],g=({appointment:s})=>e.jsx(n,{className:"overflow-hidden",children:e.jsx(c,{className:"p-6",children:e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(r,{className:"w-16 h-16",children:[e.jsx(d,{src:s.doctor.image,alt:s.doctor.name}),e.jsx(i,{children:"DR"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h2",{className:"font-semibold",children:s.doctor.name}),e.jsx("p",{className:"text-sm text-muted-foreground",children:s.doctor.title}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:[e.jsx("p",{className:"font-medium",children:"Address:"}),e.jsx("p",{children:s.address.street}),e.jsxs("p",{children:[s.address.area,","," ",s.address.city]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[e.jsx("span",{className:"font-medium",children:"Date & Time:"})," ",s.dateTime]})]})]}),e.jsx("div",{className:"flex flex-col gap-2",children:e.jsx("div",{className:"flex flex-col gap-2",children:s.status==="cancel"?e.jsx(a,{className:"bg-gray-400 cursor-not-allowed",disabled:!0,children:"Canceled Appointment"}):s.status==="pending"?e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"bg-teal-600 hover:bg-teal-500",children:"Pay here"}),e.jsx(a,{variant:"outline",className:"border-red-200 text-red-600 hover:bg-red-50",children:"Cancel appointment"})]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"ghost",className:"text-teal-600 hover:text-teal-500",children:"Paid"}),e.jsx(a,{variant:"outline",className:"border-red-200 text-red-600 hover:bg-red-50",children:"Cancel appointment"})]})})})]})})}),u=()=>e.jsxs("div",{className:"container mx-auto p-4 space-y-6",children:[e.jsx("h1",{className:"text-xl font-semibold",children:"My Appointments"}),t.length>0?e.jsx("div",{className:"space-y-4",children:t.map(s=>e.jsx(g,{appointment:s},s.id))}):e.jsx("p",{children:"No appointments found."})]});export{u as default};
