import PcMobileRow from "./PcMobileRow.jsx";
import ExtraBrowserRow from "./ExtraBrowserRow.jsx";
import SkyPickPhoneGrid from "./SkyPickPhoneGrid.jsx";

export default function ScreenshotSection({ work }) {
  if (work.slug === "skypick") {
    return <SkyPickPhoneGrid phones={work.screenshots.phones} />;
  }
  return (
    <>
      <PcMobileRow screenshots={work.screenshots} />
      {work.screenshots.extra?.length > 0 && <ExtraBrowserRow extra={work.screenshots.extra} />}
    </>
  );
}
