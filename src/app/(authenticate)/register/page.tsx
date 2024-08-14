import AuthSection from "@/components/organisms/auth-section";
import RegisterForm from "@/components/molecules/register-form";
import { registerAction } from "./registerActions";

const RegisterPage = () => {
  return (
    <AuthSection>
      <RegisterForm registerAction={registerAction} />
    </AuthSection>
  );
};

export default RegisterPage;
