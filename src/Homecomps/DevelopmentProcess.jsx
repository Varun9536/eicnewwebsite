
import proces from "../assets/new2025/home/devProcess/process.png"
import styled from 'styled-components'
import HeadingwithSunheading from "../UtilityComponents/HeadingAndSubheading/HeadingwithSunheading";

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
    margin-top : 2rem;

    `

    const ImggBox = styled.div`

    width : 76% ;
    margin : 0px auto;

    img
    {
        width : 100%
    }
    ` ;

    const TextBox = styled.div`

    width : 80% ;
    margin : 0px auto;
    margin-top : 1rem;
        
    
    display : grid;
    grid-template-columns : repeat(5 , 1fr) ;
    grid-template-rows : repeat(2 , 0.8fr) ;
    justify-items :center ;

    `;


    const Container = styled.div`

margin : 3rem 0px;
`;




    return (

        <>

            <Container>
                <HeadingwithSunheading heading={" Process we follow"} subheading={" We Simplify Software Development Process"} />
                <ProcessConatiner>

                    <ImggBox>
                        <img src={proces} alt="" />
                    </ImggBox>

                    <TextBox>

                        {steps.map((item, index) =>
                        (
                            <div className="font-20px font-600" key={index}>{item.title}</div>
                        ))}

                        {steps.map((item, index) =>
                        (
                            <div className="px-8 text-center " key={index}>{item.detail}</div>
                        ))}

                    </TextBox>
                </ProcessConatiner>
            </Container>

        </>




    )
}
