import { Bounce, ToastContainer } from "react-toastify"
import AppRoutes from "./Router"
import { useEffect } from "react"
import { useAppDispatch } from "./hooks/hooks"
import { setUser } from "./store/slices/userSlice"
//axiosInstance
import axiosInstance from "./axios/axiosInstance"

function App() {

  const dispatch = useAppDispatch();
  // const user = useAppSelector(state => state.user)

  useEffect(()=>{
    const fetchUser = async()=>{
      try{
        const response =  await axiosInstance.get('/api/user')
        // console.log(response)
        dispatch(setUser(response.data.user))
      }
      catch(err){
         console.log(err)
      }
  }
  fetchUser();
},[])
// console.log(user);

  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      /> 
         </>
  )
}

export default App
