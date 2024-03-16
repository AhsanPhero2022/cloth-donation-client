import { ReactNode } from "react";
import { useAppSelector } from "../../pages/redux/hook";
import { useCurrentToken } from "../../pages/redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";


const ProtectedRout = ({children} : {children: ReactNode})=> {

    const token = useAppSelector(useCurrentToken)


    if(!token){
        return <Navigate to='/login' replace={true} />
    }

    return children
}

export default ProtectedRout;