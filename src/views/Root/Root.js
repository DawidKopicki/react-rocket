import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TwittersView from '../TwittersView/TwittersView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

const initialStateItems = [
        {
            image: 'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/square_480/oapgW_Fp_400x400.jpg',
            name: 'Dan Abramov',
            description: 'Working on @reactjs. The demo guy.',
            twitterLink: 'https://twitter.com/dan_abramov',
        },
        {
            image: 'https://pbs.twimg.com/profile_images/1166030195834273794/pBb6hjVb_400x400.jpg',
            name: 'Ryan Florence',
            description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
            twitterLink: 'https://twitter.com/ryanflorence',
        },
        {
            image: 'https://miro.medium.com/max/3150/1*2ysGC1u4jayrk3Uu3VG6Zg.jpeg',
            name: 'Michael Jackson',
            description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
            twitterLink: 'https://twitter.com/mjackson',
        },
        {
            image: 'https://avatars0.githubusercontent.com/u/1500684?v=4',
            name: 'Kent C. Dodds',
            description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
            twitterLink: 'https://twitter.com/kentcdodds',
        }
    ];

class Root extends React.Component {
    state = {
        items: [...initialStateItems]
    };

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }));

        e.target.reset();

    }

    render() {
        return (
            <BrowserRouter>
                <>
                    <Header />
                    <h1>hello World</h1>
                    <Switch>
                        <Route exact path="/" component={TwittersView} />
                        <Route path="/articles" component={ArticlesView} />
                        <Route path="/notes" component={NotesView} />
                    </Switch>
                    <Modal/>
                </>
            </BrowserRouter>
        )
    }
}

export default Root;