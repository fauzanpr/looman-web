import { ReactNode } from "react"
import Header, { HEADER_TYPE } from "../../global/components/Header";
import TabBar from "../../global/components/TabBar";

interface IProps {
    children: ReactNode;
    headerType: HEADER_TYPE;
}

function FilantrophyLayout({ children, headerType }: IProps) {
    return (
        <>
            <Header type={headerType} />
            {children}
            <TabBar />
        </>
    )
}

export default FilantrophyLayout;