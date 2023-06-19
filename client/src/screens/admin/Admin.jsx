/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Loader from '../../components/Loader';
// import Error from '../../components/Error';

import { Tabs } from 'antd';
const { TabPane } = Tabs;
import './admin.css';
import Rooms from './Rooms';
import Users from './Users';
import Bookings from './Bookings';
import AddRoom from './AddRoom';
const Admin = () => {
  // for admin verification
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!localStorage.getItem('currentUser')) {
      window.location.href = '/home';
    }
    if (currentUser && !currentUser.isAdmin) {
      window.location.href = '/home';
    }
  }, []);
  return (
    <div className="mt-3 ml-3 mr-3 box-shadow">
      <h1 style={{ fontSize: '25px' }}>
        <b>Admin Panel</b>
      </h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <Bookings />
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <Rooms />
        </TabPane>
        <TabPane tab="Add Room" key="3">
          <AddRoom />
        </TabPane>
        <TabPane tab="Users" key="4">
          <Users />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Admin;
