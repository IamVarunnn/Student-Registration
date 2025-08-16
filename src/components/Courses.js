import { useState } from "react";

export default function Courses({ courses, setCourses, courseTypes }) {
  const [course, setCourse] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const addCourse = () => {
    if (course.trim() !== "" && selectedType !== "") {
      setCourses([...courses, { name: course, type: selectedType }]);
      setCourse("");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-lg font-bold mb-2">📚 Courses</h2>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border p-2 rounded mr-2"
      >
        <option value="">Select Course Type</option>
        {courseTypes.map((t, i) => (
          <option key={i} value={t}>{t}</option>
        ))}
      </select>
      <input
        type="text"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Enter course"
        className="border p-2 rounded mr-2"
      />
      <button onClick={addCourse} className="bg-green-500 text-white px-3 py-1 rounded">
        Add
      </button>

      <ul className="mt-3 list-disc ml-5">
        {courses.map((c, i) => (
          <li key={i}>{c.name} ({c.type})</li>
        ))}
      </ul>
    </div>
  );
}
