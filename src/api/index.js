import base from './base';
import { httpGet, httpPost } from '../utils/http';

/**
 * 有几个网络请求，可一次性看到，集中管理
 */

const api = {
  getGithubRepo() {
    return httpGet(base.myGithubRepo);
  },
  getMusicRank(params) {
    return httpPost(base.musicRank, params)
  }
}

export default api