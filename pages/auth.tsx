import { AuthSuccessSection } from "@features/auth/sections/AuthSuccessSection";
import { MainLayout } from "@layouts/MainLayout";

export default function AuthPage() {
  return (
    <MainLayout>
      <AuthSuccessSection />
    </MainLayout>
  );
}
