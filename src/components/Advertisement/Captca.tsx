import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios';


function Captca() {
    const Router = useRouter();
    const [chosenAns, setChosenAns] = useState('');

    function handleChange(e:any){
        const {value} = e.target;
        setChosenAns(value);
    }
    
    function handleSubmit(e:any) {
        e.preventDefault();
        if (chosenAns === '') {
            alert('Select the answer.');
        }else{
            if (chosenAns === '10') {
                Router.push("/profile");
            }else{
                alert('It was a wrong answer.');
            }
        }
    }



    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-4 rounded-lg w-full md:w-4/12">
                <h1 className='text-3xl font-bold'>5 + 5 = ?</h1>
                <hr />
                <br />
                <form onSubmit={handleSubmit}>
                    <input type="radio" id="answer1" onChange={handleChange} name="answer" defaultValue={10} />
                    <label className='text-xl mx-4' htmlFor="answer1">10</label>
                    <br />
                    <input type="radio" id="answer2" onChange={handleChange} name="answer" defaultValue={50} />
                    <label className='text-xl mx-4' htmlFor="answer2">50</label>
                    <br />
                    <input type="radio" id="answer3" onChange={handleChange} name="answer" defaultValue={5} />
                    <label className='text-xl mx-4' htmlFor="answer3">5</label>
                    <br />
                    <br />
                    {/* <input className="bg-blue-500 text-white px-4 py-2 mt-4 rounded" type="submit" defaultValue="Submit" /> */}
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" disabled={false}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Captca