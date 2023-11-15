import React, {ReactNode} from 'react'
import s from './WithPopUp.module.scss';

interface WithPopUpProps {
    close: () => void
    children: ReactNode
}

export const WithPopUp: React.FC<WithPopUpProps> = ({children, close}) => {
    return (
        <div className={s.disabledField} onClick={close}>
            <div className={s.popUp} onClick={e => e.stopPropagation()}>
                {children}
                <button className={s.closeButton} onClick={close}/>
            </div>
        </div>
    )
}
