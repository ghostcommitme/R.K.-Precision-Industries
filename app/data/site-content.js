export const company = {
  name: "R.K. Precision Industries",
  businessType: "Precision Tool Room Work",
  email: "rkprecisionindustries@gmail.com",
  phone: "9423452658",
  phoneLink: "+919423452658",
  address: "Shop No. 1053, Mulay I Square, K-232/233, MIDC Waluj, Chh. Sambhajinagar",
  gstin: "27AAHFR6904M1ZQ",
};

export const whatsappNumber = company.phoneLink.replace(/\D/g, "");

export const mapCoordinates = { latitude: 19.8439, longitude: 75.2285 };
export const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapCoordinates.latitude},${mapCoordinates.longitude}`;
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapCoordinates.latitude},${mapCoordinates.longitude}&z=16&output=embed`;

export const products = [
  { slug: "hsk-arbor", name: "HSK Arbor", detail: "HSK toolholding arbor for machining applications", overview: "An HSK arbor used to connect a cutting tool with a machine spindle. Review taper format, tool interface and assembly requirements with R.K. Precision Industries to identify the suitable configuration for your setup.", highlights: ["HSK interface for compatible spindle systems", "Tool connection and geometry selected for the application", "Configuration checked against machine and tooling requirements"], image: "/images/products/hsk-arbor/hsk-arbor-01.jpeg", gallery: ["/images/products/hsk-arbor/hsk-arbor-01.jpeg", "/images/products/hsk-arbor/hsk-arbor-02.jpeg"], alt: "HSK arbor and precision toolholding components" },
  { slug: "cnc-collet-chuck", name: "CNC Collet Chuck", detail: "Precision clamping for CNC setups", overview: "A CNC collet chuck assembly for holding compatible tooling or workpieces during machining. Confirm the machine interface, clamping range and component dimensions against your setup.", highlights: ["Compact collet-style clamping assembly", "Interface and bore selected for the machine and part", "Configuration reviewed against your machining setup"], image: "/images/products/cnc-collet-chuck/cnc-collet-chuck-01.jpeg", alt: "CNC collet chuck assembly" },
  { slug: "collet-chuck", name: "Collet Chuck", detail: "Secure, concentric component holding", overview: "A precision collet chuck used to grip compatible parts or tooling for machining and inspection setups. Share the required interface and part dimensions to identify a suitable arrangement.", highlights: ["Collet-based clamping design", "Suitable for repeatable holding in compatible setups", "Details confirmed to the workpiece and machine"], image: "/images/products/collet-chuck/collet-chuck-01.jpeg", alt: "Precision collet chuck and collet" },
  { slug: "dead-center", name: "Dead Center", detail: "Workpiece support for turning operations", overview: "A dead center supports a rotating workpiece between centers. The point, taper and dimensions should be selected to match the machine and component being supported.", highlights: ["Supports work between centers", "Point and taper matched to the machine setup", "Useful for turning and related machining operations"], image: "/images/products/dead-center/dead-center-01.jpeg", alt: "Precision dead center tool" },
  { slug: "gear-roller-tester", name: "Gear Roller Tester", detail: "Fixture for gear and roller inspection", overview: "A dedicated inspection fixture for checking gear or roller components in a repeatable setup. The part location, contact points and indicator arrangement are defined around the inspection requirement.", highlights: ["Purpose-built inspection fixture", "Repeatable part location and measurement setup", "Probe and contact arrangement tailored to the check"], image: "/images/products/gear-roller-tester/gear-roller-tester-01.jpeg", alt: "Gear roller testing fixture with dial indicator" },
  { slug: "hobbing-fixture-elfco", name: "Hobbing Fixture (ELFCO)", detail: "Workholding fixture for gear hobbing", overview: "A hobbing fixture supports and locates the component during a gear-cutting operation. The fixture arrangement is selected to suit the part geometry and machine setup.", highlights: ["Workholding for hobbing operations", "Locating features suited to the component", "Fixture details reviewed against the machine and part drawing"], image: "/images/products/hobbing-fixture-elfco/hobbing-fixture-elfco-01.jpeg", gallery: ["/images/products/hobbing-fixture-elfco/hobbing-fixture-elfco-01.jpeg", "/images/products/hobbing-fixture-elfco/hobbing-fixture-elfco-02.jpeg", "/images/products/hobbing-fixture-elfco/hobbing-fixture-elfco-03.jpeg"], alt: "ELFCO hobbing fixture and inspection assembly" },
  { slug: "hobbing-arbor", name: "Hobbing Arbor", detail: "Arbor tooling for gear machining setups", overview: "An arbor used to locate and support tooling or a component in a gear hobbing setup. Share the machine interface and drawing so the arbor can be matched to the intended operation.", highlights: ["Arbor-style tooling for gear machining", "Interface and locating features set to the machine and component", "Configuration reviewed against the operation requirements"], image: "/images/products/hobbing-arbor/hobbing-arbor-01.jpeg", gallery: ["/images/products/hobbing-arbor/hobbing-arbor-01.jpeg", "/images/products/hobbing-arbor/hobbing-arbor-02.jpeg"], alt: "Hobbing arbor and precision spindle tooling" },
  { slug: "steel-roller-cage", name: "Steel Roller Cage", detail: "Precision steel roller cage assembly", overview: "A steel roller cage designed to guide and retain rollers in a rotating assembly. Share your drawing or assembly details so the cage geometry, roller arrangement and fit can be reviewed for your application.", highlights: ["Steel cage construction for industrial assemblies", "Roller spacing and geometry matched to the application", "Designed around assembly and drawing requirements"], image: "/images/products/steel-rokker-cage/steel-rokker-cage-03.jpeg", gallery: ["/images/products/steel-rokker-cage/steel-rokker-cage-01.jpeg", "/images/products/steel-rokker-cage/steel-rokker-cage-02.jpeg", "/images/products/steel-rokker-cage/steel-rokker-cage-03.jpeg", "/images/products/steel-rokker-cage/steel-rokker-cage-04.jpeg"], alt: "Steel Roller Cage assembly" },
];
export const industries = [
  ["Automotive & transmission", "/images/industries/automative.jpg"],
  ["Gear manufacturing", "/images/industries/gear_manufacturing.jpg"],
  ["CNC machining", "/images/industries/cnc_machinw.jpg"],
  ["Precision tool rooms", "/images/industries/precision_tool_room.jpg"],
];

export const capabilities = [
  "Precision arbors & machine interfaces",
  "Collet chucks & workholding",
  "Hobbing and special-purpose fixtures",
  "Gear inspection fixtures and testers",
];

export const strengths = [
  ["01", "Application-specific tooling", "Fixtures, arbors and workholding shaped around a defined part and process."],
  ["02", "Drawing-led work", "Tooling requirements are reviewed against component dimensions and machine interfaces."],
  ["03", "Inspection-ready fixtures", "Locating and contact points are arranged to support repeatable checks."],
  ["04", "Direct coordination", "Discuss the requirement, drawing and application directly with R.K. Precision Industries."],
];
