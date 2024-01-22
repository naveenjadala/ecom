import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {profileEventsStyles} from './styles';
import RightIcon from '../../../../assets/images/rightIcon.svg';

type profileEventsProps = {
  title: string;
  onClick: () => void;
  subTitle?: string;
};

const ProfileEvents: FC<profileEventsProps> = ({title, onClick, subTitle}) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={() => console.log('click')}
      style={profileEventsStyles.container}>
      <View>
        <Text style={profileEventsStyles.text}>{title}</Text>
        <Text style={profileEventsStyles.subText}>{subTitle}</Text>
      </View>
      <RightIcon width={20} height={20} style={profileEventsStyles.icon} />
    </TouchableOpacity>
  );
};

export default ProfileEvents;
