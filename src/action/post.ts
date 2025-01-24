import { prisma } from "@/lib/prisma";
import { getDbUserId } from "./user.action";
import { revalidatePath } from "next/cache";

export async function createPost({content,imageUrl}:{content:string,imageUrl:string}){
    try{
      const userId= await getDbUserId()
    if (!userId) throw new Error("User not found")
    const post = await prisma.post.create({
        data:{
            content,
            image:imageUrl,
            authorId:userId
        }
    })
    revalidatePath("/") //purse the cache for homepage
    return {success:true,post}  
    }catch(error){
        console.error("Failed to create post:",error)
        return {success:false,error:"Failed to create post"}
    }
    
}