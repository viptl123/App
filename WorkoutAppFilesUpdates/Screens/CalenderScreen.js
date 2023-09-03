import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const year = new Date().getFullYear();

function getNumberOfDays(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

const CalendarScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {months.map((month, index) => {
                const monthDays = getNumberOfDays(year, index);
                const monthHeader = <Text style={styles.header}>{month} {year}</Text>;
                const weekDays = [];

                for (let day = 1; day <= monthDays; day++) {
                    weekDays.push(
                        <Text style={styles.days} key={day}>{day}</Text>
                    );

                    if (day % 7 === 0 || day === monthDays) {
                        weekDays.push(<Text key={-1}>&nbsp;</Text>);
                    }
                }

                return (
                    <View key={index}>
                        {monthHeader}
                        <View style={styles.weekContainer}>{weekDays}</View>
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        padding: 10,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'white',
    },
    days: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        width: '14.28%',
        height: 75,
        lineHeight: 50,
        backgroundColor: 'lightblue',
    },
    weekContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default CalendarScreen;