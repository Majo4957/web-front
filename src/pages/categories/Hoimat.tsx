import { SomeComponent } from "../../service/someComponent";
import Navbar from "../../ui/nav-bar";

export function Hoimat () {
  return (
    <>
      <Navbar />
      <SomeComponent category="Home" /> 
    </>
  );
}