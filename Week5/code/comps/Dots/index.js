import { FlexBox } from "../../styles/globals";
import { Icon } from "semantic-ui-react";

export default function Dots({ stepnum = 1 }) {
  return (
    <FlexBox>
      {stepnum >= 1 ? (
        <Icon name="arrow alternate circle right" />
      ) : (
        <Icon name="arrow alternate circle right outline" />
      )}

      {stepnum >= 2 ? (
        <Icon name="arrow alternate circle right" />
      ) : (
        <Icon name="arrow alternate circle right outline" />
      )}

      {stepnum >= 3 ? (
        <Icon name="arrow alternate circle right" />
      ) : (
        <Icon name="arrow alternate circle right outline" />
      )}

      {stepnum >= 4 ? (
        <Icon name="arrow alternate circle right" />
      ) : (
        <Icon name="arrow alternate circle right outline" />
      )}
    </FlexBox>
  );
}
