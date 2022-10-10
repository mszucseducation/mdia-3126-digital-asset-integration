import { Button, Icon } from "semantic-ui-react";
import { FlexBox } from "../../styles/globals";
import AppText from "../AppText";
import PageNum from "../PageNum";

import { bubble_txts } from "./data";

export default function Bubble({
  stepnum=1,
  onNext=()=>{},
  onPrev=()=>{},
  onClose=()=>{}
}){

  //flex direction column
  return <FlexBox dir="column">
    <Icon name="close" onClick={onClose} />
    {stepnum === 1 && <Icon name="hand paper outline" size="huge" />}

    <AppText txt={bubble_txts[stepnum].head || 'head'} />
    <AppText txt={bubble_txts[stepnum].sub || 'sub'} size="14px" />

    <FlexBox>
      {stepnum > 1 && <Button onClick={onPrev}>Prev</Button>}
      <PageNum num={stepnum} total={4} />
      <Button onClick={onNext}>Next</Button>
    </FlexBox>
  </FlexBox>
}