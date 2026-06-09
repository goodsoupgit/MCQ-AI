"use client";
import { signInAnonymously } from "firebase/auth";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AnonymousSignin() {
  const router = useRouter();
  const signIn = async () => {
    try {
      await signInAnonymously(auth);
      router.push("/dashboard");
    } catch (e) {
      console.error("Sign in error", e);
    }
  };

  return (
    <button
      onClick={() => signIn()}
      className="mx-auto block border-black border-2 rounded-lg mb-1.5 px-4 py-2 w-4/5 max-w-xs text-white bg-slate-100 flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800"
    >
      <Image
        src="/pfp.jpg"
        width={30}
        height={30}
        className="w-auto h-auto rounded-full"
        alt="Anonymous icon"
      />
      Use without an account
    </button>
  );
}
