import { AuthSuccessSection } from "@features/auth/sections/AuthSuccessSection";
import { getAppServerSideProps } from "@features/ssr/getAppServerSideProps";
import { MainLayout } from "@layouts/MainLayout";

export const getServerSideProps = getAppServerSideProps(async (store, ctx) => {
  return {
    props: {},
  };
});

export default function AuthPage() {
  return (
    <MainLayout>
      <AuthSuccessSection />
    </MainLayout>
  );
}
