import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { requestData, deleteUser } from '../services/requestUser';

function TableUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUsers() {
      const result = await requestData('/users/users');
      setUsers(result);
      setLoading(true);
    }
    getUsers();
  });

  const deleteUsers = async (email) => {
    await deleteUser(`/users/${email}`);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      { !loading ? <tbody><tr><td>Carregando...</td></tr></tbody>
        : users.map(({ id, name, email, role }, index) => (
          <tbody key={ id }>
            <tr>
              <td
                data-testid={
                  `admin_manage__element-user-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                { name }
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                { email }
              </td>
              <td
                data-testid={
                  `admin_manage__element-user-table-role-${index}`
                }
              >
                { role }
              </td>
              <td>
                <button
                  type="button"
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                  onClick={ () => deleteUsers(email) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>))}
    </table>
  );
}

TableUsers.propTypes = {
  users: PropTypes.array,
}.isRequired;

export default TableUsers;
