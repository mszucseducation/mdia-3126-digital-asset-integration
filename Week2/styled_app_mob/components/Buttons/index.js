import React from "react";
import { Text } from "react-native";

function ButtonHeader({
    name="default"
}) {
    return <Text>This is {name}'s Area</Text>
}

export default ButtonHeader