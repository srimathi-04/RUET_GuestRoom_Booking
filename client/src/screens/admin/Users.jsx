/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users/getallusers');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Users</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            {error ? (
              <div>Error occurred while fetching bookings.</div>
            ) : (
              <table className="table table-bordered table-info">
                <thead className="box-shadow">
                  <tr>
                    <th>User Id</th>
                    <th>Full Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>NID no</th>
                    <th>Is Admin</th>
                    <th>Is Verified</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan="6">No Users available.</td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.fullname}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.dob}</td>
                        <td>{user.address}</td>
                        <td>{user.phone}</td>
                        <td>{user.nid}</td>
                        <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                        <td>{user.isVerified ? 'Yes' : 'No'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Users;
