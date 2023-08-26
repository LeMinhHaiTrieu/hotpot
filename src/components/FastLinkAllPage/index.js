import { Link } from 'react-router-dom'
import IconOrderOnlineGray from '../../asset/svg/icon_order_online_gray.svg'
import IconWaitList from '../../asset/svg/icon_wait_list.svg'
import IconOrderOnlineGrayWhite from '../../asset/svg/icon_order_online_white.svg'
import IconWaitListWhite from '../../asset/svg/icon_wait_list_white.svg'
import IconOrderOnlineRed from '../../asset/svg/icon_order_online.svg'
import {
    WrapFastLink,
    WrapFastItem,
    LabelFastLink,
    IconFastLink
} from './styled'

const dataFastLink = [
    {
        label: "Wait List",
        isTargetBlank: true,
        icon: IconWaitList,
        iconHover: IconWaitListWhite,
        link: "https://www.google.com/"
    },
    {
        label: "Make Reservation",
        isTargetBlank: false,
        icon: IconOrderOnlineGray,
        iconHover: IconOrderOnlineGrayWhite,
        link: '/reservation',
        isReservation: true,
    },
]
const ContentLink = ({label, icon, iconHover, isReservation }) => {
    return (
        <>
            <LabelFastLink className="label">
                <span>{label}</span>
                <img src={iconHover} alt="" />
            </LabelFastLink>
            <IconFastLink className={`${isReservation && "ring"} icon`}>
                {!isReservation && <img src={icon} />}
                {isReservation && <img src={IconOrderOnlineRed} />}
            </IconFastLink>
        </>
    )
}
  
export default function FastLinkAllPage() {
    return (
        <WrapFastLink>
            {dataFastLink.map(item =>
            <WrapFastItem key={item.label}>
                {item.isTargetBlank &&
                <a className='d-flex' target="_blank" href={item.link}>
                    <ContentLink {...item} />
                </a>
                }
                {!item.isTargetBlank &&
                <Link to={item.link} className='d-flex'>
                    <ContentLink {...item} />
                </Link>
                }
            </WrapFastItem>
            )}
        </WrapFastLink>
    )
}