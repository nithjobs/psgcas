import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';

const EventsFinder = () => {

    const [data, setData] = useState([]);
    const [searchtext, setSearchText] = useState('');

    useEffect(() => {
        const fetchdata = async () => {
            const response = await fetch("http://localhost:5000/events", {
                method: "GET"
            }).then(res => {
                return res.json();
            })
            setData(response);
        }
        fetchdata();
    }, []);

    const findtheevent = async (e) => {
        e.preventDefault();
        try {
            if(searchtext) {
                let intsearchtext = parseInt(searchtext)
                const response = await fetch(`http://localhost:5000/events/${intsearchtext}`, {
                    method: "GET"
                }).then(res => {
                    return res.json();
                })
                console.log(response)
                setData([response]);
            } else {
                const fetchdata = async () => {
                    const response = await fetch("http://localhost:5000/events", {
                        method: "GET"
                    }).then(res => {
                        return res.json();
                    })
                    setData(response);
                }
                fetchdata();
            }
        } catch (err) {
            console.log(err.message);
        }
    }


    return (
        <Fragment>
            <div>
                <div>
                    <input type="text" value={searchtext} onChange={e => setSearchText(e.target.value)} />
                    <button onClick={findtheevent}>Search</button>
                </div>


                {data ? data.map((d) => (
                    <li key={d.event_id}>{d.department}</li>
                )) : <>No Data</>}
            </div>
        </Fragment>
    )
};

export default EventsFinder;
