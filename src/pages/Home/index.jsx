import React, {useEffect} from 'react';
import Layout from "../../components/Layout/Layout";
import Services from "../../components/Services";
import Why from "../../components/Why";
import Works from "../../components/Works";
import Certificate from "../../components/Certificate";
import Brand from "../../components/Brand";

const Index = () => {

    return (
        <Layout>
            <Services/>
            <Why/>
            <Works/>
            <Certificate/>
            <Brand/>
        </Layout>
    );
};

export default Index;