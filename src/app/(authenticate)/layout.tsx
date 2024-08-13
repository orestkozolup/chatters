import AuthTemplate from "@/components/templates/auth-layout";

interface AuthLayoutProps {
  children: React.ReactElement;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <AuthTemplate>{children}</AuthTemplate>;
};

export default AuthLayout;
