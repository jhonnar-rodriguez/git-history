import { Logger } from '@nestjs/common';

export class RequestError extends Error {
  private status: number;

  constructor(
    status: number,
    message: string,
    loggerContext = RequestError.name,
  ) {
    super(message);

    this.status = status ?? 500;

    new Logger(loggerContext).error(`Message: ${message} - Status: ${status}`);
  }
}
