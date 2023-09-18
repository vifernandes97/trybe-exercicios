const user = {
  name: 'Vinicius',
  lastName: 'Fernandes',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
