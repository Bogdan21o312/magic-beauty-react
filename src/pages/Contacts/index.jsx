import React from 'react';
import Layout from "../../components/Layout/Layout";
import Way from "../../components/Way";
import Phone from "../../components/Phone";
import PhoneShop from "../../components/Phone/PhoneShop";
import Title from "../../components/TXT/Title";

const Index = () => {
    return (
        <Layout>
            <Way/>
            <div>
                <Title>
                    Номер салону <Phone/>
                </Title>
                <Title>
                    Номер магазину <PhoneShop/>
                </Title>
            </div>
        </Layout>
    );
};

export default Index;