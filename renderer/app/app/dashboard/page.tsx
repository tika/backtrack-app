"use client";

import { Button } from "@/components/ui/button";
import { DashboardProjects } from "@/components/dashboard-projects";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../layout";

export default function DashboardPage() {
  const user = useContext(UserContext);

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-10">
        {user.name}
      </h1>
      <DashboardProjects />
      <Link href="/app/projects/create">
        <Button>Create new project</Button>
      </Link>
    </>
  );
}