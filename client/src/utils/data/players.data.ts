export type Player = {
  playerID: number;
  teamCode: string;
  name: string;
  fname: string;
  nickname?: string;
  position: string;
  goals: number;
  assists: number;
  isCaptain?: boolean;
};

export const players: Player[] = [
  /**
   * Biomed
   */
  {
    playerID: 2011,
    teamCode: "BIO",
    name: "Alex",
    fname: "",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2012,
    teamCode: "BIO",
    name: "Nebil",
    fname: "",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2013,
    teamCode: "BIO",
    name: "Abe",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2014,
    teamCode: "BIO",
    name: "Abiy",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2015,
    teamCode: "BIO",
    name: "Adisu",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2016,
    teamCode: "BIO",
    name: "Debela",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2017,
    teamCode: "BIO",
    name: "Eyob",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2018,
    teamCode: "BIO",
    name: "Gemta",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2019,
    teamCode: "BIO",
    name: "Sisay",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20110,
    teamCode: "BIO",
    name: "Yirga",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 20111,
    teamCode: "BIO",
    name: "Abel",
    fname: "",
    position: "MD",
    goals: 1,
    assists: 2,
  },
  {
    playerID: 20112,
    teamCode: "BIO",
    name: "Kena",
    fname: "",
    position: "MD",
    goals: 1,
    assists: 4,
  },
  {
    playerID: 20113,
    teamCode: "BIO",
    name: "Yabsira",
    fname: "",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20114,
    teamCode: "BIO",
    name: "Ermisha",
    fname: "",
    position: "ST",
    goals: 13,
    assists: 2,
  },
  {
    playerID: 20115,
    teamCode: "BIO",
    name: "Mihretu",
    fname: "",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20116,
    teamCode: "BIO",
    name: "Nati",
    fname: "",
    position: "ST",
    goals: 1,
    assists: 3,
  },
  {
    playerID: 20117,
    teamCode: "BIO",
    name: "Robel",
    fname: "",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20118,
    teamCode: "BIO",
    name: "Seyfe",
    fname: "",
    position: "ST",
    goals: 0,
    assists: 1,
  },

  /**
   * Chemical
   */
  {
    playerID: 1011,
    teamCode: "CHE",
    name: "Fasil",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1012,
    teamCode: "CHE",
    name: "Haile",
    fname: "",
    position: "DF",
    goals: 1,
    assists: 0,
  },
  {
    playerID: 1013,
    teamCode: "CHE",
    name: "Sibhat",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1014,
    teamCode: "CHE",
    name: "Temesgen",
    fname: "Abay",
    position: "DF",
    goals: 1,
    assists: 2,
  },
  {
    playerID: 1015,
    teamCode: "CHE",
    name: "Abdusemed",
    fname: "Seid",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1016,
    teamCode: "CHE",
    name: "Yemesgen",
    fname: "Fantahun",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1017,
    teamCode: "CHE",
    name: "Yonatan",
    fname: "Gashaw",
    position: "MD",
    goals: 1,
    assists: 0,
  },
  {
    playerID: 1018,
    teamCode: "CHE",
    name: "Abel",
    fname: "",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1019,
    teamCode: "CHE",
    name: "Amanuel",
    fname: "",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 10110,
    teamCode: "CHE",
    name: "Ewnetu",
    fname: "",
    position: "ST",
    goals: 1,
    assists: 1,
  },
  {
    playerID: 10111,
    teamCode: "CHE",
    name: "Haftamu",
    fname: "",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 10112,
    teamCode: "CHE",
    name: "Olana",
    fname: "",
    position: "ST",
    goals: 4,
    assists: 3,
  },

  /**
   * Civil 1
   */
  {
    playerID: 1021,
    teamCode: "CV1",
    name: "Henock",
    fname: "Meseret",
    position: "GK",
    goals: 3,
    assists: 1,
  },
  {
    playerID: 1022,
    teamCode: "CV1",
    name: "Abdulaziz",
    fname: "Ali",
    position: "GK",
    goals: 1,
    assists: 0,
  },
  {
    playerID: 1023,
    teamCode: "CV1",
    name: "Biruk",
    fname: "Ayele",
    position: "DF",
    goals: 6,
    assists: 8,
  },
  {
    playerID: 1024,
    teamCode: "CV1",
    name: "Sewnet",
    fname: "Ayele",
    position: "DF",
    goals: 3,
    assists: 0,
  },
  {
    playerID: 1025,
    teamCode: "CV1",
    name: "Yonas",
    nickname: "Yoni E.",
    fname: "Esubalew",
    position: "DF",
    goals: 2,
    assists: 6,
  },
  {
    playerID: 1026,
    teamCode: "CV1",
    name: "Yonas",
    nickname: "Yoni M.",
    fname: "Mekdes",
    position: "DF",
    goals: 2,
    assists: 2,
    isCaptain: true,
  },
  {
    playerID: 1027,
    teamCode: "CV1",
    name: "Kibrom",
    fname: "Atnafu",
    position: "MD",
    goals: 1,
    assists: 0,
  },
  {
    playerID: 1028,
    teamCode: "CV1",
    name: "Natnael",
    nickname: "Nati G.",
    fname: "G/mariam",
    position: "MD",
    goals: 21,
    assists: 16,
  },
  {
    playerID: 1029,
    teamCode: "CV1",
    name: "Natnael",
    nickname: "Nati M.",
    fname: "Molla",
    position: "MD",
    goals: 5,
    assists: 6,
  },
  {
    playerID: 10210,
    teamCode: "CV1",
    name: "Elias",
    fname: "Yemane",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 10211,
    teamCode: "CV1",
    name: "Kaleab",
    fname: "Mulat",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 10212,
    teamCode: "CV1",
    name: "Kaleab",
    fname: "Wendwesen",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 10213,
    teamCode: "CV1",
    name: "Robel",
    fname: "Yohannes",
    position: "ST",
    goals: 11,
    assists: 18,
  },

  /**
   * Civil 2
   */
  {
    playerID: 2021,
    teamCode: "CV2",
    name: "Abenezer",
    fname: "Muluneh",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2022,
    teamCode: "CV2",
    name: "Amir",
    fname: "Kedir",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2023,
    teamCode: "CV2",
    name: "Nebiyu",
    fname: "Samuel",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2024,
    teamCode: "CV2",
    name: "Tewodros",
    fname: "Abebe",
    position: "DF",
    goals: 1,
    assists: 0,
  },
  {
    playerID: 2025,
    teamCode: "CV2",
    name: "Tsigab",
    fname: "Kube",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2026,
    teamCode: "CV2",
    name: "Dagimawi",
    fname: "Mekonen",
    position: "MD",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 2027,
    teamCode: "CV2",
    name: "Samuel",
    fname: "Bizuneh",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2028,
    teamCode: "CV2",
    name: "Yeabsira",
    fname: "Tibebu",
    position: "MD",
    goals: 1,
    assists: 1,
  },
  {
    playerID: 2029,
    teamCode: "CV2",
    name: "Yohannes",
    fname: "Debebe",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20210,
    teamCode: "CV2",
    name: "Fkire",
    fname: "Abadi",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20211,
    teamCode: "CV2",
    name: "Hachalu",
    fname: "Hailu",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20212,
    teamCode: "CV2",
    name: "Robel",
    fname: "Argaw",
    position: "ST",
    goals: 6,
    assists: 0,
  },
  {
    playerID: 20213,
    teamCode: "CV2",
    name: "Yeshitla",
    fname: "G/michael",
    position: "ST",
    goals: 0,
    assists: 0,
  },

  /**
   * Electrical A
   */
  {
    playerID: 2031,
    teamCode: "ELA",
    name: "Alemu",
    fname: "Molla",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2032,
    teamCode: "ELA",
    name: "Dagmawi",
    fname: "G/weld",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2033,
    teamCode: "ELA",
    name: "Beka",
    fname: "Biru",
    position: "DF",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 2034,
    teamCode: "ELA",
    name: "Firaol",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2035,
    teamCode: "ELA",
    name: "Gemechu",
    fname: "Birhanu",
    position: "DF",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 2036,
    teamCode: "ELA",
    name: "Natnael",
    fname: "Fitsum",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2037,
    teamCode: "ELA",
    name: "Ababu",
    fname: "Alemu",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2038,
    teamCode: "ELA",
    name: "Abebaw",
    fname: "Assefa",
    position: "MD",
    goals: 0,
    assists: 2,
  },
  {
    playerID: 2039,
    teamCode: "ELA",
    name: "Bereket",
    fname: "Barma",
    position: "MD",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 20310,
    teamCode: "ELA",
    name: "Mohammed",
    fname: "Hussein",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20311,
    teamCode: "ELA",
    name: "Nahom",
    fname: "Sileshi",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20312,
    teamCode: "ELA",
    name: "Yeshiwas",
    fname: "Tikmu",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20313,
    teamCode: "ELA",
    name: "Abraham",
    fname: "Mulat",
    position: "ST",
    goals: 8,
    assists: 1,
  },
  {
    playerID: 20314,
    teamCode: "ELA",
    name: "Chala",
    fname: "Tadesse",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20315,
    teamCode: "ELA",
    name: "Henok",
    fname: "Hailu",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20316,
    teamCode: "ELA",
    name: "Natnael",
    fname: "Mersha",
    position: "ST",
    goals: 0,
    assists: 0,
  },

  /**
   * Electrical B
   */
  {
    playerID: 1031,
    teamCode: "ELB",
    name: "Sisay",
    fname: "Bekele",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1032,
    teamCode: "ELB",
    name: "Fitsum",
    fname: "Getachew",
    position: "DF",
    goals: 2,
    assists: 2,
  },
  {
    playerID: 1033,
    teamCode: "ELB",
    name: "Girmachew",
    fname: "Mengistu",
    position: "DF",
    goals: 2,
    assists: 4,
  },
  {
    playerID: 1034,
    teamCode: "ELB",
    name: "Kassa",
    fname: "Birhanu",
    position: "DF",
    goals: 2,
    assists: 3,
  },
  {
    playerID: 1035,
    teamCode: "ELB",
    name: "Mulugeta",
    fname: "Mekuanint",
    position: "DF",
    goals: 1,
    assists: 1,
  },
  {
    playerID: 1036,
    teamCode: "ELB",
    name: "Nehemiah",
    fname: "Yishak",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1037,
    teamCode: "ELB",
    name: "Bereket",
    fname: "Nigussie",
    position: "MD",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 1038,
    teamCode: "ELB",
    name: "Bultum",
    fname: "Guluma",
    position: "MD",
    goals: 5,
    assists: 4,
  },
  {
    playerID: 1039,
    teamCode: "ELB",
    name: "Mohammed",
    fname: "",
    position: "MD",
    goals: 0,
    assists: 2,
  },
  {
    playerID: 10310,
    teamCode: "ELB",
    name: "Nigatu",
    nickname: "Jano",
    fname: "Paulos",
    position: "MD",
    goals: 3,
    assists: 4,
  },
  {
    playerID: 10311,
    teamCode: "ELB",
    name: "Samuel",
    fname: "Negalign",
    position: "MD",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 10312,
    teamCode: "ELB",
    name: "Biniyam",
    fname: "Dagne",
    position: "ST",
    goals: 5,
    assists: 4,
  },
  {
    playerID: 10313,
    teamCode: "ELB",
    name: "Birhanu",
    fname: "Adama",
    position: "ST",
    goals: 5,
    assists: 0,
  },
  {
    playerID: 10314,
    teamCode: "ELB",
    name: "Kaleb",
    fname: "Tesfay",
    position: "ST",
    goals: 0,
    assists: 0,
  },

  /**
   * IT
   */
  {
    playerID: 2041,
    teamCode: "ITE",
    name: "Michael",
    fname: "Alemayehu",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2042,
    teamCode: "ITE",
    name: "Barok",
    fname: "Dagim",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2043,
    teamCode: "ITE",
    name: "Dawit",
    fname: "Bezabih",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2044,
    teamCode: "ITE",
    name: "Ermias",
    fname: "Asmare",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2045,
    teamCode: "ITE",
    name: "Haben",
    fname: "Tesfaye",
    position: "DF",
    goals: 1,
    assists: 0,
  },
  {
    playerID: 2046,
    teamCode: "ITE",
    name: "Yeabsira",
    fname: "Mezgebu",
    nickname: "Yabs",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2047,
    teamCode: "ITE",
    name: "Zekarias",
    fname: "Alemu",
    position: "DF",
    goals: 1,
    assists: 4,
  },
  {
    playerID: 2048,
    teamCode: "ITE",
    name: "Ermias",
    fname: "Mulugeta",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2049,
    teamCode: "ITE",
    name: "Kevin",
    fname: "Shitaye",
    position: "MD",
    goals: 3,
    assists: 0,
    isCaptain: true,
  },
  {
    playerID: 20410,
    teamCode: "ITE",
    name: "Tekletsadik",
    fname: "Abebayehu",
    nickname: "Tekle",
    position: "MD",
    goals: 3,
    assists: 5,
  },
  {
    playerID: 20411,
    teamCode: "ITE",
    name: "Yonathan",
    fname: "Awoke",
    position: "MD",
    goals: 2,
    assists: 0,
  },
  {
    playerID: 20412,
    teamCode: "ITE",
    name: "Beken",
    fname: "Adugna",
    position: "ST",
    goals: 7,
    assists: 3,
  },

  /**
   * Mechanical
   */
  {
    playerID: 1041,
    teamCode: "MEC",
    name: "Eyob",
    fname: "",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1042,
    teamCode: "MEC",
    name: "Abdisa",
    fname: "",
    position: "DF",
    goals: 1,
    assists: 0,
  },
  {
    playerID: 1043,
    teamCode: "MEC",
    name: "Biruk",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1044,
    teamCode: "MEC",
    name: "Ebba",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1045,
    teamCode: "MEC",
    name: "Raji",
    fname: "",
    position: "DF",
    goals: 1,
    assists: 0,
  },
  {
    playerID: 1046,
    teamCode: "MEC",
    name: "Yishak",
    fname: "",
    position: "DF",
    goals: 2,
    assists: 0,
  },
  {
    playerID: 1047,
    teamCode: "MEC",
    name: "Yohannes",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1048,
    teamCode: "MEC",
    name: "Dereje",
    fname: "",
    position: "MD",
    goals: 1,
    assists: 1,
  },
  {
    playerID: 1049,
    teamCode: "MEC",
    name: "Josi",
    fname: "",
    position: "MD",
    goals: 5,
    assists: 5,
  },
  {
    playerID: 10410,
    teamCode: "MEC",
    name: "Kirubel",
    nickname: "Kira",
    fname: "",
    position: "MD",
    goals: 4,
    assists: 8,
  },
  {
    playerID: 10411,
    teamCode: "MEC",
    name: "Nahom",
    fname: "",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 10412,
    teamCode: "MEC",
    name: "Chacha",
    fname: "",
    position: "ST",
    goals: 12,
    assists: 8,
  },

  /**
   * Software
   */
  {
    playerID: 2051,
    teamCode: "SFT",
    name: "Liben",
    fname: "Hailu",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2052,
    teamCode: "SFT",
    name: "Alefew",
    fname: "Yimer",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2053,
    teamCode: "SFT",
    name: "Derbachew",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2054,
    teamCode: "SFT",
    name: "Ebsa",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2055,
    teamCode: "SFT",
    name: "Solomon",
    fname: "Ermias",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2056,
    teamCode: "SFT",
    name: "Temesgen",
    fname: "Talo",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2057,
    teamCode: "SFT",
    name: "Betsegaw",
    fname: "",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2058,
    teamCode: "SFT",
    name: "Daniel",
    fname: "",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 2059,
    teamCode: "SFT",
    name: "Natnael",
    fname: "Awel",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20510,
    teamCode: "SFT",
    name: "Suraphel",
    fname: "Kindu",
    position: "MD",
    goals: 1,
    assists: 0,
  },
  {
    playerID: 20511,
    teamCode: "SFT",
    name: "Nahom",
    fname: "Zerihun",
    position: "ST",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 20512,
    teamCode: "SFT",
    name: "Yididya",
    fname: "",
    position: "ST",
    goals: 1,
    assists: 2,
  },
  {
    playerID: 1051,
    teamCode: "SFT",
    name: "Dagnachew",
    fname: "",
    position: "GK",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1052,
    teamCode: "SFT",
    name: "Asegd",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1053,
    teamCode: "SFT",
    name: "Hawltu",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 1,
  },
  {
    playerID: 1054,
    teamCode: "SFT",
    name: "Zerihun",
    fname: "",
    position: "DF",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1055,
    teamCode: "SFT",
    name: "Dawit",
    fname: "Teshager",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1056,
    teamCode: "SFT",
    name: "Fantahun",
    fname: "Fekadu",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1057,
    teamCode: "SFT",
    name: "Natnael",
    fname: "Bahiru",
    position: "MD",
    goals: 3,
    assists: 1,
  },
  {
    playerID: 1058,
    teamCode: "SFT",
    name: "Natnael",
    fname: "Berhanu",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 1059,
    teamCode: "SFT",
    name: "Robel",
    fname: "Azmeraw",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 10510,
    teamCode: "SFT",
    name: "Yohannes",
    fname: "",
    position: "MD",
    goals: 0,
    assists: 0,
  },
  {
    playerID: 10511,
    teamCode: "SFT",
    name: "Emnet",
    fname: "Yohannes",
    position: "ST",
    goals: 2,
    assists: 0,
  },
];
