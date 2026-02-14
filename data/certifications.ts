export type CertificationProps = {
  id: number,
  title: string,
  issuedBy: string
  issuedOn: string,
  expiredOn: string,
}

export const certification: CertificationProps[] = [
  {
    id: 1,
    title: "Cambridge English Entry Level Certificate in ESOL International (Entry 3) Key",
    issuedBy: "Cambridge University Press & Assessment English",
    issuedOn: "February 2015",
    expiredOn: "No Expiration",
  },
  {
    id: 2,
    title: "Cambridge English Entry Level Certificate in ESOL International (Entry 3) Preliminary",
    issuedBy: "Cambridge University Press & Assessment English",
    issuedOn: "June 2017",
    expiredOn: "No Expiration",
  },
  {
    id: 3,
    title: "Three.js Journey Completion",
    issuedBy: "Bruno Simon",
    issuedOn: "January 2024",
    expiredOn: "No Expiration"
  },
  {
    id: 4,
    title: "AWS Certified Developer - Associate",
    issuedBy: "Amazon Web Services (AWS)",
    issuedOn: "December 2024",
    expiredOn: "December 2027"
  },
  {
    id: 5,
    title: "Cambridge English Entry Level Certificate in ESOL International (Entry 2) Advanced",
    issuedBy: "Cambridge University Press & Assessment English",
    issuedOn: "December 2025",
    expiredOn: "No Expiration"
  }
]