import { NextRequest, NextResponse } from "next/server"

import  excuteQuery  from '@/app/lib/db'

export async function POST(req,res){
  try {
    console.log('post hit')
    const formData = await req.formData();
    const body = {};
    formData.forEach((value, key) => {
      body[key] = value;
    });

    const result = await excuteQuery({
      query: 'INSERT INTO notes(content) VALUES(?)',
      values: [body.content]
    });

    return NextResponse.json({'result': result})
  } catch (e) {
   console.log(e)
  }
}

export async function GET(req,res){
  try{
    
    const result = await excuteQuery({
      query: 'SELECT * FROM notes',
     
    });

    return NextResponse.json({result: result})

  } catch (err) {
    console.log(err)
  }
}

export async function PUT(req, res) {
  try {

    const data = await req.formData();
    const body = {};
    data.forEach((value, key) => {
      body[key] = value;
    });

    const result = await excuteQuery({
      query: `UPDATE notes SET content = "${body.content}" WHERE id = ${body.id}`
    })

    return NextResponse.json({ result: result });
  } catch (err) {
    console.log(err);
  }
}

