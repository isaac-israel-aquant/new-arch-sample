import chalk from "chalk";

const color = new chalk.Instance({ level: 3 });

export default class LoggerManager {
  private static format(args: any): any {
    return args.map((arg: any) => JSON.stringify(arg, null, 2));
  }

  static debug(...args: any): void {
    console.debug(color.underline(...LoggerManager.format(args)));
  }

  static info(...args: any): void {
    console.info(color.bgCyanBright.black(...LoggerManager.format(args)));
  }

  static error(...args: any): void {
    const message = LoggerManager.format(args);

    console.error(color.bgRed.black(...message));
  }

  static warn(...args: any): void {
    console.warn(color.bgYellow.black(...LoggerManager.format(args)));
  }

  static success(...args: any): void {
    console.log(color.bgGreenBright.black(...LoggerManager.format(args)));
  }
}
