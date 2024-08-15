import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import { redirect } from "next/navigation";

const UsersPage = async () => {
  const session = await getServerSession(authOptions);

  console.log("HERE1", session);

  if (!session) {
    redirect("/");
  }

  return <div>Hello Users Page</div>;
};

export default UsersPage;
