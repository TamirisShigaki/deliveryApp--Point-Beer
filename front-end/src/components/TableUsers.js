import PropTypes from 'prop-types';
import { deleteUser } from '../services/requestUser';

function TableUsers(props) {
  const { users } = props;

  const deleteUsers = async (email) => {
    await deleteUser(`/users/${email}`);
    window.location.reload(true);
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

      {users.map(({ id, name, email, role }, index) => (
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
