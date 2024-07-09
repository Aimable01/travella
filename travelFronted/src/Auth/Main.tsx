import { useAuth } from "./AuthContext";
import Signup from "./Signup";
import Account from "../User/Account";

function Main() {
  const { session, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? <Signup /> : <Account key={session.user?.id} />}
    </div>
  );
}

export default Main;
