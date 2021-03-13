import React, { useEffect, useState } from "react";
import MainPageLayout from "../mainPageLayout/MainPageLayout";
import BtnRectangle from "../../btn/BtnRectangle";
import Searchbar from "./Searchbar";
import SortingParamSelector from "./SortingParamSelector";
import PageNav from "./PageNav";
import CampaignList from "../../campaignList/CampaignList";

const CampaignListing = () => {
  const [pageIndex, setIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(new Array(0));

  const APIURL =
    "https://proxistore-campaign-qof7m4cq5q-ew.a.run.app/campaigns?page=";

  const fetchPage = () => {
    fetch(`${APIURL}${pageIndex}`)
      .then((r) => r.json())
      .then((result) => {
        setCurrentPage(result.result);
      });
  };

  useEffect(() => {
    fetchPage();
  }, [pageIndex]);

  return (
    <MainPageLayout>
      <div className={"campaignListing"}>
        <div className={"campaignListing__head"}>
          <h1 className={"title title--page"}>Campaign Listing</h1>
          <BtnRectangle text={"Add campaign"} />
          <div className={"campaignListing__tools"}>
            <Searchbar />
            <SortingParamSelector />
            <PageNav />
          </div>
        </div>
        <CampaignList list={currentPage} />
      </div>
    </MainPageLayout>
  );
};

export default CampaignListing;
