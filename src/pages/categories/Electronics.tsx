import { SomeComponent } from "../../service/someComponent";
import Navbar from "../../ui/nav-bar";

export function Electronics() {
  return (
    <>
      <Navbar />
      <SomeComponent category="Electronics" />
    </>
  );
}

