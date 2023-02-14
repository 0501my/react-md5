import React from 'react';
import StudentList from './students'

function App() {
  const students = [
    { name: 'Đại', age: 20, major: 'A' },
    { name: 'Lộc', age: 22, major: 'B' },
    { name: 'Tùng', age: 21, major: 'C' },
  ];
  return (
      <th>
        <h1>List of Students</h1>
        <StudentList students={students} />
      </th>
  );
}

export default App;
