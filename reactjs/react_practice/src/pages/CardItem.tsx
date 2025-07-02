import React from "react";
import CardMatch from "../components/ui/Card/CardMatch";
import CardClub from "../components/ui/Card/CardClub";
import CardPayment from "../components/ui/Card/CardPayment";
import CardProgress from "../components/ui/Card/CardProgress";

const CardItem = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 gap-4">
      <CardMatch
        time="7'"
        leftCountry={{ name: "Spain", flag: "https://flagcdn.com/w40/es.png" }}
        rightCountry={{
          name: "France",
          flag: "https://flagcdn.com/w40/fr.png",
        }}
        score="0 : 0"
      />
      <CardClub
        name="Manchester United"
        logo="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png"
      />
      <CardPayment
        name="Wade Warren"
        logo="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png"
        type="VISA"
        number="3123 12312 ****"
      />
      <CardProgress
        tags={["Highlight", "Feeds"]}
        title="Dashboard"
        subtitle="Business management service"
        progress={80}
      />
    </div>
  );
};

export default CardItem;
