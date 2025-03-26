import { SomeComponent } from "../../service/someComponent";
import Navbar from "../../ui/nav-bar";

export function Clothing() {
  return (
    <>
      <Navbar />
      <SomeComponent category="Clothing" /> 
    </>
  );
}