import React from 'react';

function Course() {
  const departments = [
    {
      id: 1,
      department_name: "Computer Science and Application",
      courses: [
        "Three-year graduation course in Computer Science (BSc Hons)",
        "Bachelor of Computer Application (BCA)"
      ],
      hod: "Mr. Prakash Manna"
    },
    {
      id: 2,
      department_name: "Mathematics Department",
      courses: [
        "B.Sc. Honours in Mathematics",
        "B.Sc. (General) in Mathematics"
      ],
      hod: "Dr. Partha Sarathi Patra"
    },
    {
      id: 3,
      department_name: "Physics Department",
      courses: "Courses coming soon",
      hod: "Dr. Soumyajyoti Kabi"
    },
    {
      id: 4,
      department_name: "Geography Department",
      courses: [
        "Three years Bachelor Degree of Science in the discipline of Geography with an intake capacity of 45 pupils in each year (Credit Based Choice System as approved by affiliating University, Vidyasagar University)"
      ],
      hod: "Mr. Kanchan Paira"
    },
    {
      id: 5,
      department_name: "Botany Department",
      courses: [
        "Core Course (CC) DSC-1A: Biodiversity (Microbes, Algae, Fungi and Archegoniate)",
        "DSC-1B: Plant Ecology and Taxonomy",
        "DSC-1C: Plant Anatomy and Embryology",
        "DSC-1D: Plant Physiology and Metabolism"
      ],
      hod: "AMRITA ROY"
    },
    {
      id: 6,
      department_name: "Chemistry Department",
      courses: "Courses coming soon",
      hod: "Dr. Shalmali Hui"
    }
  ];

  return (
    <div className='max-w-screen-2xl container mx-auto p-4'>
  <h1 className='text-3xl font-bold text-center mb-8'>
    Departments and Courses
  </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map(department => (
          <div key={department.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg text-orange-400 font-semibold mb-2">{department.department_name}</h2>
            <p className="text-zinc-950 mb-2">HOD: {department.hod}</p>
            <h3 className="text-md text-zinc-950 font-semibold mb-2">Courses:</h3>
            {Array.isArray(department.courses) ? (
              <ul className="list-disc ml-4 ">
                {department.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            ) : (
              <p>{department.courses}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
