import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { push } = useRouter();

  const handlerLogin = () => {
    push("/product");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum punya akun? Registrasi<Link href={"/auth/register"}> disini</Link>
      </p>
    </div>
  );
}
