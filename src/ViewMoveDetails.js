import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import HouseDetails from "./HouseDetails";
import InventoryDetails from "./InventoryDetails";

const ViewMoveDetails = ({ detail }) => {
  return (
    <div style={{ margin: '20px 0' }}> {/* Adding margin for spacing */}
      <AdditionalInfo />
      <div style={{ margin: '20px 0' }}> {/* Adding margin for spacing */}
        <HouseDetails detail={detail} />
      </div>
      <div style={{ margin: '20px 0' }}> {/* Adding margin for spacing */}
        <InventoryDetails detail={detail} />
      </div>
    </div>
  );
}

export default ViewMoveDetails;
