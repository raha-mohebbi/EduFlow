import { RiNotification2Fill } from "react-icons/ri";

const Notification = () => {
  return (
    <div className="notification">
      <button className="border rounded-lg p-2 hover:bg-gray-100 transition">
        <RiNotification2Fill size={20} />
      </button>
    </div>
  );
};

export default Notification;