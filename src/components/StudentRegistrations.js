import { useState } from "react";

export default function StudentRegistrations({ registrations, setRegistrations, offerings }) {
  const [student, setStudent] = useState("");
  const [selectedOffering, setSelectedOffering] = useState("");

  const registerStudent = () => {
    if (student.trim() !== "" && selectedOffering !== "") {
      setRegistrations([...registrations, { student, offering: selectedOffering }]);
      setStudent("");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2">📝 Student Registrations</h2>
      <input
        type="text"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        placeholder="Enter student name"
        className="border p-2 rounded mr-2"
      />
      <select
        value={selectedOffering}
        onChange={(e) => setSelectedOffering(e.target.value)}
        className="border p-2 rounded mr-2"
      >
        <option value="">Select Offering</option>
        {offerings.map((o, i) => (
          <option key={i} value={o}>{o}</option>
        ))}
      </select>
      <button onClick={registerStudent} className="bg-red-500 text-white px-3 py-1 rounded">
        Register
      </button>

      <ul className="mt-3 list-disc ml-5">
        {registrations.map((r, i) => (
          <li key={i}>{r.student} → {r.offering}</li>
        ))}
      </ul>
    </div>
  );
}
