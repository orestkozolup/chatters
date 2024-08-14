import AuthSection from "@/components/organisms/auth-section";
import LoginForm from "@/components/molecules/login-form";
import { loginAction } from "./loginActions";

const LoginPage = () => {
  return (
    <AuthSection>
      <LoginForm loginAction={loginAction} />
    </AuthSection>
  );
};

export default LoginPage;
