import { ReactNode, useEffect, useState } from "react"
import Header, { HEADER_TYPE } from "../../global/components/Header";
import TabBar, { TAB_LIST } from "../../global/components/TabBar";

interface IProps {
    children: ReactNode;
    headerType: HEADER_TYPE;
    headerHref?: string;
    headerTitle?: string;
    headerLabel?: string;
}

function CommunityLayout({ children, headerType, headerHref, headerTitle, headerLabel }: IProps) {
    const [tabActive, setTabActive] = useState<TAB_LIST>("home");
    const getActiveTab = () => {
        if (!window.location.href.split("/")[4]) {
            setTabActive("home");
        } else if (window.location.href.split("/")[4] === "history") {
            setTabActive("history");
        } else if (window.location.href.split("/")[4] === "news") {
            setTabActive("news");
        } else if (window.location.href.split("/")[4] === "profile") {
            setTabActive("profile");
        }
    }

    useEffect(() => {
        getActiveTab();
    }, []);

    return (
        <>
            <Header type={headerType} href={headerHref} title={headerTitle} label={headerLabel} />
            {children}
            <TabBar tabActive={tabActive} setTabActive={setTabActive} type="merchant" />
        </>
    )
}

export default CommunityLayout;