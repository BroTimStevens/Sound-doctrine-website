
export const cloudflareCustomerCode = "customer-09hxjkro439e79d1";

export const featuredTeachingId =
  "38b8546c11b72c8f24880a2756b3a892";

export const teachings = [
  {
    id: "38b8546c11b72c8f24880a2756b3a892",
    title: "Tabernacles Pt. 3 — Deuteronomy Chapters 11–16",
    category: "Bible Studies",
    description:
      "Continue studying the Feast of Tabernacles and the book of Deuteronomy with Bro Tim.",
  },
];

export function getFeaturedTeaching() {
  return teachings.find(
    (teaching) => teaching.id === featuredTeachingId
  );
}

export function getTeachingEmbedUrl(id) {
  return `https://${cloudflareCustomerCode}.cloudflarestream.com/${id}/iframe`;
}

export function getTeachingWatchUrl(id) {
  return `https://${cloudflareCustomerCode}.cloudflarestream.com/${id}/watch`;
}
