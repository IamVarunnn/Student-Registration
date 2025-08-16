import { useState } from "react";

export default function CourseOfferings({ offerings, setOfferings, courses }) {
  const [selectedCourse, setSelectedCourse] = useState("");

  const addOffering = () => {
    if (selectedCourse !== "") {
      setOfferings([...offerings, selectedCourse]);
      setSelectedCourse("");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2">📖 Course Offerings</h2>
      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
        className="border p-2 rounded mr-2"
      >
        <option value="">Select Course</option>
        {courses.map((c, i) => (
          <option key={i} value={c.name}>
            {c.name} ({c.type})
          </option>
        ))}
      </select>
      <button onClick={addOffering} className="bg-purple-500 text-white px-3 py-1 rounded">
        Add Offering
      </button>

      <ul className="mt-3 list-disc ml-5">
        {offerings.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
    </div>
  );
}
