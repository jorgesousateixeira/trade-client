import { Outlet } from 'react-router-dom';
import {Footer} from "./footer/footer";

export function PublicContainer() {
  return (
    <>
      <Outlet />
    </>
  );
}
