export const TEMPLATES = {
  trading: {
    key: "trading", label: "Trading desk", department: "Trading",
    tracks: {
      "IT & equipment": ["Laptop provisioned", "Mobile phone & SIM", "Hardware security key", "VPN access configured"],
      "System access": ["Email & calendar account", "Trading platform access", "Market data terminal", "Shared drives & internal portal"],
      "HR & documents": ["Employment contract signed", "Tax & social security registration", "Bank & payroll details", "Benefits enrollment"],
      "Compliance & regulatory": ["REMIT / market-abuse training", "Insider trading policy sign-off", "Code of conduct acknowledgment", "GDPR / data protection briefing"],
      "Facilities": ["Desk assignment", "Building access badge", "Parking permit"],
      "First-week schedule": ["Welcome & orientation session", "Team introductions"],
    },
  },
  compliance: {
    key: "compliance", label: "Compliance", department: "Compliance",
    tracks: {
      "IT & equipment": ["Laptop provisioned", "Mobile phone & SIM", "Hardware security key"],
      "System access": ["Email & calendar account", "Compliance case system", "Shared drives & internal portal"],
      "HR & documents": ["Employment contract signed", "Tax & social security registration", "Bank & payroll details", "Benefits enrollment"],
      "Compliance & regulatory": ["REMIT / market-abuse training", "Insider trading policy sign-off", "Code of conduct acknowledgment", "GDPR / data protection briefing", "Conflicts of interest declaration"],
      "Facilities": ["Desk assignment", "Building access badge"],
      "First-week schedule": ["Welcome & orientation session", "Team introductions"],
    },
  },
  corporate: {
    key: "corporate", label: "Corporate services", department: "Corporate services",
    tracks: {
      "IT & equipment": ["Laptop provisioned", "Mobile phone & SIM"],
      "System access": ["Email & calendar account", "HR information system", "Shared drives & internal portal"],
      "HR & documents": ["Employment contract signed", "Tax & social security registration", "Bank & payroll details", "Benefits enrollment"],
      "Compliance & regulatory": ["Code of conduct acknowledgment", "GDPR / data protection briefing"],
      "Facilities": ["Desk assignment", "Building access badge"],
      "First-week schedule": ["Welcome & orientation session", "Team introductions"],
    },
  },
  it: {
    key: "it", label: "IT", department: "IT",
    tracks: {
      "IT & equipment": ["Laptop provisioned", "Mobile phone & SIM", "Hardware security key", "Admin workstation"],
      "System access": ["Email & calendar account", "Privileged access management", "Infrastructure & cloud consoles", "Shared drives & internal portal"],
      "HR & documents": ["Employment contract signed", "Tax & social security registration", "Bank & payroll details", "Benefits enrollment"],
      "Compliance & regulatory": ["IT security & acceptable-use policy", "Code of conduct acknowledgment", "GDPR / data protection briefing"],
      "Facilities": ["Desk assignment", "Building access badge"],
      "First-week schedule": ["Welcome & orientation session", "Team introductions"],
    },
  },
  operations: {
    key: "operations", label: "Operations", department: "Operations",
    tracks: {
      "IT & equipment": ["Laptop provisioned", "Mobile phone & SIM"],
      "System access": ["Email & calendar account", "Settlement & back-office system", "Shared drives & internal portal"],
      "HR & documents": ["Employment contract signed", "Tax & social security registration", "Bank & payroll details"],
      "Compliance & regulatory": ["REMIT / market-abuse training", "Code of conduct acknowledgment", "GDPR / data protection briefing"],
      "Facilities": ["Desk assignment", "Building access badge"],
      "First-week schedule": ["Welcome & orientation session", "Team introductions"],
    },
  },
};
