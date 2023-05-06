import Chat from "@/component/chat";
import Login from "@/component/login";
import { NextPage, NextPageContext } from "next";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <>
          <button onClick={() => signOut()}>signOut</button>
          <Chat />
        </>
      ) : (
        <Login onClickLogin={() => signIn("google")} />
      )}
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Home;
