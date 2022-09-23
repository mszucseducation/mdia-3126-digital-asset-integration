import { Layout, Text, Calendar } from '@ui-kitten/components';
import React from 'react';
import { ScrollView } from "react-native";


export default function Main() {
    const [date, setDate] = React.useState(new Date());

    return (
        <ScrollView>
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h1'>HOME</Text>
                <Calendar
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                />
                <Calendar
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                />
                <Calendar
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                />
            </Layout>
        </ScrollView>  
    )
}