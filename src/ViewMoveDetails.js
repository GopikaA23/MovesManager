import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import HouseDetails from "./HouseDetails";
import InventoryDetails from "./InventoryDetails";

const ViewMoveDetails = ({ detail }) => {
  return (
    <div style={{ margin: '20px 0' }}> 
      <AdditionalInfo />     {/* Additional information page */}

      <div style={{ margin: '20px 0' }}> 
        <HouseDetails detail={detail} />   {/* HouseDetails  page */}
      </div>

      <div style={{ margin: '20px 0' }}> 
        <InventoryDetails detail={detail} />  {/* Inventory details page */}
      </div>

    </div>
  );
}

export default ViewMoveDetails;
