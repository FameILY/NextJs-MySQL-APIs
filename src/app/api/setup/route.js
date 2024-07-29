import { NextRequest, NextResponse } from "next/server"
import  excuteQuery  from '@/app/lib/db'

export async function GET(req){
    try {
      console.log('Creating Table')
  
      const result = await excuteQuery({
        query: `CREATE TABLE notes (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                content VARCHAR(45)
                );`,
      });
  
      return NextResponse.json({'result': result})
    } catch (e) {
     console.log(e)
    }
  }