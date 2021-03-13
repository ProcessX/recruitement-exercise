import React from "react";

// eslint-disable-next-line react/prop-types
const CampaignInfoSection = ({ children, classname, title }) => {
  return (
    <section
      className={`campaign__info__section campaign__info__section${classname}`}
    >
      <h2 className={"title title--infoSection"}>{title}</h2>
      <div className={"campaign__info"}>{children}</div>
    </section>
  );
};

export default CampaignInfoSection;
