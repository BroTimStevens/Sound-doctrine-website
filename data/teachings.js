
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
    {
    id: "ca5a7412a596d05f841024acd288ccde",
    title: "Tabernacles Pt. 4 — Deuteronomy Chapters 16–20",
    category: "Bible Studies",
    description: "Continue the Feast of Tabernacles Bible study with Bro Tim, covering Deuteronomy chapters 16 through 20.",
  },
  {
  id: "9d311b59e613f991fd3460aa216278cd",
  title: "Tabernacles Pt. 5 — Deuteronomy Chapters 21–25",
  category: "Bible Studies",
  description: "Continue the Feast of Tabernacles Bible study with Bro Tim, covering Deuteronomy chapters 21 through 25.",
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
