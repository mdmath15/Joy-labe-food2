import React from "react";
import FormEditAddressPage from "../../components/FormEditAddressPage";
import { Header } from "../../components/Header";
import useRequestData from "../../hooks/useRequestData";
import { Container } from "../../components/FormEditAddressPage/styled";
import useProtectedPage from "../../hooks/useProtectedPage";

const EditAdressPage = () => {
  const { data} = useRequestData({}, "/profile/address");
console.log(data);

useProtectedPage()
  return (
    <div>
      <Header />
      <Container>
       {data.address && <FormEditAddressPage dataAddress={data}/>}
      </Container>
    </div>
  );
};

export default EditAdressPage;
