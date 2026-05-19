import { Lusitana, Noto_Sans_SC } from "next/font/google";

export const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "600", "700"],
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
