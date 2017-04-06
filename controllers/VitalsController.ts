import {def} from './VitalsController.api';
import {api, inject} from 'loopback-next/packages/loopback';

@api(def)
export class VitalsController {
  constructor(@inject('app.info') private _info: VitalsResponse) {
    this._info = {uptime: 1000};
  }

  async getUptime() : Promise<string> {
    return Promise.resolve(JSON.stringify(this._info));
  }
}

interface VitalsResponse {
  uptime: number
}