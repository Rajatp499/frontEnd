import { GrDown } from 'react-icons/gr'
import { ArrowUp } from 'lucide-react';
import { useAppSelector } from '../../hooks/hooks';
const Dashboard = () => {
    const date = new Date(Date.now());
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    const user = useAppSelector(state => state.user);
    return (
        <div className='min-h-screen flex bg-background'>
            {/* Navbar */}
            <div className='bg-darkBlue text-White p-2 w-1/4'>
                ca
            </div>
            {/* Right side content */}
            <div className=' p-6 w-full mx-32'>
                {/* Overview Tab */}
                <div className='bg-White rounded-xl p-3 mb-8 flex justify-between'>
                    <div className=' flex flex-col items-center'>
                        <div className='text-2xl font-bold'>Overview</div>
                        <div className='text-sm text-Black/40 ml-2'>{formattedDate}</div>

                    </div>
                    <div className='text-md flex items-center gap-x-2'>
                        <div className='w-10 h-10 rounded-full'><img src={user.photo} alt='profile' className='rounded-full' /></div>
                        <span>{user.name}</span>
                        <span><GrDown /></span>
                    </div>
                </div>
                {/* Cards */}
                <div className='flex justify-evenly'>
                    <div className='bg-White w-fit rounded-xl p-4 flex flex-col gap-y-2'>
                        <div className=' text-md '>Revenue</div>
                        <div className='font-bold text-4xl text-center'>12.4k</div>
                        <div className='text-sm text-Black/60 flex items-center'><ArrowUp className='text-green-700' /> +2.1% vs yesterday</div>

                    </div>
                     <div className='bg-White w-fit rounded-xl p-4 flex flex-col gap-y-2'>
                        <div className=' text-md '>Revenue</div>
                        <div className='font-bold text-4xl text-center'>12.4k</div>
                        <div className='text-sm text-Black/60 flex items-center'><ArrowUp className='text-green-700' /> +2.1% vs yesterday</div>

                    </div>
                     <div className='bg-White w-fit rounded-xl p-4 flex flex-col gap-y-2'>
                        <div className=' text-md '>Revenue</div>
                        <div className='font-bold text-4xl text-center'>12.4k</div>
                        <div className='text-sm text-Black/60 flex items-center'><ArrowUp className='text-green-700' /> +2.1% vs yesterday</div>

                    </div>
                     <div className='bg-White w-fit rounded-xl p-4 flex flex-col gap-y-2'>
                        <div className=' text-md '>Revenue</div>
                        <div className='font-bold text-4xl text-center'>12.4k</div>
                        <div className='text-sm text-Black/60 flex items-center'><ArrowUp className='text-green-700' /> +2.1% vs yesterday</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard