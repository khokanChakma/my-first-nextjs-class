import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

const ProfilePage = async () => {
  const session = await getKindeServerSession();
  const user = session?.getUser ? await session.getUser() : null;

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-md w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold mb-6">
              Welcome to your profile!
            </h1>
            <p className="mb-4">User information is not available.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-green-200 shadow-lg rounded-lg p-8 max-w-xl w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold mb-6">
            Welcome to your profile, {user?.given_name || "Guest"}!
          </h1>

          <h1 className="text-2xl font-bold mb-2">
            {user?.given_name || ""} {user?.family_name || ""}
          </h1>
          <p className="mb-4">{user?.email || "Email not available"}</p>

          <LogoutLink className="bg-gray-500 px-4 py-2 text-white rounded-lg">
            Log out
          </LogoutLink>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
