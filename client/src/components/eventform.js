import React, { Fragment, useState } from "react";

const EventForm = () => {

    const [department, setDepartment] = useState('');
    const [typeofactivity, setTypeofactivity] = useState('');
    const [printToggler, setPrintToggler] = useState(false);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {department, typeofactivity};
            const response = await fetch("http://localhost:5000/events", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then(res => {
                return res.json();
            })
            if (response.success && response.success === true) {
                setPrintToggler(true);
            }
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    const onPrint = () => {
        window.print();
    }


    return (
        <Fragment>
            <div>
                <h1>Event Application Form</h1>
                <form >
                <label>
                    Department:
                    <input type="text" name="department" id="department" value={department} onChange={e => setDepartment(e.target.value)} />
                </label><br />
                <label>
                    Type of Activity:
                    <input type="text" name="toa" id="toa" value={typeofactivity} onChange={e => setTypeofactivity(e.target.value)} />
                </label>

                <button onClick={onSubmitForm} >Save</button>
                <button onClick={onPrint} disabled={!printToggler}>Print</button>
                </form>
            </div>
        </Fragment>
    );
}

export default EventForm;