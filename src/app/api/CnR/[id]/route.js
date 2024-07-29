import { NextResponse } from "next/server";
import excuteQuery from "@/app/lib/db";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const result = await excuteQuery({
      query: `SELECT * FROM notes WHERE id = ${id}`,
    });

    return NextResponse.json({ result: result });
  } catch (err) {
    console.log(err);
  }
}

export async function DELETE(req, {params}){
  try {
    const {id} = params;
    const result = await excuteQuery({
      query: `DELETE FROM notes WHERE id = ${id}`
    })

    return NextResponse.json({ result: result });
  } catch (err) {
  console.log(err);
  }
}


