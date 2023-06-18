
enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  ROOT_ADMIN = 'ROOT_ADMIN',
}
type UserStore = {
  role: Role,
  setRole: (role: Role | null) => void,
  email: string,
  setEmail: (email: string) => void,
  id: number | null,
  setId: (id: string) => void,
  name: string,
  setName: (name: string) => void,
  token: string | null,
  setToken: (token: string) => void,
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