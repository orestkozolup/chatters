import AuthSection from "@/components/organisms/auth-section";
import RegisterForm from "@/components/molecules/register-form";

const RegisterPage = () => {
  return (
    <AuthSection btnText="Register">
      <RegisterForm />
    </AuthSection>
  );
};

export default RegisterPage;
