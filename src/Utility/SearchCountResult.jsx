import UnopDropdown from "unop-react-dropdown";
import { HiSortDescending } from "react-icons/hi";

export const SearchCountResult = ({ title }) => {
    const handler = () => { }
    return (
        <div className='d-flex justify-content-between pt-3 px-2   '>
            <UnopDropdown
                onAppear={handler}
                onDisappearStart={handler}
                trigger={<p className='mx-1'>
                    ترتيب حسب
                    <HiSortDescending />
                </p>}
                delay={0}
                align="CENTER"
                hover
            >
                <div className='dropelement navbar-toggler shadowCard p-3'>
                    <div className='bottomBorder '>الاكثر مبيعا</div>
                    <div className='bottomBorder'>الاعلى تقييما</div>
                    <div className='bottomBorder'>السعر من الاقل للاعلى</div>
                    <div className='bottomBorder'>السعر من الاعلى للاقل</div>
                </div>
            </UnopDropdown>
            <div>{title}</div>

        </div>
    )
}
