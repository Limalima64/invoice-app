//Pour recuperer les projects de l'api
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyIzMTViNjEwZS05Mzg0LTQ4MTgtYWNmMy1hMGY2NjZlZGM5M2EiLCI3MDQ5MzcyMy03ZTFhLTQxYjktOGY5MC1iYTI0NGVjNGUwNGEiLCJmMWRmYzI0OS1hMDI2LTQ5OTctODFkNC0yMzRhNTY0ZWI4YmUiLCIyOGVlZTU3NC1hZGY4LTQwZDYtYmM4Yi0zNGU0NmY1YjI0M2QiLCIxNzRiYzZkZi0zZTRhLTQ5NzgtYTY4NC05ODgyNjkxNDY0Y2MiXSwibmFtZSI6Im5pY29sYXMiLCJlbWFpbCI6Im5pY29sYXNAbWFudGxlLnNlcnZpY2VzIiwiaWF0IjoxNzQ5NjY1NDAwfQ";

  const bearer = jwt.sign({}, token, {algorithm:"HS256"});

  try {

    const res = await fetch("http://20.116.216.18:3000/projects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Erreur API distante:", res.status, errorText);
      return new NextResponse(`Erreur API distante: ${errorText}`, {
        status: res.status,
      });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Erreur crsah serveur:", error);
    return new NextResponse("Erreur serveur", { status: 500 });
  }
}
