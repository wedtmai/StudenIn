import { useNavigate } from "react-router";
import { useAuth, Role } from "../context/AuthContext";
import { GraduationCap } from "lucide-react";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login("student"); // Defaulting to student for this prototype
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-[#00966D] rounded-xl flex items-center justify-center mb-6 shadow-md">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Welcome to StudentIn
          </h1>
          <p className="text-sm text-gray-500">
            The comprehensive academic networking and mentorship platform
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-sm rounded-2xl border border-gray-100 sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  defaultValue="student@psau.edu.sa"
                  className="appearance-none block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#00966D] focus:border-[#00966D] sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Select your role
              </label>
              <div className="mt-1">
                <select
                  id="role"
                  name="role"
                  className="appearance-none block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#00966D] focus:border-[#00966D] sm:text-sm transition-colors bg-white"
                >
                  <option value="student">Undergraduate Student</option>
                  <option value="mentor">Graduate Mentor</option>
                  <option value="professor">Professor/Supervisor</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-[#00966D] focus:ring-[#00966D] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#00966D] hover:bg-[#007F5B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00966D] transition-colors"
              >
                Sign In →
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="font-medium text-[#00966D] hover:text-[#007F5B]">
                Register now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
