type Society = {
  id: number;
  name: string;
  state: string;
  address: string;
  district: string;
  dateOfRegistration: string;
  areaOfOperation: string;
  sectorType: string;
}

type SocietyDataOverYears = {
  year: string;
  count: number;
}

type SectorsData = {
  sector: string;
  percentage: number;
}

type StateData = {
  state: string;
  count: number;
}