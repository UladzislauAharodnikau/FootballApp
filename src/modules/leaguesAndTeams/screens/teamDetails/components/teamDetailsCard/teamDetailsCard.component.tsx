import React, {memo, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TeamItem} from 'shared/types/teamItem.types';
import {Theme} from '@constants/theme';
import {TextRow} from 'modules/leaguesAndTeams/screens/teamDetails/components/textRow/textRow.component';

interface TeamDetailsCardProps {
  teamInfo: TeamItem | null;
}

export const TeamDetailsCard: React.FC<TeamDetailsCardProps> = memo(
  ({teamInfo}) => {
    const [containerWidth, setContainerWidth] = useState<number | undefined>();

    const conditionWidth = containerWidth ? containerWidth - 120 : 100;

    return (
      <View
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: {width},
          },
        }) => {
          setContainerWidth(width);
        }}>
        <View style={styles.teamSection}>
          <Text style={styles.sectionTitle}>Team info:</Text>
          <View style={styles.teamInfoContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.image}
                source={{uri: teamInfo?.team.logo}}
                resizeMode="contain"
              />
            </View>
            <View>
              <TextRow boldText="Name:" content={teamInfo?.team.name} />
              <TextRow boldText="Country:" content={teamInfo?.team.country} />
              <TextRow boldText="Country code:" content={teamInfo?.team.code} />
              <TextRow
                boldText="Founded in:"
                content={teamInfo?.team?.founded?.toString()}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Venue info:</Text>
          <View style={styles.venueInfo}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.venueImage}
                source={{uri: teamInfo?.venue.image}}
                resizeMode="contain"
              />
            </View>
            <View>
              <View style={{width: conditionWidth}}>
                <TextRow
                  boldText="Venue name:"
                  content={teamInfo?.venue.name}
                />
              </View>
              <View style={{width: conditionWidth}}>
                <Text style={styles.bold}>Venue address:</Text>
                <Text>{teamInfo?.venue.address}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: Theme.lightGray,
    borderRadius: 15,
  },
  teamSection: {
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 40,
  },
  sectionTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  teamInfoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  logoContainer: {
    marginRight: 20,
    justifyContent: 'flex-start',
  },
  venueInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  venueImage: {
    width: 100,
    height: 70,
  },
  bold: {
    fontWeight: 'bold',
  },
});
