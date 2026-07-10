export interface Doctor {
  id: string;
  name: string;
  qualifications: string | null;
  specialty: string;
  role: string;
  nmcRegistration: string | null;
  photo: string | null;
  bio: string | null;
  isFounder: boolean;
}

export const doctors: Doctor[] = [
  {
    id: "dr-vikas-singh",
    name: "Dr. Vikas Singh",
    qualifications: null, // TODO_VERIFY
    specialty: "Aesthetic & Cosmetic Medicine",
    role: "Founder & Chief Medical Officer",
    nmcRegistration: null, // TODO_VERIFY
    photo: null,
    bio: null,
    isFounder: true,
  },
  {
    id: "dr-subramini",
    name: "Dr. Subramini",
    qualifications: "M.S., M.Ch., F.I.C.S., F.A.I.S., Ph.D.",
    specialty: "Consultant Cosmetic, Plastic & Craniofacial Reconstructive Surgeon",
    role: "Consultant",
    nmcRegistration: null, // TODO_VERIFY
    photo: null,
    bio: null,
    isFounder: false,
  },
  {
    id: "dr-nandita",
    name: "Dr. Nandita",
    qualifications: "MDS (OMFS)",
    specialty: "Oral & Maxillofacial Surgeon",
    role: "Consultant",
    nmcRegistration: null, // TODO_VERIFY
    photo: null,
    bio: null,
    isFounder: false,
  },
  {
    id: "dr-d-r-sekhar",
    name: "Dr. D R Sekhar",
    qualifications: null, // TODO_VERIFY
    specialty: "Plastic, Aesthetic & Reconstructive Surgery",
    role: "Senior Consultant",
    nmcRegistration: null, // TODO_VERIFY
    photo: null,
    bio: null,
    isFounder: false,
  },
  {
    id: "dr-surindher-d-s-a",
    name: "Dr. Surindher D.S.A",
    qualifications: "MBBS, MS, MCh (Plastic Surgery)",
    specialty: "Plastic Surgeon",
    role: "Consultant",
    nmcRegistration: null, // TODO_VERIFY
    photo: null,
    bio: null,
    isFounder: false,
  },
  {
    id: "dr-aamod-rao",
    name: "Dr. Aamod Rao",
    qualifications: "MBBS, MS, Fellowship in Aesthetic Surgery (Brazil)",
    specialty: "Aesthetic Surgery",
    role: "Consultant",
    nmcRegistration: null, // TODO_VERIFY
    photo: null,
    bio: null,
    isFounder: false,
  },
  {
    id: "dr-arivazhagan",
    name: "Dr. Arivazhagan",
    qualifications: "MBBS, MS, MCh",
    specialty: "Cardiologist, Cardiothoracic & Vascular Surgeon — EECP & ECMR",
    role: "Consultant",
    nmcRegistration: null, // TODO_VERIFY
    photo: null,
    bio: null,
    isFounder: false,
  },
  {
    id: "dr-mohsin-pasha",
    name: "Dr. Mohsin Pasha",
    qualifications: null, // TODO_VERIFY
    specialty: "General Physician",
    role: "Consultant",
    nmcRegistration: null, // TODO_VERIFY
    photo: null,
    bio: null,
    isFounder: false,
  },
];
