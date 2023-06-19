/* eslint-disable react/prop-types */
const Error = ({ message }) => {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    </div>
  );
};

export default Error;
