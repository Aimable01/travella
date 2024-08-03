import { useAuth } from "../auth/useAuth";
import Sidebar from "./components/Sidebar";

export default function App1() {
  const { session, loading } = useAuth();

  console.log(session);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Sidebar />
    </div>
  );
}
