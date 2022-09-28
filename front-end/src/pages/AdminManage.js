import { useEffect, useState } from 'react';
import HeaderAdmin from '../components/HeaderAdmin';
import { requestData } from '../services/requestUser';
import RegisterUser from '../components/RegisterUser';
import TableUsers from '../components/TableUsers';

function AdminManage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUsers() {
      const result = await requestData('/users/users');
      console.log('users', result);
      setUsers(result);
      setLoading(true);
    }
    getUsers();
  }, []);

  return (
    <main>
      <HeaderAdmin />
      <RegisterUser />
      <div>
        { !loading ? <span>Carregando...</span>
          : <TableUsers users={ users } />}
      </div>
    </main>
  );
}

export default AdminManage;
