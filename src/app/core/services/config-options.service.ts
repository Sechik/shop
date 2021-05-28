import { ConfigModel } from './../models/configModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  config: ConfigModel;

  constructor() {
    this.config = new ConfigModel('1', 'admin', 'admin');
  }

  getConfig(): ConfigModel {
    return this.config;
  }

  setConfig(config: Partial<ConfigModel>): void {
    this.config = {...this.config, ...config};
    // if (config.id) {
    //   this.config.id = config.id;
    // }
    // if (config.email) {
    //   this.config.email = config.email;
    // }
    // if (config.login) {
    //   this.config.login = config.login;
    // }
  }
}
