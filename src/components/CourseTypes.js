import { useState } from "react";

export default function CourseTypes({ courseTypes, setCourseTypes }) {
  const [type, setType] = useState("");

  const addCourseType = () => {
    if (type.trim() !== "") {
      setCourseTypes([...courseTypes, type]);
      setType("");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2">📌 Course Types</h2>
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Enter course type"
        className="border p-2 rounded mr-2"
      />
      <button onClick={addCourseType} className="bg-blue-500 text-white px-3 py-1 rounded">
        Add
      </button>

      <ul className="mt-3 list-disc ml-5">
        {courseTypes.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
