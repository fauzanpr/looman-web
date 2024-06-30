import { ReactNode, useEffect, useState } from "react"
import Header, { HEADER_TYPE } from "../../global/components/Header";
import TabBar, { TAB_LIST } from "../../global/components/TabBar";
import { useNavigate } from "react-router-dom";

interface IProps {
    children: ReactNode;
    headerType: HEADER_TYPE;
    headerHref?: string;
    headerTitle?: string;
    headerLabel?: string;
}

function CommunityLayout({ children, headerType, headerHref, headerTitle, headerLabel }: IProps) {
    const navigate = useNavigate();
    const [tabActive, setTabActive] = useState<TAB_LIST>("home");
    const getActiveTab = () => {
        if (!window.location.href.split("/")[4]) {
            setTabActive("home");
        } else if (window.location.href.split("/")[4] === "history") {
            setTabActive("history");
        } else if (window.location.href.split("/")[4] === "receiver") {
            setTabActive("receiver");
        } else if (window.location.href.split("/")[4] === "profile") {
            setTabActive("profile");
        }
    }

    useEffect(() => {
        getActiveTab();
    }, []);

    useEffect(() => {
        if (localStorage.getItem("role") !== "community") {
            navigate("/");
        }
    }, [navigate]);

    return (
        <>
            <Header type={headerType} href={headerHref} title={headerTitle} label={headerLabel} />
            {children}
            <TabBar tabActive={tabActive} setTabActive={setTabActive} type="community" />
        </>
    )
}

export default CommunityLayout;