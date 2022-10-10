import { Button } from "semantic-ui-react";
import { FlexBox } from "../../styles/globals";
import AppText from "../AppText";
import PopupPageIndicator from "../PopupPageIndicator";
import { popup_data } from "./data";

export default function Popup({
    stepnum = 1,
    onNext=()=>{},
    onPrev=()=>{},
    onClose=()=>{}
}) {
    return (
        <FlexBox dir="column">
            <AppText text={popup_data[stepnum].head || 'head'}/>
            <AppText text={popup_data[stepnum].sub || 'head'}/>
            <FlexBox>
                {stepnum > 1 && <Button onClick={onPrev}>Prev</Button>}
                <PopupPageIndicator num={stepnum}/>
                <Button onClick={onNext}>Next</Button>
            </FlexBox>
        </FlexBox>
    )
}