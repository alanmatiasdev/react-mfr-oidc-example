/* eslint-disable @typescript-eslint/ban-ts-comment */
import Parcel from "single-spa-react/parcel";

export default function Header() {
  // @ts-ignore
  return <Parcel config={() => System.import("@example/header")} wrapWith="header" />;
}
