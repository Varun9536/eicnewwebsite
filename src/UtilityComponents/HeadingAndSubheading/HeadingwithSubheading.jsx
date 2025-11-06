import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  text-align: center;
`;

const Heading = styled.div`
  align-content: end;
`;

export default function HeadingwithSubheading({ heading, subheading }) {
  return (
    <MainContainer>
      <Heading className="font-600 font-20px blueTextGlobalClass">
        {heading}
      </Heading>
      <div className="font-600 font-31px">{subheading}</div>
    </MainContainer>
  );
}


HeadingwithSubheading.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};
