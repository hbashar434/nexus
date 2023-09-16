import React from "react";
import { LiaTimesSolid } from "react-icons/lia"; // Import the X icon from react-icons
import Border from "./Border";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-f lg:w-1/2 bg-[#f1f0e8] transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition duration-700 ease-in-out overflow-y-auto`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-gray-900">
          <LiaTimesSolid size={22} />
        </button>
      </div>
      <div className=" p-8 lg:p-28 font-suisse-regular text-[#333]">
        <h2 className="my-text-size">Shipping fees and delivery times</h2>
        <Border />
        <div className="my-text-size">
          <h1>SF Express (Hong Kong SAR, China)</h1>
          <div className="flex flex-col my-text-size">
            <div className="flex justify-between py-3 my-text-size">
              <div className="text-[#666]">Orders below $400</div>
              <div className="text-[#666]">$40</div>
            </div>
            <div className="flex justify-between pt-3 pb-5">
              <div className="text-[#666]">Orders $400 and over</div>
              <div className="text-[#666]">Complimentary</div>
            </div>
            <div className="flex justify-between pt-5 pb-3">
              <div className="text-[#666]">Urban areas</div>
              <div className="text-[#666]">2-3 business days</div>
            </div>
            <div className="flex justify-between py-3">
              <div className="text-[#666]">Outlying Islands</div>
              <div className="text-[#666]">3-5 business days</div>
            </div>
          </div>
        </div>
        <Border />
        <div className="my-text-size">
          <h1>Morning Global (Macau SAR, China)</h1>
          <div className="flex flex-col my-text-size">
            <div className="flex justify-between py-3 my-text-size">
              <div className="text-[#666]">Orders below $400</div>
              <div className="text-[#666]">$60</div>
            </div>
            <div className="flex justify-between pt-3 pb-5">
              <div className="text-[#666]">Orders over $400</div>
              <div className="text-[#666]">Complimentary</div>
            </div>
            <div className="flex justify-between pt-5 pb-3">
              <div className="text-[#666]">All areas</div>
              <div className="text-[#666]">5-7 business days</div>
            </div>
            <div className="text-[#666] py-3">
              Regrettably we are unable to accept orders containing Dangerous
              Goods to Macau SAR, China.
            </div>
          </div>
        </div>
        <Border />
        <div className="my-text-size">
          <h1>Complimentary samples</h1>
          <div className="flex flex-col my-text-size">
            <div className="text-[#666] py-3">
              All online orders include complimentary samples. At checkout,
              select from the available bundles to add them to your order.
            </div>
          </div>
        </div>
        <Border />
        <div className="my-text-size">
          <h1>Click and Collect</h1>
          <div className="flex flex-col my-text-size">
            <div className="text-[#666] py-3">
              Simply choose in-store collection at checkout, then pick up your
              order at your preferred location.
            </div>
            <div className="text-[#666] py-3">
              For general enquiries regarding Click and Collect, we welcome you
              to phone us on +852 3001 6734 instead of contacting your local
              store.
            </div>
          </div>
        </div>
        <Border />
        <div className="my-text-size">
          <h1>Returns</h1>
          <div className="flex flex-col my-text-size">
            <div className="text-[#666] py-3">
              Online purchases may be returned to us or any Aesop Stores within
              30 days.
            </div>
          </div>
        </div>
        <Border />
        <div className="my-text-size">
          <h1>Carbon neutral shipping</h1>
          <div className="flex flex-col my-text-size">
            <div className="text-[#666] py-3">
              We offset operational emissions to ensure the delivery of every
              order is carbon neutral.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
