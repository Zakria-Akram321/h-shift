import { useLoadScript } from "@react-google-maps/api";
import PropTypes from "prop-types";
import io from "socket.io-client";

import { useRef } from "react";
import { useAuth } from "src/context/AuthContext.jsx";
import { PROGRESSBAR_STATUS } from "../../constants/constants";
import Button from "../Button/Button";
import GMap from "../googleMaps/GMap";
import ProgressBar from "../progressbar/ProgressBar";
const socket = "http://localhost:5000";

BookingDetail.propTypes = {
  data: PropTypes.object,
  statusChangeHandler: PropTypes.func,
  isSupervisor: PropTypes.bool,
};

const libraries = ["places"];

export default function BookingDetail({
  data,
  statusChangeHandler = () => {},
  isSupervisor = false,
}) {
  const { user } = useAuth();
  const bottomRef = useRef(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCaorXTBQtpCqvTDwKSZID-DMfOaNTewRY",
    libraries,
  });

  if (!data) {
    //FIXME: navigate to 404 page
    return null;
  }

  //FIXME: had to decide what would be statues as per each service e.g if packing then no of status will change
  // const bookingStatus = ['packing', 'unpacking', 'dispatched', 'completed']

  // Scroll to bottom function
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  let grandTotal = 0;
  const role = user.role;

  const supervisor = data.employees?.find(
    (employee) => employee._id === data.supervisorId
  );

  let name = supervisor?.name;
  let phone = supervisor?.phone;

  if (role === "employee") {
    name = data.clientName;
    phone = data.clientPhone;
  }
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Booking Details</h1>
        {isSupervisor ? (
          <select
            className="bg-green-300 text-black text-lg driver-status px-6 h-12 rounded-full"
            name="status"
            id="status"
            value={data.status}
            onChange={statusChangeHandler}
            disabled={data.status === "completed"}
          >
            <option value="">Change status</option>
            {data.status !== "completed" && (
              <option value="inprogress">Inprogress</option>
            )}
            {data.status === "inprogress" && (
              <option value="completed">Completed</option>
            )}
          </select>
        ) : (
          <h2 className="font-semibold text-xl px-6 py-4 rounded-full bg-[#FFEFEE]">
            Status: {data.status}
          </h2>
        )}
      </div>
      <div className="w-full p-6 my-10 bg-[#FFEFEE] rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <strong className="w-32">Services:</strong>
            <p>{data.services.join(", ")}</p>
          </div>
          <Button onClick={scrollToBottom}>view Details</Button>
        </div>
        <div className="flex items-center">
          <strong className="w-32">Location:</strong>
          <p>
            {data.pickupAddress} - {data.destinationAddress}
          </p>
        </div>
        {/* Progress Bar */}
        <ProgressBar
          steps={PROGRESSBAR_STATUS}
          currentStatus={data.status}
          className="mt-24"
        />
      </div>
      {/* Drivers & Map */}
      <div className="flex mt-14">
        <div className="w-1/2">
          <h2 className="font-semibold text-2xl mb-10">
            {role === "employee" ? "Client" : "Supervisor"} Information
          </h2>
          {data.employees.length > 0 ? (
            <>
              <div className="flex justify-start items-center">
                <strong className="w-[10rem]">Name: </strong>
                <p>{name}</p>
              </div>
              <div className="flex justify-start items-center">
                <strong className="w-[10rem]">Phone no: </strong>
                <p>{phone}</p>
              </div>
              {/* {role === 'client' && (
								<div className="flex justify-start items-center">
									<strong className="w-[10rem]">Arrival: </strong>
									<p>11: 00</p>
								</div>
							)} */}
            </>
          ) : (
            <p>
              Your Booking is in <strong>{`"${data.status}"`}</strong> state. So
              no Employees assigned yet.
            </p>
          )}
        </div>
        <div className="w-1/2">
          {isLoaded && !loadError && (
            <GMap
              destinationLocation={data.destinationAddress}
              pickupLocation={data.pickupAddress}
              bookingId={data._id}
              socketUrl={socket}
            />
          )}
        </div>
      </div>

      <hr className="my-[4rem] border-1" />

      <div className="flex w-full flex-col" ref={bottomRef}>
        <h2 className="font-bold text-lg">{data.companyName}</h2>

        {/* {role !== 'employee' && <p>Ratings: 4.5</p>} */}
        <h2 className="font-semibold my-8 text-xl">Details:</h2>
        <table
          className="table-fixed equal-cols"
          style={{ "--num-cols": data.services.length + 3 }}
        >
          <thead>
            <tr>
              <th className="text-left font-medium">Item</th>
              <th className="text-left font-medium">Qty</th>
              {data.services.includes("Packing") && (
                <th className="text-left font-medium">Packing Price</th>
              )}
              {data.services.includes("Unpacking") && (
                <th className="text-left font-medium">UnPacking Price</th>
              )}
              {data.services.includes("Shifting") && (
                <th className="text-left font-medium">Shifting Price</th>
              )}
              <th className="text-left font-medium">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {data.cart?.map((item, index) => {
              let subTotal = 0;
              subTotal = data.services.includes("Packing")
                ? subTotal + item.quantity * item.packingPrice
                : subTotal;
              subTotal = data.services.includes("Unpacking")
                ? subTotal + item.quantity * item.unpackingPrice
                : subTotal;
              subTotal = data.services.includes("Shifting")
                ? subTotal + item.quantity * item.movingPrice
                : subTotal;

              grandTotal += subTotal;
              return (
                <tr className="border-b-[1px]" key={`trItem-${index}`}>
                  <td className=" py-4">{item.name}</td>
                  <td className=" py-4">{item.quantity}</td>
                  {data.services.includes("Packing") && (
                    <td className="text-left py-4">{item.packingPrice}</td>
                  )}
                  {data.services.includes("Unpacking") && (
                    <td className="text-left py-4">{item.unpackingPrice}</td>
                  )}
                  {data.services.includes("Shifting") && (
                    <td className="text-left py-4">{item.movingPrice}</td>
                  )}
                  <td className="text-left py-4">{subTotal}</td>
                </tr>
              );
            })}
            <tr>
              {/* empty td is just for spacing and formating of table */}
              <td></td>
              <td></td>
              {data.services.map((service, index) => (
                <td key={`td-space-${index}`}></td>
              ))}
              <td className="">
                <h2 className="font-medium mt-5 text-lg">
                  Grand Total: {grandTotal}
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
