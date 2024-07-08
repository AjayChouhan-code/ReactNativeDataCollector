import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CustomButton} from '../../components';
import {moderateScale, screenSizeInInches} from '../../utils/helper';
import {Colors} from '../../utils/colors';
import {
  getIpAddress,
  getAndroidId,
  getBrand,
  getModel,
  getHardware,
  getSystemVersion,
} from 'react-native-device-info';
import {postCaptureData} from '../../network/captureData';

export type CaptureData = {
  ipAddress: string;
  androidId: string;
  brand: string;
  model: string;
  hardware: string;
  screenSize: number;
  osVersion: string;
};

export const Home = () => {
  const [captureData, setCaptureData] = useState<CaptureData>();
  const [isLoading, setIsLoading] = useState(false);

  const captureDataFn = async () => {
    const ipAddress = await getIpAddress();
    const androidId = await getAndroidId();
    const brand = await getBrand();
    const model = await getModel();
    const hardware = await getHardware();
    const screenSize = screenSizeInInches;
    const osVersion = getSystemVersion();

    const dataObj: CaptureData = {
      ipAddress,
      androidId,
      brand,
      model,
      hardware,
      screenSize,
      osVersion,
    };
    setIsLoading(true);
    const apiRes = await postCaptureData(dataObj);
    setIsLoading(false);
    if (!apiRes) {
      Alert.alert(
        'Error',
        'Capture failed due to some error! Please try again in few minutes!',
      );
      return;
    }
    Alert.alert('Success', 'Capture success!');
    setCaptureData(dataObj);
  };

  return (
    <View>
      <Text style={styles.captureDataText}>
        Capture Data Status :
        {captureData ? ' Data Captured!' : ' Data Not Captured!'}
      </Text>
      <CustomButton
        text={isLoading ? 'Capturing Data' : 'Capture Data'}
        onPress={captureDataFn}
        disabled={captureData ? true : false}
        loading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  captureDataText: {
    fontSize: moderateScale(15),
    marginBottom: moderateScale(10),
    color: Colors.black,
  },
});
