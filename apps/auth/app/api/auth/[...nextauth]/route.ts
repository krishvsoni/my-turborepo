import { NextResponse, NextRequest } from "next/server";

export function GET(req:NextRequest,{ params }:{ params: {nextauth:string[]}}){
    console.log(params.nextauth[0])
    return NextResponse.json({
        message:'Handler'
    })
}
