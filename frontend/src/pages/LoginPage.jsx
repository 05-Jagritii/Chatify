import {useState} from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { LockIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import { LoaderIcon } from "react-hot-toast";
import { Link } from "react-router";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen w-screen bg-slate-900 overflow-hidden p-8">
      {/* Centering layer */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full max-w-6xl max-h-[750px]">
          <BorderAnimatedContainer>
            <div className="w-full h-full flex flex-col md:flex-row">
              {/* LEFT SIDE */}
              <div className="md:w-1/2 h-full p-8 flex items-center justify-center md:border-r border-slate-600/30">
                <div className="w-full max-w-md">
                  <div className="text-center mb-8">
                    <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                    <h2 className="text-2xl font-bold text-slate-200 mb-2">
                      Welcome Back
                    </h2>
                    <p className="text-slate-400">
                      Login to access to your account
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="auth-input-label">Email</label>
                      <div className="relative">
                        <MailIcon className="auth-input-icon" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="input"
                          placeholder="johndoe@gmail.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="auth-input-label">Password</label>
                      <div className="relative">
                        <LockIcon className="auth-input-icon" />
                        <input
                          type="password"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                          className="input"
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>

                    <button
                      className="auth-btn"
                      type="submit"
                      disabled={isLoggingIn}
                    >
                      {isLoggingIn ? (
                        <LoaderIcon className="w-full h-5 animate-spin text-center" />
                      ) : (
                        "Sign In"
                      )}
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <Link to="/signup" className="auth-link">
                      Don't have an account? Sign Up
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="hidden md:flex h-full items-center justify-center" />

              <div className="flex flex-col items-center text-center px-8">
                <img
                  src="/signup.png"
                  alt="People using mobile devices"
                  className="max-w-md w-full object-contain mb-8"
                />

                <h3 className="text-xl font-medium text-cyan-400 mb-3">
                  Connect anytime, anywhere
                </h3>

                <div className="mt-4 flex justify-center gap-4">
                  <span className="auth-badge">Free</span>
                  <span className="auth-badge">Easy Setup</span>
                  <span className="auth-badge">Private</span>
                </div>
              </div>
            </div>
          </BorderAnimatedContainer>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
