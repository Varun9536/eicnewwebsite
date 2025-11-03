
import proces from "../assets/new2025/home/devProcess/process.png"
import styled from 'styled-components'

export default function DevelopmentProcess() {


    const steps = [
        { title: "Discover", detail: "Assessing the requirements" },
        { title: "Define", detail: "Determine the scope and creating an SRS" },
        { title: "Design", detail: "System Design, UI/UX Design, Wireframing" },
        { title: "Development", detail: "Coding APIs, Debugging, Testing" },
        { title: "Delivery", detail: "Maintenance & Support" },
       
    ];

    const ProcessConatiner = styled.div`
    
    display : flex;
    flex-direction : column;
    `

    const ImggBox = styled.div`

    width : 100% ;

    img
    {
        width : 100%
    }
    ` ;

    const TextBox = styled.div`
        
    
    display : grid;
    grid-template-columns : repeat(5 , 1fr) ;
    grid-template-rows : repeat(2 , 1fr) ;
    justify-items :center ;

    gap : 0.5rem 0rem ;

    

    `;




    return (

        <ProcessConatiner>

            <ImggBox>
                <img src={proces} alt="" />
            </ImggBox>
            <TextBox>

                {steps.map((item, index) =>
                (
                    <div key={index}>{item.title}</div>
                ))}

                {steps.map((item, index) =>
                (
                    <div key={index}>{item.detail}</div>
                ))}



            </TextBox>


        </ProcessConatiner>


    )
}
