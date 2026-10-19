import Usertitle from "./Usertitle";
import LoginRegister from "./LoginRegister";

const User = () => {
  return (
    <div className="user-header">
      <Usertitle />
      <div className=" container user-header-right">
        <LoginRegister />
      </div>
    </div>
  );
};

export default User;
