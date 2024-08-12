import Notes from "@/components/Notes";
import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-20 h-[50vh] flex justify-center items-center">
      <ProfileCard />
    </main>
  );
}
