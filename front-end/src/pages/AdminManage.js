import React from 'react';
import HeaderAdmin from '../components/HeaderAdmin';
import RegisterUser from '../components/RegisterUser';
import TableUsers from '../components/TableUsers';

function AdminManage() {
  return (
    <main>
      <HeaderAdmin />
      <RegisterUser />
      <TableUsers />
    </main>
  );
}

export default AdminManage;
