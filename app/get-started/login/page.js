import LoginForm from "@/components/forms/login-form";
import { getServerSession } from "next-auth";
import {redirect} from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function GettingStarted(){
    const session = await getServerSession(authOptions);
    if(session){
        redirect('/explore');
    }
    return <>
        <LoginForm />
    </>
}