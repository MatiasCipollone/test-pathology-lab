"use client";
import styles from "./page.module.css";
import { LoginModal } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginModal
        textColor="#D9668D"
        buttonColor="#D9668D"
        onLogin={() => null}
      />
    </main>
  );
}
