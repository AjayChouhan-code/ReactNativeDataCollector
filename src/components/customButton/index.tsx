import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {moderateScale} from '../../utils/helper';
import {Colors} from '../../utils/colors';

type Props = {
  text: string;
  customStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export const CustomButton = ({
  text,
  customStyle,
  onPress,
  disabled,
  loading,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        customStyle,
        disabled || loading ? styles.disabledButton : {},
      ]}
      onPress={onPress}
      disabled={disabled || loading}>
      <Text style={[styles.buttonText, loading ? styles.loadingStyle : {}]}>
        {text}
      </Text>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.white} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(15),
    backgroundColor: Colors.primary,
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.black,
    fontSize: moderateScale(20),
  },
  loadingStyle: {
    marginRight: moderateScale(10),
  },
  disabledButton: {
    backgroundColor: Colors.grey,
  },
});
