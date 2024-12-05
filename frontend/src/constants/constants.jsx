import { RiDashboardFill } from "react-icons/ri";

import { BiSolidUserCircle } from "react-icons/bi";
import { BsBookmark, BsFillCalendarCheckFill, BsGear } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdPriceChange, MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { SiCodereview } from "react-icons/si";

export const PROGRESSBAR_STATUS = ["Approved", "Inprogress", "Completed"];

export const CLIENT_PORTAL_ROUTES = [
  {
    name: "Dashboard",
    route: "/client",
    icon: <RiDashboardFill className="text-[1.4rem]  mx-2 cursor-pointer" />,
  },
  // {
  //   name: "Bookings",
  //   route: "/client/bookings",
  //   icon: (
  //     <BsFillCalendarCheckFill className="text-[1.4rem]  mx-2 cursor-pointer" />
  //   ),
  // },
  {
    name: "Profile",
    route: "/client/profile",
    icon: <BiSolidUserCircle className="text-[1.4rem]  mx-2 cursor-pointer" />,
  },
  {
    name: "Inprogress Bookings",
    route: "/client/bookings/inprogress",
    icon: <TbBrandBooking className="text-[1.4rem]  mx-2 cursor-pointer" />,
  },
  {
    name: "Completed Bookings",
    route: "/client/bookings/completed",
    icon: <TbBrandBooking className="text-[1.4rem]  mx-2 cursor-pointer" />,
  },
  {
    name: "All Bookings",
    route: "/client/bookings/all",
    icon: <TbBrandBooking className="text-[1.4rem]  mx-2 cursor-pointer" />,
  },
  {
    name: "Get Company Support",
    route: "/client/chat",
    icon: <TbBrandBooking className="text-[1.4rem]  mx-2 cursor-pointer" />,
  },
  // {
  //   name: "InprogressBookings",
  //   route: "/user/inprogress-bookings",
  //   icon: <TbBrandBooking className="text-[1.4rem]  mx-2 cursor-pointer" />,
  // },
  // {
  //   name: "BookingDetail",
  //   route: "/user/inprogress-bookings/detail",
  //   icon: <TbBrandBooking className="text-[1.4rem]  mx-2 cursor-pointer" />,
  // },
];

export const COMPANY_PORTAL_ROUTES = [
  {
    name: "Dashboard",
    route: "/company",
    icon: <RiDashboardFill className="text-[1.4rem]   mx-2 cursor-pointer" />,
  },
  {
    name: "Employees",
    route: "/company/employees",

    icon: <FaUsers className="text-[1.4rem]    mx-2 cursor-pointer" />,
  },
  {
    name: "Requested Bookings",
    route: "/company/requested/bookings",
    icon: (
      <BsFillCalendarCheckFill className="text-[1.4rem]    mx-2 cursor-pointer" />
    ),
  },
  {
    name: "Inprogress Bookings",
    route: "/company/bookings/inprogress",
    icon: <MdReviews className="text-[1.4rem]   mx-2 cursor-pointer" />,
  },
  {
    name: "Completed Bookings",
    route: "/company/bookings/completed",
    icon: <MdReviews className="text-[1.4rem]   mx-2 cursor-pointer" />,
  },
  {
    name: "All Bookings",
    route: "/company/bookings/all",
    icon: <MdReviews className="text-[1.4rem]   mx-2 cursor-pointer" />,
  },
  {
    name: "Set Prices",
    route: "/company/prices",
    icon: <MdPriceChange className="text-[1.4rem]   mx-2 cursor-pointer" />,
  },
  {
    name: "Sentiment Analysis",
    route: "/company/reviews/sentiment/report",
    icon: <SiCodereview className="text-[1.4rem]   mx-2 cursor-pointer" />,
  },
  {
    name: "Client Messages",
    route: "/company/chat",
    icon: <MdPriceChange className="text-[1.4rem]   mx-2 cursor-pointer" />,
  },
  //   {
  //     name: "Company Profile",
  //     route: "/company/profile",
  //     icon: <BiSolidUserCircle className="text-[1.4rem]  mx-2 cursor-pointer" />,
  //   },
];

export const ADMIN_ROUTES = [
  {
    name: "Requests",
    route: "/admin/companies/requests",

    icon: (
      <RiDashboardFill className="text-[1.4rem] text-white  mx-2 cursor-pointer" />
    ),
  },
  // {
  //   name: "Companeies",
  //   route: "/admin/companies",
  //   icon: (
  //     <BsBookmark className="text-[1.4rem] text-white  mx-2 cursor-pointer" />
  //   ),
  // },
  // {
  //   name: "Services",
  //   route: "/admin/services",
  //   icon: <BsGear className="text-[1.4rem] text-white  mx-2 cursor-pointer" />,
  // },
];

export const Employee_Routes = [
  // {
  //   name: "Dashboard",
  //   route: "/driver",
  //   icon: (
  //     <RiDashboardFill className="text-[1.4rem] text-white  mx-2 cursor-pointer" />
  //   ),
  // },
  {
    name: "Profile",
    route: "/employee/profile",
    icon: <BiSolidUserCircle className="text-[1.4rem]  mx-2 cursor-pointer" />,
  },
  {
    name: "Dashboard",
    route: "/employee",
    icon: (
      <BsFillCalendarCheckFill className="text-[1.4rem]  hover:text-primary  mx-2 cursor-pointer" />
    ),
  },

  {
    name: "All Bookings",
    route: "/employee/bookings",
    icon: <TbBrandBooking className="text-[1.4rem]  mx-2 cursor-pointer" />,
  },
  // {
  //   name: "CurrentBooking",
  //   route: "/driver/current-booking",
  //   icon: <TbBrandBooking className="text-[1.4rem]  mx-2 cursor-pointer" />,
  // },
];
