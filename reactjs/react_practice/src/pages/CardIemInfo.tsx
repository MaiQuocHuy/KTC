import React from "react";
import { AiFillPhone, AiOutlineBell, AiOutlineCamera } from "react-icons/ai";
import ProfileCard from "../components/ui/Card/ProfileCard";
import ContactCard from "../components/ui/Card/ContentCard";
import TeamCard from "../components/ui/Card/TeamCard";
import TransactionCard from "../components/ui/Card/TransactionCard";
import NotificationCard from "../components/ui/Card/NotificationCard";

const CardItemInfo = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-5">
      <div className="flex flex-col gap-4 w-xs">
        {/* Profile with Camera */}
        <ProfileCard
          name="Yolanda"
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          subtitle="Web Development"
          rightContent={<AiOutlineCamera className="text-2xl text-black" />}
        />

        {/* Contact Card */}
        <ContactCard
          name="María"
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          icon={<AiFillPhone className="text-2xl text-black" />}
          center={true}
        />

        {/* Blue Profile Card */}
        <ProfileCard
          name="Miriam Jiminez"
          avatar="https://randomuser.me/api/portraits/women/44.jpg"
          backgroundColor="bg-[#12C0E7]"
          textColor="text-white"
          rounded={true}
        />

        {/* Purple Team Card */}
        <TeamCard
          members={[
            {
              avatar: "https://randomuser.me/api/portraits/men/1.jpg",
              name: "User 1",
            },
            {
              avatar: "https://randomuser.me/api/portraits/men/2.jpg",
              name: "User 2",
            },
            {
              avatar: "https://randomuser.me/api/portraits/women/3.jpg",
              name: "User 3",
            },
          ]}
          title="Team"
          subtitle="Two currently"
          backgroundColor="bg-[#740EF5]"
        />

        {/* Yellow Team Card */}
        <TeamCard
          members={[
            {
              avatar: "https://randomuser.me/api/portraits/men/1.jpg",
              name: "User 1",
            },
            {
              avatar: "https://randomuser.me/api/portraits/men/2.jpg",
              name: "User 2",
            },
          ]}
          title="New Teams"
          backgroundColor="bg-[#FFF614]"
          textColor="text-black"
        />

        {/* Transaction Card */}
        <TransactionCard
          name="Nike"
          logo="https://cdn.simpleicons.org/nike/000000"
          category="Sportswear"
          amount="-27.50"
          time="11:00AM"
        />

        {/* Notification Card */}
        <NotificationCard
          message="All your notification are well turned on"
          icon={<AiOutlineBell className="text-xl text-black inline" />}
          count={3}
        />
      </div>
    </div>
  );
};

export default CardItemInfo;
