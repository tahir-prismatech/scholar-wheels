// Driver License Data (Image 1)
const vehicleData = [
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
    {
      vehicleNo: "TX1234",
      makeModel: "Toyota Hiace 2021",
      type: "Van",
      year: 2021,
      regExpiry: "2026-01-12",
      status: "Active",
      assignedTo: "Route 12",
    },
  ]

const driverLicenseData = [
  {
    id: 1,
    driverName: "John Mokoena",
    licenseCategory: "C1",
    contact: "082 555 1234",
    licenseNo: "DRV123456",
    expiryDate: "2025-04-15",
    status: "Active",
    assignedTo: "TX1234"
  },
  {
    id: 2,
    driverName: "Sarah Johnson",
    licenseCategory: "C2",
    contact: "071 234 5678",
    licenseNo: "DRV789012",
    expiryDate: "2024-12-20",
    status: "Expiring",
    assignedTo: "NA"
  },
  {
    id: 3,
    driverName: "Ahmed Hassan",
    licenseCategory: "B",
    contact: "083 987 6543",
    licenseNo: "DRV345678",
    expiryDate: "2026-01-10",
    status: "Active",
    assignedTo: "TX5678"
  },
  {
    id: 4,
    driverName: "Maria Santos",
    licenseCategory: "C1",
    contact: "079 876 5432",
    licenseNo: "DRV901234",
    expiryDate: "2023-11-05",
    status: "Expired",
    assignedTo: "NA"
  },
  {
    id: 5,
    driverName: "David Smith",
    licenseCategory: "C3",
    contact: "084 555 9876",
    licenseNo: "DRV567890",
    expiryDate: "2023-08-15",
    status: "Expired",
    assignedTo: "NA"
  },
  {
    id: 6,
    driverName: "Fatima Ali",
    licenseCategory: "C1",
    contact: "072 321 9876",
    licenseNo: "DRV654321",
    expiryDate: "2025-09-30",
    status: "Active",
    assignedTo: "TX9012"
  }
];

// Route Data (Image 2)
const routeData = [
  {
    id: 1,
    routeName: "Route 101",
    startPoint: "Soweto",
    endPoint: "Sandton",
    assignedVehicle: "TX1234",
    assignedDriver: "John Mokoena",
    status: "Active"
  },
  {
    id: 2,
    routeName: "Morning A",
    startPoint: "Pretoria North",
    endPoint: "Hatfield",
    assignedVehicle: "-",
    assignedDriver: "-",
    status: "Draft"
  },
  {
    id: 3,
    routeName: "Midday Loop",
    startPoint: "Durban CBD",
    endPoint: "Westville",
    assignedVehicle: "TX1234",
    assignedDriver: "John Mokoena",
    status: "Assigned"
  },
  {
    id: 4,
    routeName: "Late Ride",
    startPoint: "Cape Town CBD",
    endPoint: "Bellville",
    assignedVehicle: "-",
    assignedDriver: "-",
    status: "Draft"
  },
  {
    id: 5,
    routeName: "Route 101",
    startPoint: "Soweto",
    endPoint: "Sandton",
    assignedVehicle: "TX1234",
    assignedDriver: "John Mokoena",
    status: "Active"
  },
  {
    id: 6,
    routeName: "Route 101",
    startPoint: "Soweto",
    endPoint: "Sandton",
    assignedVehicle: "TX1234",
    assignedDriver: "John Mokoena",
    status: "Active"
  }
];

// Export for use in components
export { driverLicenseData, routeData, vehicleData };