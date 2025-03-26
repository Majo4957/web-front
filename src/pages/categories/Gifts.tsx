import { SomeComponent } from "../../service/someComponent";
import Navbar from "../../ui/nav-bar";

export function Gifts() {
  return (
    <>
      <Navbar />
      <SomeComponent category="Gifts" /> 
    </>
  );
}

