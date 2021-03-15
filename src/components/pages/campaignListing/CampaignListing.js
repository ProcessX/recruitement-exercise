import React, { useEffect, useState } from "react";
import MainPageLayout from "../mainPageLayout/MainPageLayout";
import BtnRectangle from "../../btn/BtnRectangle";
import Searchbar from "./Searchbar";
import SortingParamSelector from "./SortingParamSelector";
import PageNav from "./PageNav";
import CampaignList from "../../campaignList/CampaignList";

const CampaignListing = () => {
  const [pageIndex, setIndex] = useState(1);
  const [pageMaxNbr, setPageMaxNbr] = useState(1);
  const [currentPage, setCurrentPage] = useState(new Array(0));
  const [searchParams, setSearchParams] = useState({});

  const pageSize = 10;

  let initSearchParams = () => {
    let urlParams = [...new URLSearchParams(window.location.search)];
    let params = {
      size: pageSize,
    };
    urlParams.forEach((param) => {
      params[param[0]] = param[1];
    });

    if (!params.hasOwnProperty("page")) params["page"] = 1;

    setSearchParams({ ...params });
  };

  useEffect(() => {
    if (
      Object.keys(searchParams).length === 0 &&
      searchParams.constructor === Object
    ) {
      initSearchParams();
    } else {
      fetchPage();
    }
  }, [searchParams]);

  const APIURL =
    "https://proxistore-campaign-qof7m4cq5q-ew.a.run.app/campaigns";

  const getSearchURL = () => {
    let searchURL = APIURL + "?";
    Object.entries(searchParams).forEach((param, index) => {
      if (index > 0) {
        searchURL += "&";
      }
      searchURL += `${param[0]}=${param[1]}`;
    });
    return searchURL;
  };

  const fetchPage = () => {
    fetch(getSearchURL())
      .then((r) => r.json())
      .then((result) => {
        if (result.total !== pageMaxNbr) setPageMaxNbr(result.total);
        setCurrentPage(result.result);
      });
  };

  const changeSearchParams = (newParams) => {
    console.log(newParams);
    let updatedParams = { ...searchParams };
    Object.entries(newParams).forEach((param) => {
      updatedParams[param[0]] = param[1];
    });
    setSearchParams({ ...updatedParams });
    console.log("Change params");
    console.log(updatedParams);
  };

  return (
    <MainPageLayout>
      <div className={"campaignListing"}>
        <div className={"campaignListing__head"}>
          <h1 className={"title title--page"}>Campaign Listing</h1>
          <BtnRectangle text={"Add campaign"} />
          <div className={"campaignListing__tools"}>
            <Searchbar
              searchName={(name) => changeSearchParams({ search: name })}
            />
            <SortingParamSelector />
            <PageNav
              pageIndex={searchParams.page}
              changePage={(pageIndex) =>
                changeSearchParams({ page: pageIndex })
              }
            />
          </div>
        </div>
        <CampaignList list={currentPage} />
      </div>
    </MainPageLayout>
  );
};

export default CampaignListing;
