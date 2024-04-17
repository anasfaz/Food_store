import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header Component With a login button", () => {
  //first render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
    );
    // const LoginButton = screen.getByRole('button')
    //we can select specific button this way 👇
    const LoginButton = screen.getByRole('button',{name:'Login'})
    //we can do this way also but not recommended
    //const LoginButton=screen.getByText('Login')
    //assertion
    expect(LoginButton).toBeInTheDocument()
});

it("Should render Header Component With a cart item 0", () => {
    //first render
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
      );
      
      const cartItem = screen.getByText("Cart-(0 items)")
    
      expect(cartItem).toBeInTheDocument()
});
it("Should render Header Component with cart item", () => {
    //first render
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
      );
      //we can also use regex also directly
      const cartItem = screen.getByText(/Cart/)
    
      expect(cartItem).toBeInTheDocument()
});
it("Should change login button to logout button", () => {
    //first render
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
      );
      
      const LoginButton = screen.getByRole("button",{name:'Login'})
    fireEvent.click(LoginButton)
    const LogoutButton=screen.getByRole("button",{name:"Logout"})
      expect(LogoutButton).toBeInTheDocument()
  });