// Account.tsx
import { useAuth } from "../Auth/AuthContext";

const Account = () => {
  const { session } = useAuth();

  return (
    <div>
      <p>Logged in as: {session?.user.email}</p>
      {/* Rest of your account component */}
    </div>
  );
};

export default Account;
