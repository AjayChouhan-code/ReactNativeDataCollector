import {makeNetworkCall} from '..';
import {CaptureData} from '../../screens';
import {dataUploadUrl} from '../../utils/constants';

const postCaptureData = async (dataObj: CaptureData) => {
  const apiRes = await makeNetworkCall(dataUploadUrl, 'POST', dataObj);
  return apiRes?.hasOwnProperty('event_id') ? apiRes : false;
};

export {postCaptureData};
