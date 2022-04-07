import Realm from 'realm';

// Declare User Schema
class UserSchema extends Realm.Object {}

UserSchema.schema = {
  name: 'User',
  properties: {
    _id: 'int',
    empFirstName: 'string?',
    empLastName: 'string?',
    empEmailId: 'string?',
    empConfirmEmailId: 'string?',
    empTitle: 'string?',
    empDepartment: 'string?',
    empSalary: 'string?',
  },
};

// Create realm
let realm = new Realm({schema: [UserSchema], schemaVersion: 4});

// Functions
// Return all Users
let getAllUsers = () => {
  return realm.objects('User');
};

// Add a single User using parameters
let addUser = (
  _id,
  _empFirstName,
  _empLastName,
  _empEmailId,
  _empConfirmEmailId,
  _empTitle,
  _empDepartment,
  _empSalary,
) => {
  realm.write(() => {
    const book = realm.create('User', {
      _id: _id,
      empFirstName: _empFirstName,
      empLastName: _empLastName,
      empEmailId: _empEmailId,
      empConfirmEmailId: _empConfirmEmailId,
      empTitle: _empTitle,
      empDepartment: _empDepartment,
      empSalary: _empSalary,
    });
    console.log(
      `created tasks: ${book._id} ${book.empFirstName} ${book.empLastName}`,
    );
  });
};

// Exports
// Export the realm so other files can access it
export default realm;

// Export other functions so other files can access it
export {getAllUsers, addUser};
