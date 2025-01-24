"use client"
import CreatePost from "@/components/CreatePost";
import { Card, CardContent } from "@/components/ui/card";
import Userrecommendation from "@/components/Userrecommendation";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const user= useUser()
  if(!user) return <p>No user found</p>
  return (
    <>
    <div className="m-4 grid lg:grid-cols-10 gap-4">
       <div className="bg-gray-500 lg:col-span-6" >
          <CreatePost/>
       </div>
       <div className="bg-red-400 lg:col-span-4" >
        <Card>
          <CardContent>
            <Userrecommendation/>
          </CardContent>
        </Card>
       </div>
    </div>
    
    </>
  );
}
