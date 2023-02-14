function StudentList(props) {
    const { students } = props;
    return (
        <table>
            {students.map((student, index) => (
                <table key={index}>
                    <td>
                        <th>{student.name}</th>
                        <th>{student.age}</th>
                        <th>{student.major}</th>
                    </td>
                </table>
            ))}
        </table>
    );
}

export default StudentList;
