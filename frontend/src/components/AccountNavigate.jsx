import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AccountNavigate({ label, button, to }) {
  const Navigate = useNavigate();
  return (
    <div className="flex justify-center pb-5">
      {label}
      <button className="link underline" onClick={() => Navigate(to)}>
        {button}
      </button>
    </div>
  );
}

export default AccountNavigate;
