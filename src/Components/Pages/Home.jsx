import Cards from "../Cards";
import Footer from "../Footer";
import Herosection from "../Herosection";
import Navbar from "../Navbar";

export function Home(){
    return(
    <>
    <div className=' relative'>
    <div className='bg absolute min-h-[100vh] w-full'></div>
    <Herosection></Herosection>
    </div>
    {/* <Cards></Cards> */}
    <div className='p-[50px] bg-gray-500'>
    < Cards></Cards>
    </div>
    <div className='p-[20px]'>

    </div>
    </>)
}