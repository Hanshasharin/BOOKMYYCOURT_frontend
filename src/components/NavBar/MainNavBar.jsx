


import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
  // MDBDropdownToggle
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

export default function App() {
  const [openNavNoToggler, setOpenNavNoToggler] = useState(false);


   const {user}=useSelector((store)=>store.user)
  //  console.log({user});
  return (
    <>
      <MDBNavbar expand='lg' light bgColor='primary'className='p-2 m-2 pt-4'>
        
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavNoToggler(!openNavNoToggler)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavNoToggler}>
            <MDBNavbarBrand href='#'>{user.name}  </MDBNavbarBrand>
            <MDBNavbarNav className='mr-auto mb-1 mb-lg-1 pt-4 '>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink  href='/addNewCourt'  active aria-current='true'>
                  AddNewcourt
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className='d-flex w-auto mb-1 mt-2 pt-3'>
              <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
              <MDBBtn outline>Search</MDBBtn>
              {/* <MDBDropdownToggle tag='a' className='nav-link ms-2' role='button'>
              {user.name}  
              </MDBDropdownToggle> */}
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

    </>
  );
}

// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBCollapse
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [openNav, setOpenNav] = useState(false);

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
//         <MDBNavbarToggler
//           type='button'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setOpenNav(!openNav)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>
//         <MDBCollapse navbar open={openNav}>
//           <MDBNavbarNav>
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
//                 Disabled
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }