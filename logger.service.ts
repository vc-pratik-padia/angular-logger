import {environment} from 'environment_path';

/**
 * @class LoggerService
 * @description Help to do better logging regardless of environment.
 * @author Pratik Padia
 */
export class LoggerService {

  constructor() {
  }

  /**
   * Alternative of console.log. Helps you to log in console on
   * development build. Logs will be ommited on production build.
   *
   * @param {any} value thing wants to log.
   * @param {any[]} [rest] Additional things wants to logs along.
   * @returns {void} This will log into console it won't return anything.

   * @example
   * LoggerService.log('Test')
   * LoggerService.log(['Test'], 'whatever')
   * LoggerService.log('Test', ['whatever'])
   */
  static log(value: any, ...rest: any[]): void {
    if (!environment.production) {
      console.log(value, ...rest);
    }
  }

  /**
   * Alternative of console.error. Help you to log error in console along with
   * proper error stack.
   * NOTE: Here regardless of environment erro log will be printed with error stack.
   *
   * @param {any} error error want to log
   * @returns {void} This will log error into console it won't return anything.

   * @example
   * service.subscribe({
   *  error: (error: HttpErrorResponse | Error) => {
   *     LoggerService.error(error);
   *   }
   * });
   */
  static error(error: any): void {
    console.error(error);
  }

  /**
   * Alternative of console.log. Helps you to log warning in console on
   * development build. Warning will be ommited on production build.
   *
   * @param {any} value thing wants to log.
   * @param {any[]} [rest] Additional things wants to logs along.
   * @returns {void} This will log warning into console it won't return anything.

   * @example
   * LoggerService.warn('Test')
   * LoggerService.warn(['Test'], 'whatever')
   * LoggerService.warn('Test', ['whatever'])
   */
  static warn(value: any, ...rest: any[]): void {
    if (!environment.production) {
      console.warn(value, ...rest);
    }
  }
}
