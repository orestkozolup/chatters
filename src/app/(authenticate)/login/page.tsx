import AuthSection from "@/components/organisms/auth-section";
import LoginForm from "@/components/molecules/login-form";

const LoginPage = () => {
  return (
    <AuthSection btnText="Login">
      <LoginForm />
    </AuthSection>
  );
};

export default LoginPage;
