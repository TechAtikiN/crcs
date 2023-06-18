
enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  ROOT_ADMIN = 'ROOT_ADMIN',
}
type User = {
  role: Role,
  email: string,
  name: string,
  id: number,
  token: string,
}

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

type Application = {
  id: number;
  societyName: string;
  state: string;
  address: string;
  district: string;
  userName: string;
  contact: string;
  pan: string;
  tan: string;
  serviceTaxNo: string;
  email: string;
  designation: string;
  date: string;
  typeOfSociety: string;
  status: string;
}