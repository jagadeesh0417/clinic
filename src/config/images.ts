// Central image registry — every Unsplash URL must be defined here,
// never inlined in components, so we can assert uniqueness at build time.

const URLS = {
  /** photo-1631217868264 — medical team in conference */
  MEDICAL_TEAM_CONFERENCE: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133",
  /** photo-1581595220892 — doctor with tablet */
  DOCTOR_TABLET: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c",
  /** photo-1551076805-e1869033e561 — surgery */
  SURGERY: "https://images.unsplash.com/photo-1551076805-e1869033e561",
  /** photo-1579684385127-1ef15d508118 — medical tech */
  MEDICAL_TECH: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
  /** photo-1588776814546-1ffcf47267a5 — dental */
  DENTAL: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  /** photo-1519494026892-80bbd2d6fd0d — reception */
  RECEPTION: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
  /** photo-1666214280557-f1b5022eb634 — consultation */
  CONSULTATION: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634",
  /** photo-1460925895917-afdab827c52f — dashboard */
  DASHBOARD: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  /** photo-1554224155-8d04cb21cd6c — chart */
  CHART: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
  /** photo-1454165804606-c3d57bc86b40 — consulting */
  CONSULTING: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  /** photo-1560472354-b33ff0c44a43 — marketing */
  MARKETING: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
  /** photo-1576091160550-2173dba999ef — equipment */
  EQUIPMENT: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  /** photo-1559757175-5700dde675bc — doctor */
  DOCTOR: "https://images.unsplash.com/photo-1559757175-5700dde675bc",
  /** photo-1570172619644-dfd03ed5d881 — stethoscope */
  STETHOSCOPE: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
  /** photo-1598256989800-fe5f95da9787 — clinic */
  CLINIC: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787",
  /** photo-1600880292203-757bb62b4baf — team */
  TEAM: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
  /** photo-1629909613654-28e377c37b09 — modern clinic */
  MODERN_CLINIC: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
  /** photo-1451187580459-43490279c0fa — global network */
  GLOBAL_NETWORK: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  /** photo-1526778548025-fa2f459b5f6a — global tech */
  GLOBAL_TECH: "https://images.unsplash.com/photo-1526778548025-fa2f459b5f6a",
  /** photo-1576091160399-112ba8d25d1d — AI network */
  AI_NETWORK: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
  /** photo-1532094349884-543bc11b234d — AI brain */
  AI_BRAIN: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
  /** photo-1555949963-ff9fe0c870eb — data */
  DATA: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
  /** photo-1587854692152-cbe660dbde88 — products */
  PRODUCTS: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
  /** photo-1556228720-195a672e8a03 — skincare */
  SKINCARE: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  /** photo-1584308666744-24d5c474f2ae — wellness */
  WELLNESS: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
  /** photo-1550572017-edd951b55104 — treatment */
  TREATMENT: "https://images.unsplash.com/photo-1550572017-edd951b55104",
  /** photo-1583912267550-d6c2db41684e — equipment rental */
  EQUIPMENT_RENTAL: "https://images.unsplash.com/photo-1583912267550-d6c2db41684e",
  /** photo-1580281657527-47f2d7d52b5c — equipment 2 */
  EQUIPMENT_RENTAL_2: "https://images.unsplash.com/photo-1580281657527-47f2d7d52b5c",
  /** photo-1581056771107-24ca5f033842 — equipment 3 */
  EQUIPMENT_RENTAL_3: "https://images.unsplash.com/photo-1581056771107-24ca5f033842",
  /** photo-1559839734-2b71ea197ec2 — rental support */
  RENTAL_SUPPORT: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  /** photo-1517836357463-d25dfeac3438 — fitness */
  FITNESS: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  /** photo-1560750588-73207b1ef5b8 — wellness service */
  WELLNESS_SERVICE: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8",
  /** photo-1544367567-0f2fcb009e0b — yoga */
  YOGA: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
  /** photo-1582750433449-648ed127bb54 — staff */
  STAFF: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
  /** photo-1594824476967-48c8b964273f — staff 2 */
  STAFF_2: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
} as const;

// Build-time dedup assertion
const seen = new Set<string>();
for (const [key, url] of Object.entries(URLS)) {
  const base = url.split("?")[0];
  if (seen.has(base)) {
    throw new Error(`[images.ts] Duplicate URL detected: ${base} (key: ${key})`);
  }
  seen.add(base);
}

export { URLS };

/** Helper to append query params for sizing */
export function img(url: string, w = 800, q = 80): string {
  return `${url}?w=${w}&q=${q}`;
}
