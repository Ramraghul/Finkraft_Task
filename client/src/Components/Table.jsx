import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import './Table.css'
import axios from 'axios';


function Table() {
    const tableRef = useRef(null);
    const [userdata, setUserdata] = useState([]);
    useEffect(() => {
        const table = $(tableRef.current);

        const fetchUserdata = async () => {
            try {
                //Get user all data from database;
                const response = await axios.get('http://localhost:9000/User_data');
                setUserdata(response.data.User);

                // check if the table has already been initialized;
                if (!table.hasClass('dataTable')) {
                    // initialize the DataTable with the data;
                    table.DataTable({
                        //Store the data;
                        data: response.data.User,
                        columns: [
                            { title: 'Name', data: 'Name' },
                            { title: 'Position', data: 'Position' },
                            { title: 'Office', data: 'Office' },
                            { title: 'Age', data: 'Age' },
                            { title: 'Start Date', data: 'Start_date' },
                            { title: 'Salary', data: 'Salary' },
                        ],
                        //Component params;
                        paging: true,
                        dom: 'lfrtip',
                        lengthMenu: [10, 25, 50, 100],
                        searching: true,
                        ordering: true,
                        language: {
                            paginate: {
                                previous: '<i class="fas fa-chevron-left"></i>',
                                next: '<i class="fas fa-chevron-right"></i>',
                            },
                            info: 'Showing _START_ to _END_ of _TOTAL_ entries',
                        },
                    });
                } else {
                    // if the table has already been initialized, update its data
                    table.DataTable().clear().rows.add(response.data.User).draw();
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserdata();
    }, []);

    return (
        <>

            <table ref={tableRef} className="table table-striped table-bordered animated-table" style={{ width: "100%", marginTop: "20%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {userdata.map((user, index) => (
                        <tr key={index}>
                            <td>{user.Name}</td>
                            <td>{user.Position}</td>
                            <td>{user.Office}</td>
                            <td>{user.Age}</td>
                            <td>{user.Start_date}</td>
                            <td>{user.Salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table