import { useEffect, useState } from 'react'
import Loader from '../../../UI/loader/loader.jsx'
import AdviceChart from '../advice-chart.jsx'
import Form from '../form/form.jsx'
import cl from './advice.module.scss'


const Advice = () => {
    const [advice, setAdvice] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const func = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://api.adviceslip.com/advice')
                const {slip} = await response.json()

                setAdvice(slip.advice)
            }
            catch {
                console.log('Error!')
            }
            finally {
                setIsLoading(false)
            }
        }
        func()
    }, [])

    const handleSubmit = async (id) => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://api.adviceslip.com/advice/${id}`)
            const {slip} = await response.json()

            setAdvice(slip.advice)
        }
        catch {
            console.log('Error!')
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit} disabled={isLoading} />
            {
                isLoading
                    ? <Loader />
                    : (
                        <>
                            <p className={cl.text}>{ advice }</p>
                            <AdviceChart
                                advice={ advice }
                            />
                        </>
                    )
            }

        </>
    );
};

export default Advice;
