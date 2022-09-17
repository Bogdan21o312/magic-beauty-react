import React from 'react';
import Layout from "../../components/Layout/Layout";
import Services from "../../components/Services";
import Why from "../../components/Why";
import Works from "../../components/Works";
import Certificate from "../../components/Certificate";

const Index = () => {
    return (
        <Layout>
            <Services/>
            <Why/>
            <Works/>
            <Certificate/>
        </Layout>
    );
};

export default Index;