import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';
import { XIcon } from 'lucide-react';
interface imageUploadProps{
    onChange:(url:string)=> void
    value:string;
    endpoint:"postImage"
}
function ImageUpload({endpoint,onChange,value}:imageUploadProps) {
    if(value){
        return (
    <div className="relative">
      <Image src={value || ""} width={40} height={40} alt='upload image' />
        <Button
            variant="ghost"
            className="absolute top-0 right-0 z-10 bg-red-500 rounded-full shadow-sm p-1 w-8 h-8"
        >
            <XIcon className="w-4 h-4 text-white" />
        </Button>
    </div>
  )
    }
    return (<>
        image
    </>)
  
}

export default ImageUpload
