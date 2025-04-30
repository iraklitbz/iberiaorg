import React, { useState } from "react";
import Link from "next/link";
import { useIntl } from 'react-intl'
import MainLayout from "../layouts/MainLayout";
import Bradcrumbs from "../components/Breadcrumbs/Breadcrumbs";
const Ourteam = ({ }) => {
    const intl = useIntl();
    const [ourTeamArray, setOurTeamArray] = useState([
        {
            id: '1',
            name: intl.formatMessage({ id: "ourteam_team1_1" }),
            profileUrl: 'https://iberiainfo.me/wp-content/uploads/2022/02/kety.jpg',
            cargo: intl.formatMessage({ id: "ourteam_team1_2" }),
            hasContact: true,
            contact: 'facebook',
            contactUrl: 'loram'
        },
        {
            id: '2',
            name: intl.formatMessage({ id: "ourteam_team2_1" }),
            profileUrl: 'https://iberiainfo.me/wp-content/uploads/2022/02/Lana.jpg',
            cargo: intl.formatMessage({ id: "ourteam_team2_2" }),
            hasContact: false,
        },
        {
            id: '3',
            name: intl.formatMessage({ id: "ourteam_team3_1" }),
            profileUrl: 'http://cms.iberiainfo.me/wp-content/uploads/2023/06/tako.jpg',
            cargo: intl.formatMessage({ id: "ourteam_team3_2" }),
            hasContact: true,
            contact: 'twitter',
            contactUrl: 'loram'
        },
        {
            id: '4',
            name: intl.formatMessage({ id: "ourteam_team4_1" }),
            profileUrl: 'http://cms.iberiainfo.me/wp-content/uploads/2023/06/magda.jpg',
            cargo: intl.formatMessage({ id: "ourteam_team4_2" }),
            hasContact: true,
            contact: 'facebook',
            contactUrl: 'loram'
        },
        {
            id: '5',
            name: intl.formatMessage({ id: "ourteam_team5_1" }),
            profileUrl: 'https://iberiainfo.me/wp-content/uploads/2022/02/tamar.jpg',
            cargo: intl.formatMessage({ id: "ourteam_team5_2" }),
            hasContact: false,
        },
        {
            id: '6',
            name: intl.formatMessage({ id: "ourteam_team6_1" }),
            profileUrl: 'https://iberiainfo.me/wp-content/uploads/2022/02/nana.jpg',
            cargo: intl.formatMessage({ id: "ourteam_team6_2" }),
            hasContact: true,
            contact: 'twitter',
            contactUrl: 'loram'
        },
        {
            id: '7',
            name: intl.formatMessage({ id: "ourteam_team7_1" }),
            profileUrl: 'https://iberiainfo.me/wp-content/uploads/2022/02/ani.jpg',
            cargo: intl.formatMessage({ id: "ourteam_team7_2" }),
            hasContact: true,
            contact: 'twitter',
            contactUrl: 'loram'
        },
        {
            id: '8',
            name: intl.formatMessage({ id: "ourteam_team8_1" }),
            profileUrl: 'http://cms.iberiainfo.me/wp-content/uploads/2023/06/hugo.jpg',
            cargo: intl.formatMessage({ id: "ourteam_team8_2" }),
            hasContact: true,
            contact: 'twitter',
            contactUrl: 'loram'
        },
        {
            id: '9',
            name: intl.formatMessage({ id: "ourteam_team9_1" }),
            profileUrl: 'http://cms.iberiainfo.me/wp-content/uploads/2023/06/manu.jpg',
            cargo: intl.formatMessage({ id: "ourteam_team9_2" }),
            hasContact: true,
            contact: 'twitter',
            contactUrl: 'loram'
        }
    ])
    return (
        <MainLayout>

            <section className="position-relative z-index-1 bg-iberia  padding-y-lg">
                <div className="container max-width-adaptive-lg margin-bottom-lg">
                    <Bradcrumbs />
                </div>

                <div className="container max-width-adaptive-lg">

                    <div className="margin-bottom-xl">
                        <h2 className="text-center">{intl.formatMessage({ id: "ourteam" })}</h2>
                    </div>
                    <div className="grid gap-sm">
                        {ourTeamArray.map(element => (
                            <div key={element.id} className="card-v2 card-v2--blur-fx radius-md col-4@md">

                                <figure>
                                    <img src={element.profileUrl} alt="Image description" loading="lazy" />
                                    <figcaption class="card-v2__caption padding-sm text-center">
                                        <div class="text-md text-base@md">{element.name}</div>
                                        <div class="margin-top-xxxs text-xs" dangerouslySetInnerHTML={{ __html: element.cargo }}></div>
                                    </figcaption>
                                </figure>

                            </div>
                        ))}


                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

export default Ourteam;
