
import PropTypes from 'prop-types';
import styled from 'styled-components'

export default function HeadingwithSunheading({ heading, subheading }) {


    const MainContainer = styled.div`
    display : grid;
    grid-template-columns : repeat(1 , 1fr) ;
    grid-template-rows: repeat(2, 1fr);
    justify-items : center
        
    ` ;

    const Heading = styled.div`

      align-content : end ;
        
    ` ;


    return (
        <>

            <MainContainer>
                <Heading className='font-600 font-20px blueTextGlobalClass'>{heading} </Heading>
                <div className='font-600 font-31px'>{subheading}</div>
            </MainContainer>



        </>
    )
}


HeadingwithSunheading.prototypes = {
    heading : PropTypes.string ,
    subheading :PropTypes.string,
}
