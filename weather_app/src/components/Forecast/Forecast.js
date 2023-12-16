import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";

//array for storing days of week
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const Forecast = ({ data }) => {
    //variable to store the current date
    const currentDate = new Date().getDay();

    //append the previous days to the days array and store in a variable
    const foreCastDate = days.slice(currentDate, days.length).concat(days.slice(0, currentDate));
    console.log(foreCastDate);
    
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                <label className="day">{foreCastDate[idx]}</label>
                                <label className="description"></label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>

                ))}

            </Accordion>
        </>
    )
}

export default Forecast;