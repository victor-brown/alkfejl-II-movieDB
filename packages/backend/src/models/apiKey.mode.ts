import { v4 as uuidv4 } from "uuid";
import { getNextMonthDate } from "../utils/dateHelper";

interface IApiKey {
  id: string;
  api_key: string;
  valid_until: Date;
}

export class ApiKey implements IApiKey {
  id: string;
  api_key: string;
  valid_until: Date;

  constructor(api_key: string) {
    this.id = uuidv4();
    this.api_key = api_key;

    const currentDate = new Date();
    const nextMonthDate: Date = getNextMonthDate(currentDate);

    this.valid_until = nextMonthDate;
  }
}
