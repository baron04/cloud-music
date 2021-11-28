import * as actionTypes from "./constants";
import { fromJS } from "immutable";
import { playMode } from "./../../../api/config";

const defaultState = fromJS({
  fullScreen: false, // 播放器是否为全屏模式
  playing: false, // 当前歌曲是否播放
  sequencePlayList: [], // 顺序列表 (因为之后会有随机模式，列表会乱序，因从拿这个保存顺序列表)
  playList: [{
    "name": "不要躲避我的眼睛",
    "id": 300932,
    "pst": 0,
    "t": 0,
    "ar": [
    {
    "id": 9633,
    "name": "王馨平",
    "tns": [],
    "alias": []
    }
    ],
    "alia": [
    "电影《中南海保镖》主题曲"
    ],
    "pop": 100,
    "st": 0,
    "rt": "",
    "fee": 8,
    "v": 19,
    "crbt": null,
    "cf": "",
    "al": {
    "id": 29817,
    "name": "飞",
    "picUrl": "http://p4.music.126.net/LsEkgh-t7ysvboq-CSlV3Q==/109951165630448828.jpg",
    "tns": [],
    "pic_str": "109951165630448828",
    "pic": 109951165630448830
    },
    "dt": 226360,
    "h": {
    "br": 320000,
    "fid": 0,
    "size": 9057219,
    "vd": 30378
    },
    "m": {
    "br": 192000,
    "fid": 0,
    "size": 5434349,
    "vd": 32977
    },
    "l": {
    "br": 128000,
    "fid": 0,
    "size": 3622914,
    "vd": 34651
    },
    "a": null,
    "cd": "1",
    "no": 9,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 1,
    "s_id": 0,
    "mark": 8192,
    "originCoverType": 1,
    "originSongSimpleData": null,
    "single": 0,
    "noCopyrightRcmd": null,
    "mst": 9,
    "cp": 7003,
    "mv": 0,
    "rtype": 0,
    "rurl": null,
    "publishTime": 765129600000
    },],
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前歌曲在播放列表的索引位置
  showPlayList: false, // 是否展示播放列表
  currentSong: {}
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_SONG:
      return state.set("currentSong", action.data);
    case actionTypes.SET_FULL_SCREEN:
      return state.set("fullScreen", action.data);
    case actionTypes.SET_PLAYING_STATE:
      return state.set("playing", action.data);
    case actionTypes.SET_SEQUENCE_PLAYLIST:
      return state.set("sequencePlayList", action.data);
    case actionTypes.SET_PLAYLIST:
      return state.set("playList", action.data);
    case actionTypes.SET_PLAY_MODE:
      return state.set("mode", action.data);
    case actionTypes.SET_CURRENT_INDEX:
      return state.set("currentIndex", action.data);
    case actionTypes.SET_SHOW_PLAYLIST:
      return state.set("showPlayList", action.data);
    default:
      return state;
  }
};

export default reducer;
