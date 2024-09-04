"use client";
import { FileTabs } from "@/components";
import style from "./style/page.module.css";

const tabs = [
  { id: 0, label: "KI67" },
  { id: 1, label: "HER2" },
  { id: 2, label: "Estróg" },
  { id: 3, label: "Progester" },
];
export default function UploadImages() {
  return (
    <main className={style.main}>
      <FileTabs tabs={tabs} />
    </main>
  );
}
