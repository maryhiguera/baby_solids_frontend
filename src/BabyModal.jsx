// import React, { useState } from "react";
// import axios from "axios";

// export default function BabyModal({ isOpen, onClose, onSave }) {
//   const [name, setName] = useState("");
//   const [birthdate, setBirthdate] = useState("");
//   const [error, setError] = useState(null);

//   if (!isOpen) return null;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     try {
//       const resp = await axios.post("/babies", { baby: { name, birthdate } });
//       onSave(resp.data);     // parent receives the created baby
//     } catch (err) {
//       setError(err.response?.data?.errors?.join(", ") || "Save failed");
//     }
//   };

//   return (
//     <div style={{position: "fixed", inset:0, background:"rgba(0,0,0,.4)", display:"flex",alignItems:"center",justifyContent:"center"}}>
//       <div style={{background:"#fff", padding:20, width:320}}>
//         <h3>Enter your baby's information</h3>
//         {error && <div style={{color:"red"}}>{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Name</label><br/>
//             <input value={name} onChange={(e)=>setName(e.target.value)} required/>
//           </div>
//           <div>
//             <label>Birthdate</label><br/>
//             <input type="date" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)} required/>
//           </div>
//           <div style={{marginTop:10}}>
//             <button type="button" onClick={onClose} style={{marginRight:8}}>Cancel</button>
//             <button type="submit">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
export function BabyModal({ children, show, onClose }) {
  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

