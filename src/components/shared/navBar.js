
import Link from 'next/link'

const NavBar = () => {

    const navItems = [
        {
            id:"1",
            route:"Home",
            pathname:"/"
        }
        ,
        {
            id:"2",
            route:"Video Conferencing",
            pathname:"/videoConferencing"
        }
        ,
        {
            id:"3",
            route:"Task Management Board",
            pathname:"/taskManagementBoard"
        }
        ,
        {
            id:"4",
            route:"Calender Scheduling",
            pathname:"/calenderScheduling"
        }
        
    ]

    return (
        <div class="navbar bg-teal-500 bg-opacity-40">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-x-4 w-52">
                        {
                            navItems.map(item=>
                                <Link key={item.id} href={item.pathname}>{item.route}</Link>
                            )
                        }
                    </ul>
                </div>
                <a class="btn btn-ghost text-xl">SyncMate</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal space-x-4 px-1">
                   {
                            navItems.map(item=>
                                <Link key={item.id} href={item.pathname}>{item.route}</Link>
                            )
                        }
                </ul>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;